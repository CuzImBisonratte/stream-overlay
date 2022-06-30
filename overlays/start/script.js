// Get the current time plus 5 minutes and store it to endTime
var endTime = new Date().getTime() + 5 * 60 * 1000;

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

// The function to update the clock
function updateTime() {

    // Get the current time
    var time = new Date();

    // Get the hours, minutes and seconds
    var hours = time.getHours();
    var minutes = time.getMinutes();

    // Add a zero in front of numbers<10
    hours = formatTime(hours);
    minutes = formatTime(minutes);

    // Display the time
    document.getElementById("clock").innerHTML = hours + ":" + minutes;
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
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Format the time
        minutes = formatTime(minutes);
        seconds = formatTime(seconds);

        // Check if there is less than 10 seconds left AND minutes is 0
        if (seconds < 30 && minutes == 0) {

            // Display the time in the countdown mm:ss
            document.getElementById("countdown").innerHTML = seconds;

            // Change the font size to be double the size
            document.getElementById("countdown").style.fontSize = "25rem";

        } else {

            // Display the time
            document.getElementById("countdown").innerHTML = minutes + ":" + seconds;
        }
    }
    updateTime();
}, 100);