//JavaScript with HTML exercises

console.log('Hello, from external JavaScript.')

//Use the alert function to show a message that says 'Welcome to my Website!'.

alert('Welcome to my Website!!!!!!')

/*Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that 
says that the color entered is your favorite color too.For example, if the user enters "blue", your code 
should alert a message that says:"Great, blue is my favorite color too!"*/

var favcolor = prompt('What is your favorite color?')

alert('Oh cool, ' + favcolor + " is my favorite color too!")
/*Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
Use an alert to show the results of each problem.
Finally, commit the changes to your git repository, and push to GitHub.*/

/*You have rented some movies for your kids: The little mermaid (for 3 days),
 Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet 
 if they're going to like it). If price for a movie per day is $3, how much will you have to pay?*/

var mermaid = prompt('How many days would you like to rent the "Little Mermaid"?') * 3
var bear = prompt('How many days would you like to rent "Brother Bear"?') * 3
var hercules = prompt('How many days would you like to rent "Hercules"?') * 3

function total(x, y, z) {
	return mermaid + bear + hercules
}

console.log(total(mermaid, bear, hercules))


alert("Your total cost today is $" + (mermaid + bear + hercules))

/*Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, 
they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. 
How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours 
for Google and 4 hours for Amazon.*/

var grate = 400;
var arate = 380;
var frate = 350;

var gpay = grate * prompt('How many hours did you work this week at Google?') 
var apay = arate * prompt('How many hours did you work this week at Amazon?')
var fpay = frate * prompt('How many hours did you work this week at Facebook?')

function mypay(x, y, z) {
	return gpay + apay + fpay
}

var payday = gpay + apay + fpay 
alert("Your paycheck for this week is $" + payday)


/*A student can be enrolled in a class only if the class is not full and the class schedule does 
not conflict with her current schedule.*/

var classNotFull = true
var noConflict = confirm('Does this class interfere with any other classes?')


var enroll = classNotFull && noConflict

if(enroll){
	alert('You are now enrolled in class.')
}

else 
	alert('You are not enrolled in this class.')

/*A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. 
Premium members do not need to buy a specific amount of products.*/

var premium = confirm('Are you a premium member?')
var cartsize = prompt('How many items are in your cart?')

var offerValid = (premium == true || cartsize > 2)	

if(offerValid){
	alert('You qualify for the offer.')
}

else 
	alert('You do not qualify for the offer.')



	

//Create a variable that holds a boolean value for each of the following conditions:
var username = 'codeup'
var password = 'notastrongpassword'

//the password must be at least 5 characters
var tooShort = password.length >= 5
//the password must not include the username
var notIncludeUser = password.indexOf(username) === -1
//the username must be no more than 20 characters
var tooLong = username.length < 20
//neither the username or password can start or end with whitespace
var whitespace = username.trim() && password.trim()

var noWhitespace = username.trim() === username && password.trim() === password

 














