<?php

$from = 'CS355 Project Contact <Test@CS355.com>';
$sendTo = 'kirsten.pevidal08@qmail.cuny.edu';
$subject = 'New Contact Message';
$fields = array('name' => 'Name', 'surname' => 'Surname', 'email' => 'Email', 'message' => 'Message'); 


$okMessage = "Contact form submitted. Thank you, I will get back to you ASAP! :)";
$errorMessage = 'There was an error while submitting the form. Please try again later';

// if you are not debugging and don't need error reporting, turn this off by error_reporting(0);
error_reporting(E_ALL & ~E_NOTICE);

try
{

    if(count($_POST) == 0) throw new \Exception('Form is empty');
            
    $emailText = "You have a new message from your CS355 Website\n=============================\n
    Name: $_POST[name] $_POST[surname]\n
    Email: $_POST[email]\n
	Message: $_POST[message]\n";



    // All the neccessary headers for the email.
    $headers = array('Content-Type: text/plain; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from,
    );
    
    // Send email
    mail($sendTo, $subject, $emailText, implode("\n", $headers));

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}


// if requested by AJAX request return JSON response
//if ($responseArray['type'] == 'success') {
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    // success redirect
    $encoded = json_encode($responseArray);
   // header('Location: ../contact.html');
   header('Content-Type: application/json');
      echo $encoded;
}
else {
    //error redirect
    header('Location: ../contact.html');
}