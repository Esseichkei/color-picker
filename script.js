const PALETTE_SIZE = 5;
const SMALL_COLOR = "75px";
const BIG_COLOR = "88px";
var chosen_color = 0;
function focuscolor(which) {
    var i = 1;
    while (i <= PALETTE_SIZE) {
        var coloroutline = document.getElementById("color" + i + "outline");
        console.log(coloroutline);
        coloroutline.style.width = SMALL_COLOR;
        coloroutline.style.height = SMALL_COLOR;
        i++;
    }
    var highlightcolor = document.getElementById("color" + which + "outline");
    console.log(highlightcolor);
    highlightcolor.style.width = BIG_COLOR;
    highlightcolor.style.height = BIG_COLOR;
    chosen_color = which;
}