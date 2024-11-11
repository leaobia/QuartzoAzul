<?php 
include_once("database/conn.php");

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");  
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");  
header("Access-Control-Allow-Headers: Content-Type");  

if (isset($_POST['email'])) {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $telefone = $_POST['telefone'];

    $sql1 = "INSERT INTO Usuario (nome, email, senha, telefone) VALUES ('$nome', '$email', '$senha', '$telefone')";

    if ($conn->query($sql1) === TRUE) {
        echo json_encode(["success" => true, "message" => "Usuário cadastrado com sucesso!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Falha ao cadastrar usuário!"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Dados não enviados."]);
}
?>