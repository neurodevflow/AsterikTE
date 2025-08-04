// Brevo SDK Performance Testing Utility

interface BrevoPerformanceTest {
  sdkLoadTime: number | null;
  initializationTime: number | null;
  popupShowTime: number | null;
  totalLoadTime: number | null;
  errors: string[];
  isReady: boolean;
}

declare global {
  interface Window {
    BrevoPerformanceTest?: BrevoPerformanceTest;
  }
}

export class BrevoTester {
  private static instance: BrevoTester;
  private testResults: BrevoPerformanceTest = {
    sdkLoadTime: null,
    initializationTime: null,
    popupShowTime: null,
    totalLoadTime: null,
    errors: [],
    isReady: false
  };
  
  private startTime = performance.now();

  private constructor() {
    this.initializeTest();
  }

  static getInstance(): BrevoTester {
    if (!BrevoTester.instance) {
      BrevoTester.instance = new BrevoTester();
    }
    return BrevoTester.instance;
  }

  private initializeTest() {
    if (typeof window === 'undefined') return;
    
    window.BrevoPerformanceTest = this.testResults;
    
    // Test 1: SDK Loading Time
    this.testSDKLoading();
    
    // Test 2: Initialization Time
    this.testInitialization();
    
    // Test 3: Popup Display Time
    this.testPopupDisplay();
    
    // Test 4: Overall Performance
    this.testOverallPerformance();
  }

  private testSDKLoading() {
    const checkSDKLoaded = () => {
      if (typeof window !== 'undefined' && window.Brevo) {
        this.testResults.sdkLoadTime = performance.now() - this.startTime;
        console.log(`✅ Brevo SDK loaded in ${this.testResults.sdkLoadTime.toFixed(2)}ms`);
        return true;
      }
      return false;
    };

    // Check immediately
    if (!checkSDKLoaded()) {
      // Check every 100ms for up to 10 seconds
      let attempts = 0;
      const maxAttempts = 100;
      
      const checkInterval = setInterval(() => {
        attempts++;
        
        if (checkSDKLoaded()) {
          clearInterval(checkInterval);
        } else if (attempts >= maxAttempts) {
          clearInterval(checkInterval);
          this.testResults.errors.push('SDK failed to load within 10 seconds');
          console.error('❌ Brevo SDK failed to load within 10 seconds');
        }
      }, 100);
    }
  }

  private testInitialization() {
    const initStart = performance.now();
    
    const checkInitialized = () => {
      if (typeof window !== 'undefined' && Array.isArray(window.Brevo)) {
        this.testResults.initializationTime = performance.now() - initStart;
        this.testResults.isReady = true;
        console.log(`✅ Brevo initialized in ${this.testResults.initializationTime.toFixed(2)}ms`);
        return true;
      }
      return false;
    };

    // Wait for SDK to load first
    const waitForSDK = setInterval(() => {
      if (this.testResults.sdkLoadTime !== null || this.testResults.errors.length > 0) {
        clearInterval(waitForSDK);
        
        if (this.testResults.errors.length === 0) {
          if (!checkInitialized()) {
            setTimeout(() => {
              if (!checkInitialized()) {
                this.testResults.errors.push('SDK initialization failed');
                console.error('❌ Brevo SDK initialization failed');
              }
            }, 2000);
          }
        }
      }
    }, 50);
  }

  private testPopupDisplay() {
    // Monitor for popup display
    const originalPush = window.Brevo?.push;
    if (typeof window !== 'undefined' && window.Brevo) {
      const testInstance = this;
      
      // Override push to monitor showForm calls
      window.Brevo.push = function(command: any[]) {
        if (command[0] === 'showForm') {
          testInstance.testResults.popupShowTime = performance.now() - testInstance.startTime;
          console.log(`✅ Brevo popup triggered in ${testInstance.testResults.popupShowTime.toFixed(2)}ms`);
        }
        
        // Call original push
        if (originalPush) {
          originalPush.call(this, command);
        }
        return this.length;
      };
    }
  }

  private testOverallPerformance() {
    // Complete test after 15 seconds
    setTimeout(() => {
      this.testResults.totalLoadTime = performance.now() - this.startTime;
      this.generateReport();
    }, 15000);
  }

  private generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      performance: {
        sdkLoadTime: this.testResults.sdkLoadTime,
        initializationTime: this.testResults.initializationTime,
        popupShowTime: this.testResults.popupShowTime,
        totalTestTime: this.testResults.totalLoadTime
      },
      status: {
        sdkLoaded: this.testResults.sdkLoadTime !== null,
        initialized: this.testResults.isReady,
        popupTriggered: this.testResults.popupShowTime !== null,
        hasErrors: this.testResults.errors.length > 0
      },
      errors: this.testResults.errors,
      settings: {
        delayAfterPageLoad: '3 seconds',
        sessionTimeout: '30 minutes',
        maxPopupViews: 9,
        delayBetweenPopups: '1 minute',
        firstVisitDelay: '0 seconds'
      }
    };

    console.group('🔍 Brevo Performance Test Report');
    console.table(report.performance);
    console.table(report.status);
    if (report.errors.length > 0) {
      console.warn('Errors:', report.errors);
    }
    console.log('Settings:', report.settings);
    console.groupEnd();

    // Store report for debugging
    if (typeof window !== 'undefined') {
      (window as any).BrevoTestReport = report;
    }

    return report;
  }

  // Public method to manually trigger popup for testing
  public forceShowPopup() {
    if (typeof window !== 'undefined' && window.Brevo) {
      console.log('🧪 Manually triggering Brevo popup...');
      window.Brevo.push(["showForm", {
        form_id: "1",
        delay: 0
      }]);
    } else {
      console.error('❌ Cannot show popup - Brevo SDK not loaded');
    }
  }

  // Public method to reset all tracking
  public resetTracking() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('brevo-popup-count');
      localStorage.removeItem('brevo-last-popup');
      localStorage.removeItem('brevo-last-activity');
      localStorage.removeItem('brevo-visit-start');
      console.log('🧹 All Brevo tracking data cleared');
    }
  }

  // Public method to get current status
  public getStatus() {
    return {
      ...this.testResults,
      currentSettings: this.getCurrentSettings()
    };
  }

  private getCurrentSettings() {
    if (typeof window === 'undefined') return null;
    
    return {
      popupCount: parseInt(localStorage.getItem('brevo-popup-count') || '0'),
      lastPopup: localStorage.getItem('brevo-last-popup'),
      lastActivity: localStorage.getItem('brevo-last-activity'),
      visitStart: localStorage.getItem('brevo-visit-start')
    };
  }
}

// Auto-initialize when imported
if (typeof window !== 'undefined') {
  const tester = BrevoTester.getInstance();
  (window as any).BrevoTester = tester;
}

export default BrevoTester;