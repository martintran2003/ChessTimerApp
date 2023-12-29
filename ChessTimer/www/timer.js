// Interval Timers
var intervalOn1;
var intervalOn2;

// Player turn
var turn = 1;

// Time constants
const second = 1000;
const minute = second * 60;
const hour = minute * 60;

// Time variables
var hours1 = parseInt(localStorage.getItem('hours1'));
var minutes1 = parseInt(localStorage.getItem("minutes1"));
var seconds1 = parseInt(localStorage.getItem("seconds1"));
var increment1 = parseInt(localStorage.getItem("increment1")) * second;
var delay1 = parseInt(localStorage.getItem("delay1")) * second;

var hours2 = parseInt(localStorage.getItem("hours2"));
var minutes2 = parseInt(localStorage.getItem("minutes2"));
var seconds2 = parseInt(localStorage.getItem("seconds2"));
var increment2 = parseInt(localStorage.getItem("increment2")) * second;
var delay2 = parseInt(localStorage.getItem("delay2")) * second;


// Time remaining in ms
var countTimer1 = hours1 * hour + minutes1 * minute + seconds1 * second;
var countTimer2 = hours2 * hour + minutes2 * minute + seconds2 * second;

// Initialize text on both timers
const initializeTimers = () => {
    
    // dull player 2 side
    document.querySelector("#player2side").style.backgroundColor = "rgb(150,150,150)";
    document.querySelector("#player2side").style.color = "rgb(125,125,125)";

    refreshTimer2();
}

const timer1 = () => {
    
    countTimer1 -= 1000;

    refreshTimer1();

    if (countTimer1 == 0)
    {
        document.getElementById("player1side").removeEventListener("click", player1click);
        clearInterval(intervalOn1);
        endGame(1);
    }
}

const timer2 = () => {
    
    countTimer2 -= 1000;

    refreshTimer2();

    // if timer value is 0, remove the clickability
    if (countTimer2 == 0)
    {
        document.getElementById("player2side").removeEventListener("click", player2click);
        clearInterval(intervalOn2);
        endGame(2);
    }
}

const refreshTimer1 = () => {
    const numHour = Math.floor(countTimer1 / hour);
    const numMin = Math.floor((countTimer1 % hour) / minute);
    const numSec = Math.floor((countTimer1 % minute) / second);

    var textHour = "";
    var textMin = "";
    var textSec = "";

    if(numHour < 10) {
        textHour = "0";
    }
    if (numMin < 10) {
        textMin = "0";
    }
    if (numSec < 10) {
        textSec = "0";
    }

    textHour += numHour;
    textMin += numMin;
    textSec += numSec;

    const time = textHour + ":" + textMin + ":" + textSec;
    console.log(time);

    document.querySelector("#time1").innerText = time;
}

const refreshTimer2 = () => {
    const numHour = Math.floor(countTimer2 / hour);
    const numMin = Math.floor((countTimer2 % hour) / minute);
    const numSec = Math.floor((countTimer2 % minute) / second);

    var textHour = "";
    var textMin = "";
    var textSec = "";

    if(numHour < 10) {
        textHour = "0";
    }
    if (numMin < 10) {
        textMin = "0";
    }
    if (numSec < 10) {
        textSec = "0";
    }

    textHour += numHour;
    textMin += numMin;
    textSec += numSec;

    const time = textHour + ":" + textMin + ":" + textSec;
    console.log(time);

    document.querySelector("#time2").innerText = time;
}

const changeSides = ()  => {
    if (turn == 1) {
        // Stop timer 1
        clearInterval(intervalOn1);
        intervalOn2 = setInterval(timer2, 1000);
        turn = 2;
        document.querySelector("#player2side").style.backgroundColor = "rgb(33,33,33)";
        document.querySelector("#player1side").style.backgroundColor = "rgb(150,150,150)";
        document.querySelector("#player1side").style.color = "rgb(125,125,125)";
        document.querySelector("#player2side").style.color = "white";
        countTimer1 += increment1;
        refreshTimer1();
    }
    else 
    {
        // Stop timer 2
        clearInterval(intervalOn2);
        intervalOn1 = setInterval(timer1, 1000);
        turn = 1;
        document.querySelector("#player1side").style.backgroundColor = "rgb(245,245,245)";
        document.querySelector("#player2side").style.backgroundColor = "rgb(150,150,150)";
        document.querySelector("#player2side").style.color = "rgb(125,125,125)";
        document.querySelector("#player1side").style.color = "black";
        countTimer2 += increment2;
        refreshTimer2();
    }
}

const player1click = () => {
    if (turn == 1) 
    {
        changeSides();
    }
}

const player2click = () => 
{
    if (turn == 2)
    {
        changeSides();
    }
}

const endGame = (lose) =>
{
        document.querySelector("#player1side").style.backgroundColor = "rgb(150,150,150)";
        document.querySelector("#player1side").style.color = "rgb(125,125,125)";
        document.querySelector("#player2side").style.backgroundColor = "rgb(150,150,150)";
        document.querySelector("#player2side").style.color = "rgb(125,125,125)";

        document.querySelector("#endscreen").style.display = "block";

        if (lose == 1)
        {
            document.getElementById("endmessage").innerHTML = "Player 1 ran out of time.";
        }
        else
        {
            document.getElementById("endmessage").innerHTML = "Player 2 ran out of time.";
        }
}


/* MAIN FUNCTION */

initializeTimers(); /* Start White Timer */
intervalOn1 = setInterval(timer1, 1000); /* Start Player 1 Timer */

document.getElementById("player1side").addEventListener("click", player1click);
document.getElementById("player2side").addEventListener("click", player2click);

