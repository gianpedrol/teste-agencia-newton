<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';



if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $mail = new PHPMailer(true);

    if (!empty($_POST['nome']) && !empty($_POST['email']) && !empty($_POST['assunto']) && !empty($_POST['mensagem'])) {



        //para poder testar via localhost
        header("Access-Control-Allow-Origin: *");
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $assunto = $_POST['assunto'];
        $mensagem = $_POST['mensagem'];


        try {

            $mail->SMTPDebug = SMTP::DEBUG_SERVER;
            $mail->isSMTP();
            $mail->Host = 'mail.smtp.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'dev@teste.com';
            $mail->Password = 'de@122';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port = 465;


            $mail->setFrom($email, $nome);
            $mail->addAddress('gianfrancopedrol.gp@gmail.com');
            $mail->isHTML(true);
            $mail->Subject = $assunto;
            $mail->Body = $mensagem;

            $mail->send();
            echo "E-mail enviado com sucesso!";
        } catch (Exception $e) {
            echo "Erro ao enviar o e-mail: ", $mail->ErrorInfo;
        }
    } else {
        echo "Por favor, preencha todos os campos do formulário.";
    }
}
