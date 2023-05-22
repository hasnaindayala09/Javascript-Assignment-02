// / Chapter 21 (Changing Case)

// var a = "GOOD MORNING";
// console.log(a.toLowerCase());

// var x = "HELLO WORLD";
// x = x.toLowerCase();
// console.log(x);

// var y = "hasnain"
// y = y.toUpperCase();
// console.log(y)

// var a = "ABDUL QADIR"
// var b = a.toLowerCase();
// console.log(b)

// var month = [ "MON", "TUE", "THUR", "FRI" ]
// for(var i = 0; i < month.length; i++){
//  var newMonth = month[i].toLowerCase()
// console.log(newMonth)
// }
  
// 

// var cityName = "kaRacHi";
// var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

// console.log(capitalizedCityName);


// Chapter 22 - 25 (Strings)

// sameWords = "captain"
// word = sameWords[1:3]
// print(word)

// let string = "Hello, World!";
// let length = string.length;


// var animal = "elephant";
// var startIndex = Math.floor(animal.length / 2) - 2;
// var endIndex = Math.floor(animal.length / 2) + 2;
// var last = animal.slice(startIndex, endIndex);

// console.log(last); 


// let stringVariable = "Hello, world!";
// let characterCount = stringVariable.length;
// console.log(characterCount); 


// First statement to measure the number of characters in a string
// var stringVariable = "Hello, World!";
// var length = stringVariable.length;
// console.log("Number of characters:", length);

// // Second statement to slice the string and assign it to a new variable
// var newVariable = stringVariable.slice(1, -3);
// console.log("New variable:", newVariable);

// var text = "To be or not to be.";
// var indx = text.indexOf("be");

// console.log(indx); 


// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");

// console.log(indx); 


// let text = "I am going to attend the class in S a i m s";

// let i = text.lastIndexOf("go");
// if (i !== -1) {
//   i += 1; // Adding 1 to get the index of the first character
// } else {
//   i = null; // No occurrence of "go" in the string
// }

// console.log(i);


// 


// let text = "Hello, world!";
// let cha = text.charAt(9);

// console.log("10th character: " + cha);


// let str = "Hello, World!";
// let arr = [];

// for (let i = 0; i < str.length; i++) {
//   arr[i] = str.charAt(i);
// }

// console.log(arr);


// let str = "I want to participate in module B.";
// let newStr = str.replace("module", "B");

// console.log(newStr);


// Chapter 26 (Rounding Numbers) 


// var number = 4`.7;
// var roundedNumber = Math.round(number);

// console.log(ro`undedNumber);


// let origNum = 9.8;
// let roundNum = Math.ceil(origNum);

// console.log(roundNum); 

// let origNum = 5.8; // Replace with your desired number
// let roundNum = Math.floor(origNum);

// console.log(roundNum);


// let origNum = 7.8; 
// let roundNum = Math.round(origNum);

// console.log(roundNum); 


// var myVariable = Math.round(0.5);

// console.log(myVariable);


// Chapter 27 (Random Numbers)


// Generate a random number between 0 and 1
// var random = Math.random();

// // Convert the random number to a range between 1 and 50
// var number = Math.floor(random * 50) + 1;

// console.log(number);


// // Generating a random number
// var randomNumber = Math.floor(Math.random() * 100) + 1;

// // Printing the random number
// console.log(randomNumber);


// Function to generate a random number between min and max 
// function getRandomNumber(min, max) {
// //     return Math.floor(Math.random() * (max - min + 1)) + min;
// //   }
  
// //   // Function to simulate a dice roll
// //   function rollDice() {
// //     return getRandomNumber(1, 6); // Generates a number between 1 and 6
// //   }
  
// //   // Example usage
// //   console.log(rollDice()); // Prints a random number between 1 and 6



// function coinToss() {
//     // Generate a random number between 0 and 1
//     var randomNumber = Math.random();
  
//     // If the number is less than 0.5, it's heads. Otherwise, it's tails.
//     if (randomNumber < 0.5) {
//       return "Heads";
//     } else {
//       return "Tails";
//     }
//   }
  
//   // Call the coinToss function
//   var result = coinToss();
//   console.log(result);


// Chapter 28, 29 (Converting Strings)


// function stringToInteger(str) {
//     return parseInt(str); // Using parseInt()
//     // return Number(str); // Using Number()
//   }
  
//   var str = "123";
//   var result = stringToInteger(str);
//   console.log(result); 
  

// function stringToFloat(str) {
//     return parseFloat(str); // Using parseFloat()c
//     // return Number(str); // Using Number()
//   }
  
//   var str = "5.17";
//   var result = stringToFloat(str);
//   console.log(result); 
  

// let number = 55;
// let string = number.toString();
// console.log(typeof string); 


// Chapter 30 (Controlling the length of  decimals) 


// var num = 3.14159265358979323846;  // Replace with your desired number
// var newNum = num.toFixed(4).toString();
//   console.log(newNum); 


// let number = 5.14159; // The original number

// number = parseFloat(number.toFixed(2));

// console.log(number); 


// Assign the number with many decimal places to a variable\
// var originalNumber = 1234.56789;

// Round the number to 2 decimal places
// var roundedNumber = originalNumber.toFixed(2);

// Convert the rounded number to a string
// var roundedString = roundedNumber.toString();

// Display an alert with the rounded number as a string
// alert(roundedString);
  
 

