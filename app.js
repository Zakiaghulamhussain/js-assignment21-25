//Question#1
const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");

const fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "! Welcome!");

//Question#3
var word = "Pakistani";
var index = word.indexOf("n");
document.write("The index of letter 'n' in the word 'Pakistani' is: " + index);

//Question#17
let userInput = prompt("Enter a word:");
let lastCharacter = userInput.charAt(userInput.length - 1);
console.log("Last character of input:", lastCharacter);


//Question#18
let str = "The quick brown fox jumps over the lazy dog";
let wordToSearch = "the";
let count = 0;
let words = str.split(" ");
for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === wordToSearch) {
        count++;
    }
}

console.log("Number of occurrences of 'the':", count);
