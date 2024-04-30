// 2 Types of memory
// Stack(Primitive type), Heap(Non-Primitive)
let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "abhi@gmail.com",
    upi : "7582@ybl"
}
let userTwo = userOne
userTwo.email = "abhijeet@google.com"
console.log(userOne.email);
console.log(userTwo.email);
