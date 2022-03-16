slide_in_duration = 2500;
slide_out_duration = 2500;
const bottom_bar = document.getElementById('bottom_bar');

const client = new tmi.Client({
    channels: ['cuzimbisonratte']
});

client.connect();

function slideInBar() {
    // Slide in the bottom bar SMOOTH
    bottom_bar.style.transition = "all " + slide_in_duration / 1000 + "s ease-in-out";
    bottom_bar.style.bottom = "0px";
}

function slideOutBar() {
    // Slide out the bottom bar SMOOTH
    bottom_bar.style.transition = "all " + slide_out_duration / 1000 + "s ease-in-out";
    bottom_bar.style.bottom = "-200px";
}

client.on('message', (channel, tags, message, self) => {

    // Check if user is a mod or the streamer
    if (tags.mod || tags.username === 'cuzimbisonratte') {

        // Check if message is a command
        if (message.startsWith('!')) {

            // Check if command starts with "!barcolor"
            if (message.startsWith('!barcolor')) {

                // Get the color
                const color = message.split(' ')[1];

                // Check if color is valid
                if (color) {

                    // Change the color
                    bottom_bar.style.backgroundColor = color;
                }
            } else if (message.startsWith('!bar') || !message.startsWith('!bottom_bar')) {

                // Remove "!bar "
                const text = message.replace('!bar ', '');
            }

        }
    }
});

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