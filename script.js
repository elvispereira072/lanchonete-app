document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('YOUR_EMAILJS_SERVICE_ID', 'YOUR_EMAILJS_TEMPLATE_ID', this)
        .then(function() {
            alert('Your message was successfully received!');
        }, function(error) {
            alert('There was an error sending your message. Please try again later.');
            console.log('FAILED...', error);
        });
});

