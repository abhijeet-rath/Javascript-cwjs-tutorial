/* Primitive Datatype :
7 types : String, Number, Boolean, null, undefined, Symbol, BigInt.
*/
const score = 100
const scoreValue = 100.3 

const isLoggedIn = false
const outsideTemp = null
let userEmail;   // undefined output
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
const bigNumber = 3455321564345643456n

/* Reference Type Datatype (Non Primitive) :
TYPES : Arrays, Objects, functions */
const heros = ["shaktimaan","naagraj","doga"] //Array
let myobj = {    //Object
    name: "Abhijeet",
    age: 27,
}

const myFunction = function(){
    console.log("Hello World");}
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof myobj);
