/**
 * Performant reveal-on-scroll animations using IntersectionObserver
 * Targets all elements with class `.reveal-on-scroll`
 */

function initRevealOnScroll() {
  // Delay initialization to avoid hydration mismatches
  setTimeout(() => {
    // Check for IntersectionObserver support
    if (!('IntersectionObserver' in window)) {
      // Fallback: immediately show all elements
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach(element => {
        element.classList.add('revealed');
      });
      return;
    }

    // Configuration options
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.2 // Trigger when 20% of the element is visible (80% from top)
    };

    // Create the observer
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the revealed class to trigger animation
          entry.target.classList.add('revealed');
          
          // Stop observing this element (animate only once)
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Start observing all elements with the reveal-on-scroll class
    const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');
    elementsToReveal.forEach(element => {
      observer.observe(element);
    });
  }, 100); // Wait 100ms after hydration
}

// Initialize only on client side
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRevealOnScroll);
  } else {
    // DOM is already loaded
    initRevealOnScroll();
  }
}

// Export for use in modules/frameworks if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = initRevealOnScroll;
}