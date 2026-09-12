/**
 * Vercel Speed Insights Initialization
 * This file initializes Vercel Speed Insights for static HTML sites
 * @see https://vercel.com/docs/speed-insights
 */

(function() {
  'use strict';
  
  // Initialize the queue for speed insights
  function initQueue() {
    if (window.si) return;
    window.si = function(...params) {
      window.siq = window.siq || [];
      window.siq.push(params);
    };
  }

  // Check if we're in a browser environment
  function isBrowser() {
    return typeof window !== 'undefined';
  }

  // Detect environment (development/production)
  function detectEnvironment() {
    try {
      if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
        return 'development';
      }
    } catch {
      // ignore
    }
    return 'production';
  }

  function isDevelopment() {
    return detectEnvironment() === 'development';
  }

  // Get the appropriate script source
  function getScriptSrc() {
    if (isDevelopment()) {
      return 'https://va.vercel-scripts.com/v1/speed-insights/script.debug.js';
    }
    return '/_vercel/speed-insights/script.js';
  }

  // Main injection function
  function injectSpeedInsights(props = {}) {
    if (!isBrowser()) return null;

    initQueue();

    const src = getScriptSrc();
    
    // Check if script is already loaded
    if (document.head.querySelector(`script[src*="${src}"]`)) {
      return null;
    }

    // Create and configure the script element
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    
    // Set data attributes
    script.dataset.sdkn = '@vercel/speed-insights';
    script.dataset.sdkv = '2.0.0';
    
    if (props.sampleRate) {
      script.dataset.sampleRate = props.sampleRate.toString();
    }
    
    if (props.route) {
      script.dataset.route = props.route;
    }
    
    if (isDevelopment() && props.debug === false) {
      script.dataset.debug = 'false';
    }

    // Error handling
    script.onerror = function() {
      console.log(
        '[Vercel Speed Insights] Failed to load script from ' + src + 
        '. Please check if any content blockers are enabled and try again.'
      );
    };

    // Append to head
    document.head.appendChild(script);

    return {
      setRoute: function(route) {
        script.dataset.route = route || undefined;
      }
    };
  }

  // Auto-initialize on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      injectSpeedInsights();
    });
  } else {
    // DOM already loaded
    injectSpeedInsights();
  }
})();
