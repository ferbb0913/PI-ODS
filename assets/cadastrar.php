<?php

    include ("conexao.php");

    $email = $_POST["email"];
    $senha = $_POST["senha"];

    $busca = mysqli_query($conexao, "SELECT * FROM usuarios WHERE email = '$email'");
    $linhas = mysqli_num_rows($busca);

    if ($linhas > 0){
        echo "Email já cadastrado.";
    }
    else{
        $senha_hash = password_hash($senha, PASSWORD_DEFAULT);
        mysqli_query($conexao, "INSERT INTO usuarios (email, senha_hash) VALUES ('$email', '$senha_hash')");

        echo "Cadastrado com sucesso!";
    }
?>

