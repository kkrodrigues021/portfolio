<?php
header('Content-Type: text/html; charset=utf-8');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitizar entrada
    $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $mensagem = filter_input(INPUT_POST, 'mensagem', FILTER_SANITIZE_STRING);
    
    // Validar email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header('Location: obrigado.html?status=error');
        exit;
    }
    
    $para = "kaiky.rodrigues039@gmail.com";
    $assunto = "Mensagem do Portfólio - $nome";
    $corpo = "Nome: $nome\nEmail: $email\n\nMensagem:\n$mensagem";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Enviar email e redirecionar
    if (mail($para, $assunto, $corpo, $headers)) {
        header('Location: obrigado.html?nome='.urlencode($nome).'&email='.urlencode($email));
    } else {
        header('Location: obrigado.html?status=error');
    }
    exit;
}

// Se não for POST, redirecionar para o portfólio
header('Location: index.html');
?>