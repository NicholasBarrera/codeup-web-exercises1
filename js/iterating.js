(function(){
    "use strict";
    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
var names = ['John', 'Paul', 'George', 'Ringo'];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
for(let i = 0; i<names.length; i++) {
    console.log(`The name at index ${i} is: ${names[i]}`);
}
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
names.forEach(function(name) {
    console.log(`${name} is a good name.`);
});

    /*
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it

      Example:
        1.) ([1, 2, 3, 4, 5]) // returns 1
        2.) ([1, 2, 3, 4, 5]) // returns 2
        3.) ([1, 2, 3, 4, 5]) // return 5 */

    //1.) Returns the first item in the array
function first(input) {
    return input[0];
}
   

    //2.)returns the second item in the array
function second(input) {
    return input[1];
}
   

    //3.)Returns the last item in the array
function last(input) {
    return input[input.length -1];
}

console.log(first(names));
console.log(second(names));
console.log(last(names));

})();
