// Settings
slide_in_duration = 2500;
slide_out_duration = 2500;
bar_height = 100;

// Get the needed elements
const bottom_bar = document.getElementById('bottom_bar');
var bar_open = false;

// Create new client instance
const client = new tmi.Client({
    channels: ['cuzimbisonratte']
});

// Try to connect to Twitch
client.connect();

// Create the functions to slide the bar in and out
function slideInBar() {
    // Slide in the bottom bar SMOOTH
    bottom_bar.style.transition = "all " + slide_in_duration / 1000 + "s ease-in-out";
    bottom_bar.style.bottom = "0px";
    bar_open = true;
}

function slideOutBar() {
    // Slide out the bottom bar SMOOTH
    bottom_bar.style.transition = "all " + slide_out_duration / 1000 + "s ease-in-out";
    bottom_bar.style.bottom = "-" + bar_height + "px";
    bar_open = false;
}

function resizeBar() {
    // Resize the bottom bar
    bottom_bar.style.height = bar_height + "px";

    // Check if bar is not open
    if (!bar_open) {

        // Set the bar to the right position
        bottom_bar.style.bottom = "-" + bar_height + "px";

    } else {

        // Set the bar to the right position
        bottom_bar.style.bottom = "0px";
    }
}

// Initialize the bar
resizeBar();

// When the client receives a chat message
client.on('message', (channel, tags, message, self) => {

    // Check if user is a mod or the streamer
    if (tags.mod || tags.username === 'cuzimbisonratte') {

        // Check if message is a command
        if (message.startsWith('!')) {

            // Check if command starts with "!barcolor"
            if (message.startsWith('!barcolor')) {

                // Get the color
                const background_color = message.split(' ')[1];
                const text_color = message.split(' ')[2];

                // Set the colors
                bottom_bar.style.backgroundColor = background_color;

                // Check if color is valid
                if (text_color) {

                    // Change the color
                    bottom_bar.style.color = text_color;
                }

            } else if (message.startsWith('!bar ')) {

                // Remove "!bar "
                const text = message.replace('!bar ', '');

                // Check if bar is open
                if (!bar_open) {

                    // Slide in the bar
                    slideInBar();
                }

                // Set the text
                bottom_bar.innerHTML = text;

            } else if (message.startsWith('!barsize')) {

                // Get the size
                const height = message.split(' ')[1];
                const fontsize = message.split(' ')[2];

                // Check if fontsize argument has been passed
                if (fontsize) {

                    // Set the fontsize
                    bottom_bar.style.fontSize = fontsize + "px";
                }

                // Update bar height variable
                bar_height = height;

                // Resize the bar
                resizeBar();

            } else if (message === "!barclose") {

                // Slide out the bar
                slideOutBar();
            } else if (message === "!baropen") {

                // Slide in the bar
                slideInBar();
            } else if (message === '!konfetti') {
                // Start confetti
                confetti({
                    particleCount: 100,
                    spread: 180,
                    angle: 270,
                    startVelocity: 50,
                    origin: {
                        x: 0.5,
                        y: 0
                    }
                });
            } else if (message === '!feuerwerk') {
                var duration = 15 * 1000;
                var animationEnd = Date.now() + duration;
                var defaults = {
                    startVelocity: 30,
                    spread: 360,
                    ticks: 60,
                    zIndex: 0
                };

                function randomInRange(min, max) {
                    return Math.random() * (max - min) + min;
                }

                var interval = setInterval(function() {
                    var timeLeft = animationEnd - Date.now();

                    if (timeLeft <= 0) {
                        return clearInterval(interval);
                    }

                    var particleCount = 50 * (timeLeft / duration);
                    confetti(Object.assign({}, defaults, {
                        particleCount,
                        origin: {
                            x: randomInRange(0.1, 0.3),
                            y: Math.random() - 0.2
                        }
                    }));
                    confetti(Object.assign({}, defaults, {
                        particleCount,
                        origin: {
                            x: randomInRange(0.7, 0.9),
                            y: Math.random() - 0.2
                        }
                    }));
                }, 250);
            }
        }
    }
});


// When a raid is triggered
client.on('raided', (channel, username, viewers) => {

    // Get the bar background color and text color
    old_bar_background_color = bottom_bar.style.backgroundColor;
    old_bar_text_color = bottom_bar.style.color;

    // Set text to "RAID!"
    bottom_bar.innerHTML = '<h1>RAID!</h1>';

    // Slide in the bottom bar
    slideInBar();

    // Timeout slide in time seconds
    setTimeout(() => {

        // remove animation
        bottom_bar.style.transition = "none";

        // start a blinker animation
        setInterval(() => {

            // Change the background color to red
            bottom_bar.style.backgroundColor = '#ff0000';

            // Change the text color to black
            bottom_bar.style.color = '#000000';

            setTimeout(() => {

                // Change the background color to black
                bottom_bar.style.backgroundColor = '#000000';

                // Change the text color to red
                bottom_bar.style.color = '#ff0000';

            }, 500);

        }, 1000);

        // Timeout 2 seconds
        setTimeout(() => {

            // Change text to "$username überfällt uns mit $viewers Zuschauern!"
            bottom_bar.innerHTML = '<h2>' + username + ' überfällt uns mit ' + viewers + ' Zuschauern!</h2>';

            // Timeout 10 seconds
            setTimeout(() => {

                // Remove blinker animation
                clearInterval();

                // Change text to "Vielen dank für die Unterstützung!"
                bottom_bar.innerHTML = '<h2>Vielen Dank für die Unterstützung!</h2>';

                // Timeout 3 seconds
                setTimeout(() => {

                    // Slide out the bottom bar
                    slideOutBar();

                    // Timeout slide out time seconds
                    setTimeout(() => {

                        // Reset the bar colors
                        bottom_bar.style.backgroundColor = old_bar_background_color;
                        bottom_bar.style.color = old_bar_text_color;
                    }, slide_out_duration);

                }, 3000);

            }, 10000);

        }, 2000);

    }, slide_in_duration);
});


// 
// Mobile controller
//
// Interval
setInterval(() => {
    // Ajax request
    $.ajax({
        url: './pull.php',
        type: 'POST',
        success: function(data) {
            // Check if the data is not empty
            if (data) {

                // Parse the data
                data = JSON.parse(data);

                // Loop through the entries
                for (let i = 0; i < data.length; i++) {

                    // Get the entry
                    var entry = data[i];

                    console.log(entry);

                    // Check if the entry is a bar_down
                    if (entry.action === "bar_down") {

                        // Slide out the bar
                        slideOutBar();

                    } else if (entry.action === "bar_up") {

                        // Slide in the bar
                        slideInBar();

                    } else if (entry.action === "bar_textchange") {

                        // Set the text
                        bottom_bar.innerHTML = entry.bar_text;

                    } else if (entry.action === "effect_confetti") {

                        // Start confetti
                        confetti({
                            particleCount: 100,
                            spread: 180,
                            angle: 270,
                            startVelocity: 50,
                            origin: {
                                x: 0.5,
                                y: 0
                            }
                        });

                    }
                }
            }
        }
    });
}, 500);