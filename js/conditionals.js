"use strict";

/* ########################################################################## */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
 /*
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 function analyzeColor(color) */



/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
/*function analyzeColor() {
    switch (color) {
        case "red":
            return "Strawberries are red";
            break;
        case "orange":
            return "Oranges are... orange";
            break;
        case "yellow":
            return "Bananas are yellow";
            break;
        case "green":
            return "Grass is green";
            break;
        case "blue":
            return "blue is the color of the sky.";
            break;
        case "indigo":
            return "Indigo is indigo";
            break;
        case "violet":
            return "Violets are violet";
            break;
        default:
            return "I don't know that color.";
    }

}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var color = prompt("What is your favorite color?")  

function analyzeColor() {
    

    if(color === 'red') {

        alert("Roses are red.")

    } else if(color === 'orange') {

        alert("Carrots are orange.")

    } else if(color === 'yellow') {

        alert("Bananas are yellow.")

    } else if(color === 'green'){

        alert("Grass is green.")

    } else if(color === 'blue') {

        alert("The ocean is blue.")

    } else

        alert("I don't know anything about the color " + color)
    }

analyzeColor()


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

 /*function calculateTotal(luckyNumber, totalAmount) {
        switch (luckyNumber){
            case 1:
                return (10 / 100) * totalAmount;
                break;
            case 2:
                return (25 / 100) * totalAmount;
                break;
            case 3:
                return (35 / 100) * totalAmount;
                break;
            case 4:
                return (50 / 100) * totalAmount;
                break;
            case 5:
                return 0;
                break;
            default:
                return  totalAmount;



        }
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
 /*var luckyNumber = Math.floor(Math.random() * 6);


alert("Your lucky number is: " + (luckyNumber));
alert("Your price BEFORE the discount was: " + (totalAmount));

alert("Your new price after the discount is: " + (totalAmount - (calculateTotal(luckyNumber, totalAmount))));


    console.log(luckyNumber);
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var enterNumber = confirm("Hello! If you would like to enter a number, please press Ok!");

if (enterNumber) {
    var number = prompt("Alright, please enter a number!");

     if (number % 2 == 0)
    {
        alert("This number is even!");
        alert((parseInt(number)) + 100);
        (number > 0) ? alert("This number is positive!") : alert("This number is negative!")
    }
    
    else if (number % 2 == 1)
    {
        alert("This number is odd!");
        alert((parseInt(number)) + 100);
        (number > 0) ? alert("This number is positive!") : alert("This number is negative!")
    }
    else {
        alert("Thank you for your participation!")
    }

}
else {
    alert("Bye")
}


   