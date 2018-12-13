const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const statsSection = document.getElementById("stats");

statsSection.style.display = "none";

var originText = document.querySelector("#testText").innerHTML;

var testStrings = [

    "The crowd of delegates is made up of predominantly indigenous representatives from all the continents, along with UN representatives from the various member nations. Together, they swell the General Assembly.",

    "More applause from the gathered indigenous delegates. Even the blonde-haired, pale-skinned, reindeer-herding Sami people from Sweden, Finland, Russia and Norway. Evo Morales summarizes his opening remarks with a reminder of the power of solidarity.",

    "In the subsequent decade since it was approved, UNDRIP has served as the principal document guiding this international body and its member states on indigenous issues. It took 25 years to be debated, negotiated, and then finally approved with a vote of the General Assembly.",

    "Everybody is a walking price tag, and doing the math is as easy as a Google search on the free, ubiquitous wifi. The air is thick with humidity and money: Women wear ground-length Opening Ceremony raincoats."
];

var interval;
var timerRunning;
var numberOfWords;
var timeInSeconds;
var numberOfWordsPerMinute;
var numberOfWordsPerSecond;
var numberOfErrors;
var timer;

initializeValues();

function generateARandomTestString() {
    var index = Math.floor(Math.random() * testStrings.length);  
    document.getElementById("testText").innerHTML = testStrings[index];
    originText = testStrings[index]; 
}

function initializeValues () {
    statsSection.style.display = "none";

    interval = null;
    timerRunning = false;
    timer = [0, 0, 0, 0];
    numberOfWords = 0;
    numberOfWordsPerMinute = 0;
    numberOfWordsPerSecond = 0;
    numberOfErrors = 0;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";

    generateARandomTestString();
}

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Match the text entered with the provided text on the page:

function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/1000)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));

}

// Start the timer when the text entered starts i.e. length is 0

function start() {
    statsSection.style.display = "block";
    let textEnteredLenght = testArea.value.length;

    if (textEnteredLenght === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer , 10);
    }
}

function calculateAndDisplayStatistics() {

    timeInSeconds = timer[3]/100;
    console.log(timeInSeconds);

    numberOfWords = testArea.value.split(' ').length;

    numberOfWordsPerSecond = numberOfWords/timeInSeconds;
    numberOfWordsPerMinute = numberOfWordsPerSecond * 60;

    document.getElementById("speed").innerHTML = "You speed was " + Math.floor(numberOfWordsPerMinute) + " words per minute. <br> You made a total of " + numberOfErrors + " errors.";

}

function stopTimer() {
    calculateAndDisplayStatistics();
    clearInterval(interval);
}

function showCurrentSpeed() {
    timeInSeconds = timer[3]/100;
    numberOfWordsPerSecond = numberOfWords / timeInSeconds;
    numberOfWordsPerMinute = numberOfWordsPerSecond * 60;

    document.getElementById("speed").innerHTML = "Current speed is " + Math.floor(numberOfWordsPerMinute) + " wpm.";
}

function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substr(0, textEntered.length);

    numberOfWords = testArea.value.split(' ').length;

    showCurrentSpeed();

    if (textEntered == originText) {
        testWrapper.style.borderColor = "#429890";
        stopTimer();
    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#65CCf3";
        }
        else {
            testWrapper.style.borderColor = "#E95D0F";
            numberOfErrors++;
        }
    }
}

function resetTimer() {
    clearInterval(interval);
    initializeValues();
}

// Reset everything:

// Event listeners for keyboard input and the reset button:

// Event Listener For KeyPress
testArea.addEventListener("keypress", start, false);

// Event Listener For KeyUp
testArea.addEventListener("keyup", spellCheck, false);

// Event Listener For Reset Button Click
resetButton.addEventListener("click", resetTimer, false);
