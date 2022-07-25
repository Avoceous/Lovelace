<?php 
//Including Database Connection
include "../route/php/model/db_connection.php";
$conn = moonturaDB();

//Checking Session
if(!isset($_SESSION)){session_start();}

//Checking Account Privileges and Search.
if(isset($_SESSION['Access']) && $_SESSION['Access'] == "admin"){
    $search = htmlspecialchars(mysqli_real_escape_string($conn, $_GET['search']));
    $sql = "SELECT * FROM 
            order_container
            WHERE 
            customer_name LIKE '%$search%' OR
            order_number LIKE '%$search%' OR
            email_address LIKE '%$search%' OR
            contact_number LIKE '%$search%' OR
            customer_type LIKE '%$search%' OR
            payment_status LIKE '%$search%'
            ORDER BY id DESC";
    $customer_data = $conn->query($sql) or die($conn->error);
    $row = $customer_data->fetch_assoc();
    $users = $customer_data->num_rows;

    // Checking search field if empty.
    if($users > 0){$users = true;}
    else{
        echo 
        "<div class='resultOverlay'>
            <div class='resultContainer'>
                <div id='searchErrorGifContainer'>
                <img id='searchError' src='../route/graphics/gif/error.gif' alt='error'>
                </div>
                <p id='hideSearchResult' class='resultNoteHeading'>Oops! Data not found.</p>
                <p id='reRoute' class='resultNoteButton'>Okay</p>
                <p id='timer'></p>
            </div>
        </div>";
    }
    
}// User is not authorized.
else{header("Location: ../unauth");}
?>