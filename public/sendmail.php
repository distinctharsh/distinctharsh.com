<?php
header('Content-Type: application/json');

// Get the POST data
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode(['success' => false, 'message' => 'No data received']);
    exit;
}

// Extract fields
$name = isset($data['name']) ? strip_tags(trim($data['name'])) : 'Unknown';
$email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$subjectInput = isset($data['subject']) ? strip_tags(trim($data['subject'])) : 'Portfolio Contact';
$message = isset($data['message']) ? strip_tags(trim($data['message'])) : '';

// --- CONFIGURATION ---
// Replace with your email where you want to RECEIVE messages
$to = 'distinctharsh@gmail.com'; 

// Basic headers
$subject = "New Contact from Portfolio: $subjectInput";
$email_content = "Name: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Message:\n$message\n";

$headers = "From: no-reply@distinctharsh.com\r\n"; // It's better to use a domain email here
$headers .= "Reply-To: $email\r\n";

// --- SENDING ---
// NOTE: Since you want to use your App Password for Gmail, you strictly need PHPMailer or similar.
// The native mail() function (below) uses the server's local mailer.
// To use your App Password, you must install PHPMailer and configure SMTP.
// Since this is a simple file drop, I am providing the standard mail() fallback.
// If Hostinger's mail() is enabled, this will work.

if (mail($to, $subject, $email_content, $headers)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Server failed to send email. Check PHP mail() configuration.']);
}
?>
