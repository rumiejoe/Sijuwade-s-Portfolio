
  
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const submitBtn = document.getElementById('submit-btn');
    const formMessage = document.getElementById('form-message');
  
    // Disable button & show loading
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    formMessage.textContent = '';
    formMessage.className = 'text-sm mt-2';
  
    emailjs.sendForm('service_f7oqgng', 'template_5u5zu3l', this)
      .then(() => {
        formMessage.textContent = '✅ Message sent successfully!';
        formMessage.classList.add('text-green-600');
        this.reset();
      }, (error) => {
        formMessage.textContent = '❌ Failed to send message. Please try again.';
        formMessage.classList.add('text-red-600');
        console.error(error);
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      });
  });
  

  
    ScrollReveal().reveal('.reveal', {
      origin: 'top',
      distance: '30px',
      duration: 2000,
      delay: 200,
      reset: true // Set true if you want animation on every scroll
    });