<?php
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

    // Get entries from the database and send it to the client
    if ($stmt = $con->prepare('SELECT action_id, action, bar_text, other FROM '.$DATABASE_TABLE)) {

        $stmt->execute();
        $stmt->bind_result($id, $action, $bar_text, $other);

        // Create an array to store the results
        $result = array();

        // Fetch the results
        while ($stmt->fetch()) {
            $result[] = array(
                'id' => $id,
                'action' => $action,
                'bar_text' => $bar_text,
                'other' => $other
            );
        }

        // Encode the array as JSON
        echo json_encode($result);

        // Delete all entries from the database
        $stmt = $con->prepare('DELETE FROM '.$DATABASE_TABLE);
        $stmt->execute();

        // close the statement
        $stmt->close();

    }

    // close the database connection
    $con->close();

?>