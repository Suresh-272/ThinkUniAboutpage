// Select all elements with the class 'animate-on-scroll'
const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

// Create the intersection observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');

        } else{
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.1 }); // Trigger when 10% of the element is visible

// Observe each element
animateOnScrollElements.forEach(el => {
    observer.observe(el);
});
