<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Set the recipient email address
    $to = "teertha.deb579@gmail.com";

    // Set the email subject
    $subject = "Contact Form Submission";

    // Construct the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Phone: $phone\n\n";
    $email_message .= "Message:\n$message\n";

    // Send the email
    mail($to, $subject, $email_message);

    // Return a JSON response to the client
    $response = array('message' => 'Email sent successfully');
    header('Content-Type: application/json');
    echo json_encode($response);
} 
else {
    // Return a JSON response for errors
    $response = array('message' => 'Error occurred. Please try again later.');
    header('Content-Type: application/json');
    echo json_encode($response);
}
?>
