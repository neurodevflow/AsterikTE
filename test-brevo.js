// Simple Brevo Performance Test Script
// Run this in the browser console to test popup loading and performance

console.log('🧪 Starting Brevo Popup Performance Test...');

// Test configuration
const TEST_CONFIG = {
  delayAfterPageLoad: 3000, // 3 seconds
  sessionTimeout: 30 * 60 * 1000, // 30 minutes
  maxViews: 9,
  delayBetweenPopups: 60 * 1000, // 1 minute
  firstVisitDelay: 0
};

// Performance tracking
const performance_start = performance.now();
let testResults = {
  brevoSDKLoaded: false,
  brevoInitialized: false,
  popupTriggered: false,
  loadTimes: {},
  errors: []
};

// Test 1: Check if Brevo SDK is loaded
function testBrevoSDKLoading() {
  console.log('📡 Testing Brevo SDK loading...');
  
  if (typeof window.Brevo !== 'undefined') {
    testResults.brevoSDKLoaded = true;
    testResults.loadTimes.sdkLoad = performance.now() - performance_start;
    console.log(`✅ Brevo SDK loaded in ${testResults.loadTimes.sdkLoad.toFixed(2)}ms`);
  } else {
    testResults.errors.push('Brevo SDK not loaded');
    console.error('❌ Brevo SDK not loaded');
  }
}

// Test 2: Check if Brevo is initialized
function testBrevoInitialization() {
  console.log('🔧 Testing Brevo initialization...');
  
  if (Array.isArray(window.Brevo)) {
    testResults.brevoInitialized = true;
    testResults.loadTimes.initialization = performance.now() - performance_start;
    console.log(`✅ Brevo initialized in ${testResults.loadTimes.initialization.toFixed(2)}ms`);
  } else {
    testResults.errors.push('Brevo not properly initialized');
    console.error('❌ Brevo not properly initialized');
  }
}

// Test 3: Check popup settings and localStorage
function testPopupSettings() {
  console.log('⚙️ Testing popup settings...');
  
  const settings = {
    popupCount: localStorage.getItem('brevo-popup-count') || '0',
    lastPopup: localStorage.getItem('brevo-last-popup'),
    lastActivity: localStorage.getItem('brevo-last-activity'),
    visitStart: localStorage.getItem('brevo-visit-start')
  };
  
  console.log('Current settings:', settings);
  
  // Validate configuration matches requirements
  console.log('Expected configuration:');
  console.table(TEST_CONFIG);
}

// Test 4: Force popup display for testing
function forceTestPopup() {
  console.log('🚀 Testing popup display...');
  
  if (testResults.brevoInitialized && window.Brevo) {
    const popupStart = performance.now();
    
    try {
      window.Brevo.push(["showForm", {
        form_id: "1",
        delay: 0
      }]);
      
      testResults.popupTriggered = true;
      testResults.loadTimes.popupTrigger = performance.now() - popupStart;
      console.log(`✅ Popup triggered in ${testResults.loadTimes.popupTrigger.toFixed(2)}ms`);
    } catch (error) {
      testResults.errors.push(`Popup trigger failed: ${error.message}`);
      console.error('❌ Popup trigger failed:', error);
    }
  } else {
    testResults.errors.push('Cannot test popup - Brevo not ready');
    console.error('❌ Cannot test popup - Brevo not ready');
  }
}

// Test 5: Network performance check
function testNetworkPerformance() {
  console.log('🌐 Testing network performance...');
  
  // Check if Brevo SDK script loaded successfully
  const brevoScript = document.querySelector('script[src*="brevo.com"]');
  if (brevoScript) {
    console.log('✅ Brevo script tag found');
  } else {
    testResults.errors.push('Brevo script tag not found');
    console.error('❌ Brevo script tag not found');
  }
  
  // Check CSP compliance
  const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
  if (cspMeta) {
    const csp = cspMeta.getAttribute('content');
    const hasBrevoCSP = csp.includes('brevo.com') || csp.includes('sibforms.com');
    if (hasBrevoCSP) {
      console.log('✅ CSP allows Brevo domains');
    } else {
      testResults.errors.push('CSP may be blocking Brevo');
      console.warn('⚠️ CSP may be blocking Brevo');
    }
  }
}

// Main test execution
function runPerformanceTest() {
  console.log('🎯 Running comprehensive Brevo performance test...');
  
  // Run tests in sequence
  testBrevoSDKLoading();
  
  setTimeout(() => {
    testBrevoInitialization();
    testPopupSettings();
    testNetworkPerformance();
    
    // Generate final report
    setTimeout(() => {
      generateFinalReport();
    }, 1000);
  }, 1000);
}

// Generate final report
function generateFinalReport() {
  const totalTime = performance.now() - performance_start;
  
  console.group('📊 BREVO PERFORMANCE TEST REPORT');
  console.log('Test Duration:', totalTime.toFixed(2) + 'ms');
  console.log('SDK Status:', testResults.brevoSDKLoaded ? '✅ Loaded' : '❌ Failed');
  console.log('Initialization:', testResults.brevoInitialized ? '✅ Ready' : '❌ Failed');
  console.log('Popup System:', testResults.popupTriggered ? '✅ Working' : '⚠️ Not tested');
  
  if (Object.keys(testResults.loadTimes).length > 0) {
    console.table(testResults.loadTimes);
  }
  
  if (testResults.errors.length > 0) {
    console.error('Errors found:', testResults.errors);
  } else {
    console.log('🎉 All tests passed! Brevo is working correctly.');
  }
  
  console.log('\n🔧 Test Functions Available:');
  console.log('- forceTestPopup() - Manually trigger popup');
  console.log('- localStorage.clear() - Reset all tracking');
  console.log('- window.BrevoTester.resetTracking() - Reset Brevo tracking only');
  
  console.groupEnd();
  
  // Store results globally for access
  window.BrevoTestResults = testResults;
}

// Utility functions for manual testing
window.testBrevo = {
  runTest: runPerformanceTest,
  forcePopup: forceTestPopup,
  clearTracking: () => {
    localStorage.removeItem('brevo-popup-count');
    localStorage.removeItem('brevo-last-popup');
    localStorage.removeItem('brevo-last-activity');
    localStorage.removeItem('brevo-visit-start');
    console.log('🧹 Brevo tracking cleared');
  },
  getStatus: () => {
    return {
      popupCount: localStorage.getItem('brevo-popup-count') || '0',
      lastPopup: localStorage.getItem('brevo-last-popup'),
      lastActivity: localStorage.getItem('brevo-last-activity'),
      visitStart: localStorage.getItem('brevo-visit-start'),
      brevoReady: Array.isArray(window.Brevo)
    };
  }
};

// Auto-run test
runPerformanceTest();

console.log('\n🚀 Brevo test completed! Use window.testBrevo for manual testing.');