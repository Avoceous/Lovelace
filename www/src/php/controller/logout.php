<?php
session_start();
session_unset();
session_destroy();
unset($_SESSION['Access']);
unset($_SESSION['UserID']);
header("Location: /Moontura/login");
exit();
?>