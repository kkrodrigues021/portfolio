<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];
    
    $para = "seu-email@provedor.com";
    $assunto = "Mensagem do Portfólio - $nome";
    $corpo = "Nome: $nome\nEmail: $email\n\nMensagem:\n$mensagem";
    $headers = "From: $email";

    if (mail($para, $assunto, $corpo, $headers)) {
        header('Location: obrigado.html');
    } else {
        echo "Erro ao enviar mensagem.";
    }
}
?>