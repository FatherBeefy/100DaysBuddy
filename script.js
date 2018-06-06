


var CCOUNT = 3600;
    
var t, count;

function cddisplay() {
    // displays time in span
    document.getElementById('timespan').innerHTML = Math.floor(count / 60);
};

function countdown() {
    // starts countdown
    cddisplay();
    if (count == 0) {
        // time is up
        alert("Another day closer!");
            var url = "https://www.twitter.com/";
            var windowName = "new window";
            window.open(url, windowName, "height=200,width=200");
    } else {
        count--;
        t = setTimeout("countdown()", 1000);
    }
};

function cdpause() {
    // pauses countdown
    clearTimeout(t);
};

function cdreset() {
    // resets countdown
    cdpause();
    count = CCOUNT;
    cddisplay();
};

function hideButton() {
    // Greys out button
    document.getElementById("startButton").className = "btn btn-primary disabled";
    document.getElementById("startLine").innerHTML = "Kick some bum!";
}

function showButton() {
    document.getElementById("startButton").classList.remove("disabled");
}