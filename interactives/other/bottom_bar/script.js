const bottom_bar = document.getElementById('bottom_bar');

const client = new tmi.Client({
    channels: ['cuzimbisonratte']
});

client.connect();


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
