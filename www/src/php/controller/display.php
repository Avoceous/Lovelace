<?php
//Including Database Connection
include_once "../route/php/model/db_connection.php";
$conn = moonturaDB();

$sql= "SELECT * FROM `order_container` ORDER BY id DESC"; 
$customer_data = $conn->query($sql) or die($conn->error);
$row = $customer_data->fetch_assoc();
$users = $customer_data->num_rows;
?>