document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');

    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(bookingForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            date: formData.get('date'),
            time: formData.get('time')
        };

        // Display a confirmation message (for simplicity, using alert here)
        alert(`Thank you, ${data.name}. Your appointment is booked for ${data.date} at ${data.time}.`);

        // Optionally, you can handle the data with AJAX or other methods to send to a server
        // Example: sendDataToServer(data);
    });
});