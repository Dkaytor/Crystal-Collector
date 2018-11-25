//Setting up the jquery function 
$(document).ready(function () {

    // Create the variables needed for the game

    var computerNumber = "";
    var crystal = "";
    var wins = 0;
    var losses = 0;
    var counter = 0;

    //Create function to generate random number for computer

    function randomComputerGuess() {
        computerNumber = Math.floor(Math.random() * 101) + 19;
    }

    //Create function to generate random number for crystal 1
    function randomCrystal1() {
        crystal1 = Math.floor(Math.random() * 11) + 1;
    }

    //Create function to generate random number for crystal 2
    function randomCrystal2() {
        crystal2 = Math.floor(Math.random() * 11) + 1;
    }

    //Create function to generate random number for crystal 3
    function randomCrystal3() {
        crystal3 = Math.floor(Math.random() * 11) + 1;
    }

    //Create function to generate random number for crystal 4
    function randomCrystal4() {
        crystal4 = Math.floor(Math.random() * 11) + 1;
    }

    //Calling random numbers
    randomComputerGuess();
    randomCrystal1();
    randomCrystal2();
    randomCrystal3();
    randomCrystal4();

   // if ((computerNumber === counter)) {
     //   wins++;
       // alert("You win!");
        //$(".computerGuess, .results").empty();
        //counter = 0;
        //randomComputerGuess();
        //randomCrystal1();
        //randomCrystal2();
        //randomCrystal3();
        //randomCrystal4();
        //console.log(computerNumber);
        //console.log(counter);
        //}

    //else if ((counter > computerNumber)) {
      //  losses++;
        //alert("Sorry, you lost");
        //$(".computerGuess, .results").empty();
        //counter = 0;
        //randomComputerGuess();
        //randomCrystal1();
        //randomCrystal2();
        //randomCrystal3();
        //randomCrystal4();
    //}

        //else {

            //Capture click event for crystal 1
            $("#image1").on('click', function() {
                counter = counter + crystal1;
                $(".results").text("Your score is " + counter);

            })

            //Capture click event for crystal 2
            $("#image2").on('click', function () {
                counter = counter + crystal2;
                $(".results").text("Your score is " + counter);
                //sets win/lose conditions

            })

        //Capture click event for crystal 3
        $("#image3").on('click', function () {
            counter = counter + crystal3;
            $(".results").text("Your score is " + counter);

        })


        //Capture click event for crystal 4
        $("#image4").on('click', function () {
            counter = counter + crystal4;
            $(".results").text("Your score is " + counter);

        })
    
if ((computerNumber === counter)) {
    wins++;
    console.log(wins);
    }

$(".computer-guess").text(computerNumber);
$(".numberWins").text("Wins: " + wins);
$(".numberLosses").text("Losses: " + losses);



})








