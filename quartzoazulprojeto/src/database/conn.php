<?php 
    
    $host = "localhost"; //IP do Banco de Dados
    $username = "root";  //Username do acesso ao MySql
    $password = "";      //Senha do acesso ao MySql
    $db_name = "quartzo_azul";  //Nome do banco de dados
    $conn = new mysqli($host, $username, $password, $db_name);
    
    
    if ($conn->connect_errno) 
    {
        //echo "Erro ao conectar com banco de dados";
    }
    else
    {
        //echo"Conectou";
    }
?>