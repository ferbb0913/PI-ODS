<?php

$servidor = "localhost";
$usuario = "root";
$senha = "123";
$banco = "sistema_login";

$conexao = mysqli_connect($servidor, $usuario, $senha, $banco);

if (!$conexao) {
    die("Falha na conexão: " . mysqli_connect_error());
}
?>

