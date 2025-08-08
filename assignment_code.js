//1.print hello with name
const name = String(prompt("Enter your name"));
console.log("Hello " + name + "!");

alert("welcome to the site, " + name + "!");

//2. Calculate and display the results
console.log("Sum of two Number is: " + (num1 + num2));
console.log("Difference of two Number is: " + (num1 - num2));
console.log("Product of two Number is: " + (num1 * num2));
console.log("Quotient of two Number is: " + (num1 / num2));

//3.Age Checker

let age=Number(prompt("Enter the age: "));
if(age<18){
    console.log("You are minnor");
}
else if(age>18 && age<60){
    console.log("you are adult");
}
else {
    console.log("you are senior citizen");
}

//4.Number Guessing Game

// Calculate and display the results
/*let num1 =Number(prompt("Enter num1: "));
let num2 =Number(prompt("Enter num2: "));
console.log("Sum: " + (num1 + num2));
console.log("Difference: " + (num1 - num2));
console.log("Product: " + (num1 * num2));
console.log("Quotient: " + (num1 / num2));*/


//4.Number Guessing Game
/*
const secretNumber = 49;
const userGuess = Number(prompt("Guess the secret number Within :"));
if (userGuess === secretNumber) {
  console.log("🎉 Correct! You guessed the correct number!");
} else if (Math.abs(userGuess - secretNumber) === 1) {
  console.log("🔥 Very close! You're nearby the number away.");
} else if (userGuess < secretNumber) {
  console.log("📉 Too low! Plz Try again.");
} else if (userGuess > secretNumber) {
  console.log("📈 Too high! Try again.");
} else {
  console.log("❌ Invalid input. Please enter aDifferent umber.");l}*/


  //5.Print 1 to 10 Use a for loop to print numbers from 1 to 10.

//   for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }


//6.Multiplication Table Ask the user for a number. Print the multiplication table for that number up to 10.

// let number = parseInt(prompt("Enter a number:"));
// for (let i = 1; i <= 10; i++) {
//   console.log(`${number} x ${i} = ${number * i}`);
// }


//7.Sum of Even Numbers Use a loop to find and print the sum of even numbers between 1 and 100.

// let sum = 0;
// for (let i = 2; i <= 100; i += 2) {
//   sum += i;
// }
// console.log("Sum of even numbers from 1 to 100 is:", sum);


//8.shopping List Create a shopping List 

// let shoppingList = ["Milk", "Bread", "Eggs", "Butter", "Apples"];
// shoppingList.push("Bananas");
// shoppingList.pop();
// console.log("Final Shopping List:", shoppingList);


//9.Reverse an Array Create an array of numbers and use .reverse() to print the reversed array.

// let numbers = [1, 2, 3, 4, 5];
// // Reverse the array
// let reversed = numbers.reverse();
// console.log("Reversed Array:", reversed);


//10.search in Array Create an array of colors (e.g., ["red", "blue", "green"]) Ask the user to enter a color.Use .

// let colors = ["Green", "Red", "Blue","Pink","SkyBlue"]; // Step 1: Create an array of colors
// let userColor = prompt("Enter a color to search:");// Step 2: Ask the user to enter a color
// userColor = userColor.trim().toLowerCase(); // Step 3: Normalize input (trim and lowercase)
// if (colors.includes(userColor)) {
//   console.log(`${userColor} is in the list!`);
// } else {
//   console.log(`${userColor} is NOT in the list.`);
// }


//11.FizzBuzz

// for (let i = 1; i <= 30; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }


//12 palindrome checker

// let word = prompt("Enter a word to check if it is a palindrome:");
// // Remove spaces and make lowercase for fair comparison
// let cleanWord = word.toLowerCase().replace(/\s+/g, "");
// // Reverse the word
// let reversedWord = cleanWord.split("").reverse().join("");
// if (cleanWord === reversedWord) // Check if it's a palindrome
// {
//   console.log(word + " is a palindrome!");
//   console.log(word + " is a palindrome!");
// } else {
//   console.log(word + " is NOT a palindrome.");
//   console.log(word + " is NOT a palindrome.");
// }


//13.mini project 1.

let questions = [
  "1. What is the capital of France?\n(a) Berlin\n(b) Paris\n(c) Madrid",
  "2. Which planet is known as the Red Planet?\n(a) Mars\n(b) Jupiter\n(c) Venus",
  "3. Who wrote 'Hamlet'?\n(a) Charles Dickens\n(b) William Shakespeare\n(c) Mark Twain",
  "4. What is the largest ocean on Earth?\n(a) Atlantic Ocean\n(b) Indian Ocean\n(c) Pacific Ocean",
  "5. Which element has the chemical symbol 'O'?\n(a) Oxygen\n(b) Gold\n(c) Osmium"
];
// Correct answers (matching the options letters)
let correctAnswers = ['b', 'a', 'b', 'c', 'a'];
let score = 0;// Score counter

for (let i = 0; i < questions.length; i++) {
  let answer = prompt(questions[i]);
  
  if (answer && answer.toLowerCase() === correctAnswers[i]) {
    score++;
  }
}
alert("You scored " + score + " out of " + questions.length);// Show total score
console.log("You scored " + score + " out of " + questions.length);
//B number guessing game
const targetNumber = Math.floor(Math.random() * 100) + 1;// Step 1: Generate random number between 1 and 100
// Step 2: Initialize variables
let guess;
let attempts = 0;
while (guess !== targetNumber) // Step 3: Game loop
{
    guess = parseInt(prompt("Guess a number between 1 and 100:"));// Step 4: Get user input
    attempts++;
    // Step 5: Check input and give hints
    if (isNaN(guess)) {
        console.log("❌ Please enter a valid number!");
    } else if (guess < targetNumber) {
        console.log("📉 Too low! Try again.");
    } else if (guess > targetNumber) {
        console.log("📈 Too high! Try again.");
    } else {
        console.log(`🎉 Correct! You guessed it in ${attempts} attempts.`);
    }
}









  










