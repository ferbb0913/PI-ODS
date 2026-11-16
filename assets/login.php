<?php
$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "sistema_login";

$conexao = mysqli_connect($servidor, $usuario, $senha, $banco);

if (!$conexao) {
 exit( mysqli_connect_error());
}

$email = $_POST['email'];
$senha = $_POST['pass'];
    $senhah = hash('sha256', $senha);

$busca = mysqli_query($conexao, "SELECT * FROM formulario WHERE email = '$email'");
$linha = mysqli_num_rows($busca);

if($linha > 0) {
    $dados = mysqli_fetch_assoc($busca);

    if(password_verify($senhah, $dados['senhah'])) {
        echo "Logado com sucesso, Bem vindo!";
        echo "<script>window.location.href='../index.html'</script>";
    } else {
        echo "Senha incorreta.";
        echo "<script>window.location.href='../login.html'</script>";
    }
} else {
    echo "Usuário não encontrado.";
     echo "<script>window.location.href='../login.html'</script>";
};
?>

