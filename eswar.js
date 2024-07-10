document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get the text from the textarea
        const enquiry = document.getElementById('enquiry').value;

        // Basic form validation
        if (enquiry.trim() === '') {
            responseMessage.textContent = 'Please enter your enquiry.';
            responseMessage.style.color = 'red';
        } else {
            responseMessage.textContent = 'Thank you for your enquiry!';
            responseMessage.style.color = 'green';

            // Clear the textarea
            document.getElementById('enquiry').value = '';
        }
    });
});
