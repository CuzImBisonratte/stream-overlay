// Get all elements with class "bg-random"
var bg_random_elements = document.getElementsByClassName("bg-random");

// Loop through all elements
for (var i = 0; i < bg_random_elements.length; i++) {

    // Create 3 random numbers between 0 and 128
    var r = Math.floor(Math.random() * 128);
    var g = Math.floor(Math.random() * 128);
    var b = Math.floor(Math.random() * 128);

    // Set background color
    bg_random_elements[i].style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}



// Function to show something as chart
function show_chart(input_percent) {

    // Get screensize in px
    var screen_height = window.innerHeight;

    // Get element
    var height_bar = document.getElementById("height_bar");

    // Get 100% - input_percent
    var height_percentage = 100 - input_percent;
    height_percentage = height_percentage / 100;

    // Get height in px by multiplying height_percentage with screen_height
    var height_px = height_percentage * screen_height;

    // Set height as margin top
    height_bar.style.marginTop = height_px + "px";

}