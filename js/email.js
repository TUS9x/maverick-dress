(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('9pPp6KjfyiGLZIrQ-');
})();
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_5c7lytm', 'template_jps5vxx', this) 
        //service_iyqweci contact_service
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    return;
    });
}