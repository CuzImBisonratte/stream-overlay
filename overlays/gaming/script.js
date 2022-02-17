top_element = document.getElementById('top');
folded_out = true;

// Add transition time
top_element.style.transition = "2s";

function switch_name() {

    if (folded_out) {
        top_element.style.marginLeft = "-50vh";
        folded_out = false;
        window.setTimeout(function() {
            r = Math.floor(Math.random() * 255);
            g = 0;
            b = Math.floor(Math.random() * 255);
            top_element.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        }, 2000);
    } else {
        top_element.style.marginLeft = "0vh";
        folded_out = true;
    }
}


window.setInterval(switch_name, 2.5 * 60 * 1000);
window.addEventListener("click", switch_name);