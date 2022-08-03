var username = prompt("Enter your Username").toLowerCase()
var password = prompt("Password").toLowerCase()

var currUsername = "username"

var currPassword = "password"

if(username === currUsername && password === currPassword) {

	alert("You have logged in.")

} else if(username === currUsername && password === currPassword) {

	alert("Both your username and password are incorrect")

} else if(username !== currUsername) {

	alert("Invalid username")


} else if(password !== currPassword) {


	alert("Invalid Password")

} else {

	alert("Invalid Credentials")

}

var isRaining; 
isRaining = confirm("is it raining?")

alert((isRaining)? "wear a jacket": "no");