function sayMyName(){
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}
// sayMyName()         // execution
// sayMyName          // reference

// function addTwoNumbers(number1, number2){    // inputs are called parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
   let result = number1 + number2
   return result          // after result no line will get printed
   console.log("Hitesh");
}

addTwoNumbers(3,4)     //  3,4 are arguments
addTwoNumbers(3,"4")
addTwoNumbers(3, null)
const result = addTwoNumbers(3,5)
// console.log("result: ", result);


function loginUserMessage(username){
    if(username == undefined){        // if(!username)    same output
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())     // output as undefined...interview

