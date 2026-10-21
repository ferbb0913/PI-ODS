<?php

include_once('form.php');

$nome = $_POST['nome'];
$telefone = $_POST['telefone'];
$email = $_POST['email'];

$sql = "INSERT INTO formulario(nome, telefone, email)
VALUES (:nome, :telefone, :email)";

$stmt = $conexao->prepare($sql);

$stmt->bindParam(':nome', $nome);
$stmt->bindParam(':telefone', $telefone);
$stmt->bindParam(':email', $email);

$stmt->execute();

echo "Cadastro realizado com sucesso!";

?>