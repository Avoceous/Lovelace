<?php
//Including Database Connection
include "../route/php/model/db_connection.php";
$conn = moonturaDB();

$id = htmlspecialchars(mysqli_real_escape_string($conn, $_GET['customer_id']));
$sql= "SELECT * FROM order_container WHERE id = '$id'"; 
$customer_data = $conn->query($sql) or die($conn->error);
$row = $customer_data->fetch_assoc();

//Updating User Data
if(isset($_POST['insert'])){
    $name = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['name']));
    $email_address = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['email_address']));
    $contact_number = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['contact_number']));
    $customer_type = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['customer_type']));
    $customer_payment = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['customer_payment']));
    $payment_status = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['payment_status']));
    $generate_number = rand(1000, 100000);
    $order_number = "MTR" ."". $generate_number;
    $order_status = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['order_status']));  
    
    $sql = 
    "UPDATE `order_container`
     SET customer_name = '$name', 
        email_address = '$email_address',
        contact_number = '$contact_number',
        customer_type = '$customer_type',
        customer_payment = '$customer_payment',
        payment_status = '$payment_status',
        order_status = '$order_status'
     WHERE id = '$id'
    ";
    
    $conn->query($sql) or die($conn->error);
    header("Location: ../dashboard?data=successfully_updated");
}
?>