<?php

/* Namespace alias (don't need Exception this time). */
use PHPMailer\PHPMailer\PHPMailer;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';




$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
if ( $method === 'POST' ) {

  $project_name = trim($_POST["project_name"]);
  $admin_email  = trim($_POST["admin_email"]);
  $form_subject = trim($_POST["form_subject"]);

  foreach ( $_POST as $key => $value ) {
    if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
      $message .= "
        $key :
        $value
      ";
    }
  }
} else if ( $method === 'GET' ) {

  $project_name = trim($_GET["project_name"]);
  $admin_email  = trim($_GET["admin_email"]);
  $form_subject = trim($_GET["form_subject"]);

  foreach ( $_GET as $key => $value ) {
    if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
      $message .= "
        $key :
        $value
      ";
    }
  }
}

$message = "$message";

function adopt($text) {
  return '=?UTF-8?B?'.Base64_encode($text).'?=';
}





/* Create a new PHPMailer object. */
$mail = new PHPMailer();
$mail->CharSet = 'UTF-8';

/* Set the mail sender. */
$mail->setFrom($admin_email, 'Сообщение с сайта');

/* Add a recipient. */
$mail->addAddress('diskain98@mail.ru', 'Ulan Akhmetov');

/* Set the subject. */
$mail->Subject = 'Заявка клиента с сайта American Education';

/* Set the mail message body. */
$mail->Body = $message;

/* Finally send the mail. */
if (!$mail->send())
{
   /* PHPMailer error. */
   echo $mail->ErrorInfo;
}