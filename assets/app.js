$(document).ready(function () {



    var questionArray = []
    questionArray[0] = ["Who are you ?", ["me", "you", "will", "her", 2]],
        questionArray[1] = ["Do you like me like me?", ["yes", "no", "maybe", "dunno", 0]];
    questionArray[2] = ["Do you like me like milk?", ["yes", "no", "maybe", "dunno", 1]];
    questionArray[3] = ["Do you like me like chocolate?", ["yes", "no", "maybe", "dunno", 2]];
    questionArray[4] = ["Do you like me like apples?", ["yes", "no", "maybe", "dunno", 3]];
    questionArray[5] = ["Do you like me like oranges?", ["yes", "no", "maybe", "dunno", 0]];
    questionArray[6] = ["Do you like me like to run?", ["yes", "no", "maybe", "dunno", 1]];
    questionArray[7] = ["Do you like me like to code?", ["yes", "no", "maybe", "dunno", 2]];
    questionArray[8] = ["Do you like me like to be confused?", ["yes", "no", "maybe", "dunno", 3]];
    questionArray[9] = ["Do you like me like to stare?", ["yes", "no", "maybe", "dunno", 0]];
    questionArray[10] = ["Do you like me like the night?", ["yes", "no", "maybe", "dunno", 1]];
    questionArray[11] = ["Do you like me like movies?", ["yes", "no", "maybe", "dunno", 2]];
    questionArray[12] = ["Do you like me like jobs?", ["yes", "no", "maybe", "dunno", 3]];
    questionArray[13] = ["Do you like me like SHAQ?", ["yes", "no", "maybe", "dunno", 0]];
    questionArray[14] = ["Do you like me like lebron?", ["yes", "no", "maybe", "dunno", 1]];
    questionArray[15] = ["Do you like me like tron?", ["yes", "no", "maybe", "dunno", 2]];
    questionArray[16] = ["Do you like me like apples?", ["yes", "no", "maybe", "dunno", 3]];

    var userChoice;
    var userCorrect = 0;
    var userIncorrect = 0;




    function start() {
        $("#rules").toggleClass("whoa");
        $("#game").toggleClass("show");

    }






    var arrayScan = 0

    function docChange() {
        $("#question").text(questionArray[arrayScan][0]);
        $("#answer1").text(questionArray[arrayScan][1][0]);
        $("#answer2").text(questionArray[arrayScan][1][1]);
        $("#answer3").text(questionArray[arrayScan][1][2]);
        $("#answer4").text(questionArray[arrayScan][1][3]);

    }

    function reveal() {
        $("#game").toggleClass("show");
        $("#cookie").toggleClass("hidden");
    }

    function reward() {
        $("#cookie").text("Yasss Kween! You nailed it!");
        $("#cookie").append("<div>" + "Your score is like this many " + userCorrect + "</div>");
        $("#cookie").append("<div>" + "But you've been wrong like this many " + userIncorrect + "</div>");
        reveal();
        setTimeout(function () {
            reveal();
        }, 2000);
    }

    function insult() {
        $("#cookie").text("Lamesies! You've failed it :(");
        $("#cookie").append("<div>" + "Your score is like this many " + userCorrect + "</div>");
        $("#cookie").append("<div>" + "But you've been wrong like this many " + userIncorrect + "</div>");       
        reveal();
        setTimeout(function () {
            reveal();
        }, 2000);
    }
    docChange();

    function check() {
        if (userChoice === questionArray[arrayScan][1][4]) {
            userCorrect++;
            reward();
        } else {
            userIncorrect++;
            insult();
        }
    }

    $("#answer1").on("click", function () {
        userChoice = 0;
        arrayScan++;
        docChange();
        check();
        console.log(userChoice);
    })

    $("#answer2").on("click", function () {
        userChoice = 1;
        arrayScan++;
        docChange();
        check();
        console.log(userChoice);
    })
    $("#answer3").on("click", function () {
        userChoice = 2;
        arrayScan++;
        docChange();
        check();
        console.log(userChoice);
    })
    $("#answer4").on("click", function () {
        userChoice = 3;
        arrayScan++;
        docChange();
        check();
        console.log(userChoice);
    })

    $("#startButton").on("click", start)



});