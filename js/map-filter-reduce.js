const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//1.) Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const newUsers = [];

const userLanguages = users.filter(function(user) {
    if(user.languages.length >= 3) {
        newUsers.push(user)
    }
});

//Walkthrough answers
let moreThanThree = users.filter(user => user.languages.length >= 3)
console.log(moreThanThree)

console.log(newUsers);

//2.) Use .map to create an array of strings where each element is a user's email address


let emails = users.map(user => user.email)

console.log(emails);



//3.) Use .reduce to get the total years of experience from the list of users. Once you get the total of 
// years you can use the result to calculate the average.


const totalYearsOfExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience
}, 0);


let avgExperience = totalYearsOfExperience / users.length;

console.log(`Total years of experience: ${totalYearsOfExperience}`);
console.log(`Average years of experience: ${avgExperience}`);



//4.) Use .reduce to get the longest email from the list of users.

// const longestEmail = users.reduce((longest, userEmail) => {


//     return longest + userEmail.email


// });

let longestEmail = emails.reduce(
    function (a, b) {
        return a.length > b.length ? a : b
    }
);

//let longestEmail = 

  console.log(longestEmail);


//5.) Use .reduce to get the list of user's names in a single string. 
// Example: Your instructors are: ryan, luis, zach, fernando, justin.

const usersSingleString = users.reduce(function(userName, value, index){
    str = "Your instructors are: "
    if(index !== users.length -1){
        return `${userName} ${value.name}, ` 
    } else {
         return `${userName} ${value.name}. `
    }
   
},"");


console.log(`${str} ${usersSingleString}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

// Use map, filter, and reduce to:
// Create an array of the first letters of each fruit


    const firstLetters = fruits
       
        .map((fruit) => fruit[0])
        .join("")
        .toUpperCase() 

console.log(firstLetters);


const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog']
    
// Secret Message.
const secretMessage = animals.map((animal) => animal[0]).join('')
    
// Log.
console.log(secretMessage) // "HelloWorld"


const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

// Create array of user objects based on the customers array of objects 
// (each user object should just have name and age properties)

let customerNames = customers.map(customer => customer.name)
console.log(customerNames)


let customerAges = customers.map(customer => customer.age)
console.log(customerAges)

console.log(`${customerNames} ${customerAges}`)
// Create an array of civil servant customers (teachers and police officers) 
// containing the same properties as the objects on the customers objects

// Determine the average age of all the customers









const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
];


// Create a function makeSuperPet() that takes in the pets array as input and returns a single pet object 
// with the following shape...

// {
//     name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
//     age: THE_TOTAL_OF_ALL_PET_AGES,
//     breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATATED_INTO_A_SINGLE_STRING
// }
// Create a function that takes in an array of pets and returns an array of the length of first names for pugs only.
//  Your output for the given input should be [3, 6] for 'Bud' and 'Bowser'


// Create a function makeLongPetString() that when given the variable of pets, returns a 
// string of all property values with dashes separating each property value





const family = [
       {
           name: "Pam",
           gender: "female",
           age: 29,
       },
           {
           name: "Amelie",
           gender: "female",
           age: 10,
       },
           {
           name: "Justin",
           gender: "male",
           age: 32,
       },
   ];



// Create a function getFemaleFamilyMembers() that when given the family variable 
// as an argument, returns an array of female family member names










