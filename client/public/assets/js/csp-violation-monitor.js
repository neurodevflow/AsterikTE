// CSP Violation Monitor - Tracks and reports Content Security Policy violations
(function() {
  'use strict';
  
  const violations = [];
  
  // Listen for CSP violations
  document.addEventListener('securitypolicyviolation', function(event) {
    const violation = {
      timestamp: new Date().toISOString(),
      violatedDirective: event.violatedDirective,
      blockedURI: event.blockedURI,
      documentURI: event.documentURI,
      sourceFile: event.sourceFile,
      lineNumber: event.lineNumber,
      columnNumber: event.columnNumber,
      sample: event.sample
    };
    
    violations.push(violation);
    
    console.group('🚫 CSP Violation Detected');
    console.error('Directive:', event.violatedDirective);
    console.error('Blocked URI:', event.blockedURI);
    console.error('Source:', event.sourceFile + ':' + event.lineNumber + ':' + event.columnNumber);
    console.error('Sample:', event.sample);
    console.groupEnd();
  });
  
  // Report function to get all violations
  window.getCSPViolations = function() {
    return violations;
  };
  
  // Check for common CSP issues
  window.checkCSPCompliance = function() {
    const issues = [];
    
    // Check for inline scripts without proper CSP
    const inlineScripts = document.querySelectorAll('script:not([src])');
    if (inlineScripts.length > 0) {
      issues.push({
        type: 'inline-script',
        count: inlineScripts.length,
        message: 'Inline scripts detected - ensure CSP allows unsafe-inline or use nonces'
      });
    }
    
    // Check for external resources
    const externalResources = [];
    
    // Check images
    document.querySelectorAll('img[src]').forEach(img => {
      if (img.src.startsWith('http') && !img.src.includes(window.location.hostname)) {
        externalResources.push({ type: 'image', url: img.src });
      }
    });
    
    // Check stylesheets
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
      if (link.href.startsWith('http') && !link.href.includes(window.location.hostname)) {
        externalResources.push({ type: 'stylesheet', url: link.href });
      }
    });
    
    // Check scripts
    document.querySelectorAll('script[src]').forEach(script => {
      if (script.src.startsWith('http') && !script.src.includes(window.location.hostname)) {
        externalResources.push({ type: 'script', url: script.src });
      }
    });
    
    if (externalResources.length > 0) {
      issues.push({
        type: 'external-resources',
        resources: externalResources,
        message: 'External resources detected - verify CSP allows these domains'
      });
    }
    
    return {
      violations: violations,
      issues: issues,
      compliance: violations.length === 0 && issues.length === 0
    };
  };
  
  // Auto-check compliance after page load
  window.addEventListener('load', function() {
    setTimeout(() => {
      const compliance = window.checkCSPCompliance();
      
      if (compliance.compliance) {
        console.log('✅ CSP Compliance Check: PASSED - No violations detected');
      } else {
        console.warn('⚠️ CSP Compliance Check: ISSUES DETECTED');
        console.table(compliance.violations);
        console.table(compliance.issues);
      }
    }, 2000); // Wait 2 seconds for all resources to load
  });
  
  console.log('🛡️ CSP Violation Monitor initialized');
})();