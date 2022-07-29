<?php
//Including Database Connection
include "../route/php/model/db_connection.php";
$conn = moonturaDB();

//Collecting User Data
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

    //Checking if input fields are empty
    if(empty($name)){echo "<p id='hideError' class='emptyError'>Request Denied. Customer Name is required.</p>";}
    elseif(empty($email_address)){echo "<p id='hideError' class='emptyError'>Request Denied. Email Address is required.</p>";}

    //Insert Data Inside Database
    else{
        $sql = 
            "INSERT INTO `order_container`(
            `customer_name`,
            `email_address`,
            `contact_number`,
            `customer_type`,
            `customer_payment`,
            `payment_status`,
            `order_number`,
            `order_status`
            )   
            VALUES(
            '$name',
            '$email_address',
            '$contact_number',
            '$customer_type',
            '$customer_payment',
            '$payment_status',
            '$order_number',
            '$order_status'
            )
        ";
        
        //Querying Data
        $conn->query($sql) or die($conn->error);
        echo "<p id='hideSuccess' class='successfulNote'>Data Successfully Added.</p>";
    } 
}
?>