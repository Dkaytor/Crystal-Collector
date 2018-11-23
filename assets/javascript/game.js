//Setting up the jquery function 
 $(document).ready(function() {

// Create the variables needed for the game

var computerNumber = "";
var  crystal = "";
var wins = 0;
var losses = 0;
var counter = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;

//Create function to generate random number for computer

function randomComputerGuess () {
    computerNumber = Math.floor(Math.random() * 101) + 19;
}

//Create function to generate random number for crystal 1
function randomCrystal1 () {
    var crystal1 = Math.floor(Math.random() * 11) + 1;
    console.log(crystal1);
}

//Create function to generate random number for crystal 2
function randomCrystal2 () {
    var crystal2 = Math.floor(Math.random() * 11) + 1;
    console.log(crystal2);
}

//Create function to generate random number for crystal 3
function randomCrystal3 () {
    var crystal3 = Math.floor(Math.random() * 11) + 1;
    console.log(crystal3);
}

//Create function to generate random number for crystal 4
function randomCrystal4 () {
    var crystal4 = Math.floor(Math.random() * 11) + 1;
    console.log(crystal4);
}

$(".container").on("click",".crystal", function () {
    console.log("You clicked a button");

    var userClick = event.key;

})

//Calling random numbers
randomComputerGuess();
randomCrystal1();
randomCrystal2();
randomCrystal3();
randomCrystal4();

$(".computer-guess").text(computerNumber);
$(".results").text(crystal);
$(".crystal").text(crystal1);
$(".crystal").text(crystal2);
$(".crystal").text(crystal3);
$(".crystal").text(crystal4);


 })
     



  



