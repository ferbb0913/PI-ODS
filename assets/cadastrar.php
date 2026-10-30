<?php
$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "sistema_login";

$conexao = mysqli_connect($servidor, $usuario, $senha, $banco);

// if (!$conexao) {
//     echo "<script>console.log('asdasd')</script>"
//     die("Falha na conexão: " ; mysqli_connect_error());
// }
    $nome = $_POST["nome"];
    $fone = $_POST["fone"];
    $email = $_POST["email"];
    $nasc = $_POST["nasc"];
    $city = $_POST["city"];
    

    $busca = mysqli_query($conexao, "SELECT * FROM formulario WHERE email = '$email'");
    $linhas = mysqli_num_rows($busca);

    if ($linhas > 0){
        echo "<script>console.log('Email já cadastrado.')</script>";
    }
    else{
        mysqli_query($conexao, "INSERT INTO formulario (nome, fone,email,dtnasc,cidade) VALUES ('$nome', '$fone','$email','$nasc','$city')");
        echo "<script>console.log('concluido')</script>";
    }
?>

