<?php
function moonturaDB(){
    $hostProvider = 'localhost';
    $userName = 'root';
    $passWord = '';
    $dbName = 'moontura_db';
    $conn = new mysqli($hostProvider, $userName, $passWord, $dbName);
    
    if($conn->error){
        echo $conn->error;
    }
    else{
        return $conn;
    }
}
?>