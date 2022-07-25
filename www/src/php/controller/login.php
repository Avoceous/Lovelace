<?php 
//Including Database Connection
include "../src/php/model/db_connection.php";
$conn = moonturaDB();

//Checking Session
if(!isset($_SESSION)){session_start();}

//Declaring Session
if(isset($_SESSION['Name']) && isset($_SESSION['Access']) && isset($_SESSION['UserID'])){
    $_SESSION['Name'];
    $_SESSION['Access'];
    $_SESSION['UserID'];
}

//Logging In Function
if(isset($_POST['login'])){
    $userID = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['userID']));
    $userPassword = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['userPassword']));

    //Querying Data
    $sql = "SELECT * FROM `account_container` WHERE user_id = '$userID' AND user_password = '$userPassword'";
    $account = $conn->query($sql) or die($conn->error);
    $row = $account->fetch_assoc();
    $users = $account->num_rows;
    
    //Checking for the user account type if it's a normal user or an admin.
    if($users > 0){
        $_SESSION['Name'] = $row['user_name'];
        $_SESSION['Access'] = $row['access_type'];
        $_SESSION['UserID'] = $row['user_id'];
        header("Location: ../dashboard");
        exit();
    }
    else{
        header("Location: ../unprivileged");
        exit();
    }
}
?>