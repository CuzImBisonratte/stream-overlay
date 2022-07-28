var cfg = {};
$.ajax({
    url: "./config.json",
    async: false,
    success: function(data) {
        cfg = data;
    }
});


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

var button_bar_down = document.getElementById("button_bar_down");
var button_bar_up = document.getElementById("button_bar_up");
var button_bar_custom_height = document.getElementById("button_bar_custom_height");
var button_bar_resize = document.getElementById("button_bar_resize");
var button_bar_custom_text = document.getElementById("button_bar_custom_text");
var button_bar_custom_color = document.getElementById("button_bar_custom_color");
var button_bar_color_1 = document.getElementById("button_bar_color_1");
var button_bar_color_2 = document.getElementById("button_bar_color_2");
var button_bar_discord = document.getElementById("button_bar_discord");
var button_bar_music = document.getElementById("button_bar_music");
var button_bar_adversal = document.getElementById("button_bar_adversal");
var button_effect_confetti = document.getElementById("button_effect_confetti");

// Add event listeners
button_bar_down.addEventListener("click", function() {
    $.ajax({
        type: "POST",
        url: "send.php",
        data: {
            action: "bar_down"
        },
        success: function(data) {
            console.log(data);
        },
        error: function(data) {
            console.log(data);
        }
    });
});
button_bar_up.addEventListener("click", function() {
    $.ajax({
        type: "POST",
        url: "send.php",
        data: {
            action: "bar_up"
        },
        success: function(data) {
            console.log(data);
        },
        error: function(data) {
            console.log(data);
        }
    });
});
button_bar_custom_text.addEventListener("click", function() {
    var custom_text = prompt("Text");
    $.ajax({
        type: "POST",
        url: "send.php",
        data: {
            action: "bar_textchange",
            bar_text: custom_text
        },
        success: function(data) {
            console.log(data);
        },
        error: function(data) {
            console.log(data);
        }
    });
});
button_bar_custom_color.addEventListener("click", function() {
    var background_color = prompt("Hintergrundfarbe");
    var text_color = prompt("Textfarbe");
    $.ajax({
        type: "POST",
        url: "send.php",
        data: {
            action: "bar_colorchange",
            other: background_color + " " + text_color
        },
        success: function(data) {
            console.log(data);
        },
        error: function(data) {
            console.log(data);
        }
    });
});
button_bar_discord.addEventListener("click", function() {
    $.ajax({
        type: "POST",
        url: "send.php",
        data: {
            action: "bar_textchange",
            bar_text: "Guck auf unserem Discord vorbei: " + cfg.discord_link
        },
        success: function(data) {
            console.log(data);
        },
        error: function(data) {
            console.log(data);
        }
    });
});
button_bar_music.addEventListener("click", function() {
    $.ajax({
        type: "POST",
        url: "send.php",
        data: {
            action: "bar_textchange",
            bar_text: "Musik von " + cfg.music_credit
        },
        success: function(data) {
            console.log(data);
        },
        error: function(data) {
            console.log(data);
        }
    });
});
button_bar_adversal.addEventListener("click", function() {
    $.ajax({
        type: "POST",
        url: "send.php",
        data: {
            action: "bar_textchange",
            bar_text: "#Werbung"
        },
        success: function(data) {
            console.log(data);
        },
        error: function(data) {
            console.log(data);
        }
    });
});
button_bar_color_1.addEventListener("click", function() {
    $.ajax({
        type: "POST",
        url: "send.php",
        data: {
            action: "bar_colorchange",
            other: "#1f1f25 lightblue"
        },
        success: function(data) {
            console.log(data);
        },
        error: function(data) {
            console.log(data);
        }
    });
});
button_bar_color_2.addEventListener("click", function() {
    $.ajax({
        type: "POST",
        url: "send.php",
        data: {
            action: "bar_colorchange",
            other: "lightblue #1f1f25"
        },
        success: function(data) {
            console.log(data);
        },
        error: function(data) {
            console.log(data);
        }
    });
});
button_bar_resize.addEventListener("click", function() {
    $.ajax({
        type: "POST",
        url: "send.php",
        data: {
            action: "bar_resize"
        },
        success: function(data) {
            console.log(data);
        },
        error: function(data) {
            console.log(data);
        }
    });
});
button_effect_confetti.addEventListener("click", function() {
    $.ajax({
        type: "POST",
        url: "send.php",
        data: {
            action: "effect_confetti"
        },
        success: function(data) {
            console.log(data);
        },
        error: function(data) {
            console.log(data);
        }
    });
});