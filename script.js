


    
var CCOUNT = 3600;
    
var t; 

var count = 3600;

function cddisplay() {
    // displays time in span
    document.getElementById('timeLeft').innerHTML = Math.round(count / 60);
   
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
        return;
    } else {
        count--;
        t = setTimeout("countdown()", 1000);
    }return;
};

function cdpause() {
    // pauses countdown
    clearTimeout(t);
};

function hideButton() {
    // Greys out button
    document.getElementById("startButton").className = "btn btn-primary disabled";
    document.getElementById("startLine").innerHTML = "Kick some bum!";
}




console.log(count);