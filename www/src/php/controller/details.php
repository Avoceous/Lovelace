<?php
//Checking Session
if(!isset($_SESSION)){session_start();}

//Checking Account Privileges
if(isset($_SESSION['Access']) && $_SESSION['Access'] == "admin"){
    
    $id = htmlspecialchars(mysqli_real_escape_string($conn, $_GET['customer_id']));
    $sql= "SELECT * FROM order_container WHERE id = '$id'"; 
    $customer_data = $conn->query($sql) or die($conn->error);
    $row = $customer_data->fetch_assoc();
}
else{header("Location: ../unauth");}
?>