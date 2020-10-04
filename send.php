<?php

    if (isset($_POST['name'], $_POST['email'], $_POST['find-us'], $_POST['phone'], $_POST['message'])) {
        print_r($_POST);
    }

    header('Content-type: application/json');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET");
    header("Access-Control-Allow-Methods: GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
    
?>