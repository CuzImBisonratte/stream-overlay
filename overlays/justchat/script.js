// Get the time span element
var timeSpan = document.getElementById("time");


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
    var seconds = time.getSeconds();

    // Add a zero in front of numbers<10
    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    // Display the time
    timeSpan.innerHTML = hours + ":" + minutes + ":" + seconds;
}
window.setInterval(updateTime, 100);
updateTime();