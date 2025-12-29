//This will grab the height of the window of the browser
var HEIGHT = $(window).height();
var counter = 1;
var totalDivs = 8;

function wave() {
    if (counter > totalDivs) {
        counter = 1;
    }

    $("#div" + counter).animate(
        { top: HEIGHT + "px" }, 500, function () {
            $(this).animate(
                { top: "0px" }, 500, function () {
                    counter++;
                    wave();
                }
            )
        }
    )
}

wave();
setInterval(function () {
    counter = 1;
    wave();
}, 5300);