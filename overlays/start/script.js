// Get the current time plus 5 minutes and store it to endTime
var endTime = new Date().getTime() + 5 * 1 * 1000;

// Function to format the time
function formatTime(number) {

    // If the number is not 2 digits, add a 0 in front
    if (number.toString().length <= 1) {

        // Add a 0 in front
        number = "0" + number;
    }

    // return the formatted number
    return number;
}


// Loop through the time until the endTime every 0,1 second
var timer = setInterval(function() {

    // Get the current time
    var currentTime = new Date();

    // Calculate the difference between the current time and the endTime
    var diff = endTime - currentTime;

    // If the difference is negative, stop the timer
    if (diff <= 0) {

        // Stop the timer
        clearInterval(timer);

    } else {

        // Get hours, minutes and seconds
        var hours = Math.floor(diff / (1000 * 60 * 60));
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Format the time
        hours = formatTime(hours);
        minutes = formatTime(minutes);
        seconds = formatTime(seconds);

        // Check if there is less than 10 seconds left
        if (seconds < 10) {

            // Display the time in the countdown mm:ss
            document.getElementById("countdown").innerHTML = seconds;

        } else {

            // Display the time
            document.getElementById("countdown").innerHTML = hours + ":" + minutes + ":" + seconds;
        }
    }

    // Check if there is less than 10 seconds left
    if (diff <= 10000) {

        // Change the font size to be double the size
        document.getElementById("countdown").style.fontSize = "50vh";

    }

}, 100);