//WHILE LOOP EXERCISES
//Question 1.
/*Create a while loop that uses console.log() to create the output shown below.

2
4
8
16
32
64
128
256
512
1024
2048
4096
8192
16384
32768
65536
*/

/*

while (i < 65536) {
   	var i = 1
    i * 2;
   console.log(i)
   
}
*/

/* 
Question 2:
An ice cream seller can't go home until she sells all of her cones. 
	a.)First write enough code that generates a random number between 50 and 
	100 representing the amount of cones to sell before you start your loop.
	 
	 b.)Inside of the loop your code should generate another random number between 
	 1 and 5, simulating the amount of cones being bought by her clients. 
	 
	 c.)Use a do-while loop to log to the console the amount of cones sold to each 
	 person. The below code shows how to get the random numbers for this exercise.

The output should be similar to the following:

5 cones sold...  // if there are enough cones
Cannot sell you 6 cones I only have 3...  // If there are not enough cones
Yay! I sold them all! // If there are no more cones
*/

//This is how you get a random number between 50 and 100
// Represents amount of cones to sell 
var allCones = Math.floor(Math.random() * 50) + 50;
//This expression will generate a random number between 1 and 5
// Represents the amount of cones sold

do {
	var soldCones = Math.floor(Math.random() * 5) + 1;

	if(soldCones <= allCones){
			console.log(`${soldCones} cones sold.`)
			allCones -= soldCones
	} else if(soldCones > allCones) {
			console.log(`Cannot sell you ${soldCones} because I only have ${allCones}`)
		} 
		
	} while(allCones !== 0)	

console.log("Yay I sold all my cones.")








