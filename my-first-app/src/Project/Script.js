import { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }

    // Back to Top button logic
    const topBtn = document.getElementById('backToTop');

    const handleScroll = () => {
      if (window.scrollY > 100) {
        topBtn.style.display = 'block';
      } else {
        topBtn.style.display = 'none';
      }
    };

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }

      alert(`Thank you, ${name}! Your message has been sent.`);
      e.target.reset();
    };

    window.addEventListener('scroll', handleScroll);
    if (topBtn) topBtn.addEventListener('click', handleClick);
    const form = document.getElementById('contactForm');
    if (form) form.addEventListener('submit', handleFormSubmit);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (topBtn) topBtn.removeEventListener('click', handleClick);
      if (form) form.removeEventListener('submit', handleFormSubmit);
    };
  }, []);

};

export { MyComponent };