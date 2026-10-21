<?php

$dbHost = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'ods14-form';

try {

    $conexao = new PDO(
        "mysql:host=$dbHost;dbname=$dbName",
        $dbUsername,
        $dbPassword
    );

    $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch(PDOException $erro){

    echo "Erro na conexão: " . $erro->getMessage();

}

?>