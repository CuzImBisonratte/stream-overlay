<?php
    // Get values from ajax
    $action = $_POST['action'];
    $bar_text = $_POST['bar_text'];
    $other = $_POST['other'];

    // Database credentials
    $DATABASE_HOST = 'localhost';
    $DATABASE_USER = 'root';
    $DATABASE_PASS = '';
    $DATABASE_NAME = 'stream_overlay';
    $DATABASE_TABLE = 'stream_overlay';

    // Connect with the Credentials
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);

    // check if the connection was successfull
    if (mysqli_connect_errno()) {

        // Log the error
        error_log("Error(101)-".mysqli_connect_error(),0);
        exit("Error(101)-".mysqli_connect_error());

        // Display an error.
        exit();
    }

    if ($stmt = $con->prepare('INSERT INTO '.$DATABASE_TABLE.' (action, bar_text, other) VALUES (?, ?, ?)')) {

        $stmt->bind_param('sss', $action, $bar_text, $other);
        $stmt->execute();
        exit();

        // close the statement
        $stmt->close();

    } else {

        // Log the error
        exit("Error-".mysqli_error($con));
    }

    // close the database connection
    $con->close();

?>