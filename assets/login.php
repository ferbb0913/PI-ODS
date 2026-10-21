<?php
include("conexao.php");

$email = $_POST['email'];
$senha = $_POST['senha'];

$busca = mysqli_query($conexao, "SELECT * FROM usuarios WHERE email = '$email'");
$linha = mysqli_num_rows($busca);

if($linha > 0) {
    $dados = mysqli_fetch_assoc($busca);

    if(password_verify($senha, $dados['senha_hash'])) {
        echo "Logado com sucesso, Bem vindo!";
    } else {
        echo "Senha incorreta.";
    }
} else {
    echo "Usuário não encontrado.";
}
?>

