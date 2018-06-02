function countDown() {

    var count = 3600; //An hour

    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer()
    {
    count=count-1;
    if (count <= 0)
    {
        clearInterval(counter);
        //counter ended, display alert, open twitter
            alert("Another day closer!");
            var url = "https://www.twitter.com/"
            var windowName = "new window";
            window.open(url, windowName, "height=200,width=200");
        return;
    }

    //Time left....
    console.log(count);
    document.getElementById("timeLeft").innerHTML = Math.round(count / 60);
    }
}