$(document).ready(function() {

    // Variables's initialization 
    var win = 0;
    var losse = 0;
    var numberGuess = 0;
    var totalScore = 0;
    var crystalNumber = [];
    var ruby = $("#ruby");
    var aquamarine = $("#aquamarine");
    var emerald = $("#emerald");
    var ambar = $("#ambar");
    var divID = "";
    var numberGuessvalue = 0


    function restartVariables(){
        //Restartting variables
        numberGuess = 0;
        totalScore = 0;
        crystalNumber = [];
        ruby = $("#ruby");
        aquamarine = $("#aquamarine");
        emerald = $("#emerald");
        ambar = $("#ambar");
        divID = "";
        numberGuessvalue = 0
    }


    function chooseNumbers(max, min){
        //Setting value of numberGuess ramdonly
        numberGuess = Math.floor(Math.random() * (max - min + 1) + min);
    }

    function crystalValues(){
        //Setting value of crystals ramdonly
        for (var i = 0; i < 4; i++) {
            chooseNumbers(12, 1);
            crystalNumber.push(numberGuess);  
        }
        // console.log(crystalNumber + " Numbers to guess 1-12");
        ruby.attr("value", crystalNumber[0]);
        aquamarine.attr("value", crystalNumber[1]);
        emerald.attr("value", crystalNumber[2]);
        ambar.attr("value", crystalNumber[3]);
    }
    
    function restartValues(){
        //Restartting HTML Values
        $("#numberGuesses").text(numberGuess);
        numberGuessvalue = numberGuess;
        $("#wins").text(win);
        $("#losses").text(losse);
        $("#totalScores").text(totalScore);
    }

    chooseNumbers(120, 19);
    // console.log(numberGuess + " Number to guess 19-120");
    restartValues();
    crystalValues();

    $(".crystalDiv").on("click", function() {
        //Game rules 
        divID = "";
        divID = $(this).attr("id");
        // console.log(divID);
        totalScore += parseInt($(this).attr("value"));
        $("#totalScores").text(totalScore);
        // console.log($(this).attr("value"));
        // console.log(totalScore);
        if(totalScore === numberGuessvalue){
            win ++;
            // console.log("You win!!!!!!");
            restartVariables();
            chooseNumbers(120, 19);
            console.log(numberGuess + " Number to guess 19-120");
            restartValues();
            crystalValues();      
        }else if(totalScore > numberGuessvalue){
            // console.log("You Lose!!!!!!");
            losse ++;
            restartVariables();
            chooseNumbers(120, 19);
            // console.log(numberGuess + " Number to guess 19-120");
            restartValues();
            crystalValues();  
        }
        
    });

    $("#reset").on("click", function(){
        // Reset Button clear all
        win = 0;
        losse = 0;
        restartVariables(); 
        chooseNumbers(120, 19);
        console.log(numberGuess + " Number to guess 19-120");
        restartValues();
        crystalValues();
    });
})