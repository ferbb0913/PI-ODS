<?php
$servidor = "localhost";
$usuario = "root";
$senha = "123";
$banco = "sistema_login";

$conexao = mysqli_connect($servidor, $usuario, $senha, $banco);

if (!$conexao) {
    die("Falha na conexão: " . mysqli_connect_error());
}
    include ("conexao.php");

    $nome = $_POST["nome"];
    $fone = $_POST["fone"];
    $email = $_POST["email"];
    $nasc = $_POST["nasc"];
    $city = $_POST["city"];

    $busca = mysqli_query($conexao, "SELECT * FROM usuarios WHERE email = '$email'");
    $linhas = mysqli_num_rows($busca);

    if ($linhas > 0){
        echo "Email já cadastrado.";
    }
    else{
        mysqli_query($conexao, "INSERT INTO usuarios (nome, fone,email,nasc,city) VALUES ('cum', '$fone','$email','$nasc','$city')");
        echo "Cadastrado com sucesso!";
    }
?>

