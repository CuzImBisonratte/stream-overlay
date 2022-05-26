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