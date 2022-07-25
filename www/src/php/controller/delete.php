<?php
//Including Database Connection
include "../model/db_connection.php";
$conn = moonturaDB();

if(isset($_POST['delete'])){
    $id = htmlspecialchars(mysqli_real_escape_string($conn, $_GET['id']));
    $sql= "DELETE FROM order_container WHERE id = '$id'"; 
    $customer_data = $conn->query($sql) or die($conn->error);
    header("Location: /moontura/dashboard");
}
?>