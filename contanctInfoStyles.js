// Function to send email using AJAX
function sendEmail(email, phone, message) {
    let xhr = new XMLHttpRequest();
    let url = "send_email.php"; // Replace this with your PHP script handling the email sending

    let params = `email=${email}&phone=${phone}&message=${message}`;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log("Email sent successfully!");
            } else {
                console.error("Error occurred:", xhr.responseText);
            }
        }
    };

    xhr.send(params);
}

// Event listener for form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    sendEmail(email, phone, message);
});
