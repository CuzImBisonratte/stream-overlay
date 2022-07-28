# streamoverlay

This is the overlay i use in my stream.

## Credits

Plexus Dots (particles.js) - VincentGarreau - [here](https://github.com/VincentGarreau/particles.js)   
Confettis - Catdad - [here](https://github.com/catdad/canvas-confetti)  

## Implementation - OBS

1. Open OBS
2. Go to the scene you want to use the overlay on
3. Click on "Add Source"
4. Select "Browser"
5. Choose 1920x1080 as screen resolution
6. Paste the URL of the overlay you want to use
7. Remove everything from the "Custom CSS" section

!!! WARNING: The Github Pages instances only work with the "overlay" folder in the root of the repository. All other files would react to things on my channel... !!!


## Hosting
If you don't want to use your pc as a server, you can either use a version of our overlay (which is hosted on github, but the mobile control doesn't work) or you can host it yourself on a mini-pc like a raspberry pi.


# Interactives - Control Buttons
The /mixup/ folder can be controlled from /mobile_controller/  

## Color coding
Dark-Blue-Gray: Bar Height Settings
Green: Custom
Light-Blue: Predefined Texts
Orange: Live-Effects
Purple: Show/Hide elements

# Interactives - commands

## All user commands

### Konfetti
- Behaviour: Sends confetti to the screen
- Command: `!konfetti`

### Fireworks
- Behaviour: Sends fireworks to the screen
- Command: `!firework`

## Mod-Only commands

### Barcolor
- Behaviour: The barcolor command changes the color of the bottom bar.
- Command: `!barcolor [background color] [text color]`
- Arguments: 
    - [background color]: The color of the background of the bottom bar.
    - [text color]: The color of the text in the bottom bar. 

### Bar text
- Behaviour: The bar text command changes the text in the bottom bar.
- Command: `!bar [text]`
- Arguments: 
    - [text]: The text you want to display in the bottom bar.

### Barsize
- Behaviour: The barsize command changes the height and fontsize of the bottom bar.
- Command: `!barsize [height] [fontsize]`
- Arguments: 
    - [height]: The height of the bottom bar.
    - [fontsize]: The fontsize of the bottom bar.

### Slide-IN/OUT
- Behaviour: Slide in/out the bottom bar.
- Commands:
    - `!barclose`: Slide out the bottom bar.
    - `!baropen`: Slide in the bottom bar.  

### Sayings
- Behaviour: The sayings command activates the bottom bar and displays a random predefined saying that switches automatically.
- Command: `!bauchbinde`  
_Coming Soon_