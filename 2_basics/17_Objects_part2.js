// const tinderUser = new Object()   //Singleton oBject..   Or,
const tinderUser = {}      // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {                          // nesting of objects
    email : "some@gmail.com",
    fullname : {                               // another object
        userfullname : {                       // another object
            firstname : "hitesh",
            lastname : "choudhary"
    }
}
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}
const obj3 = Object.assign({},obj1,obj2)       // less preferred
console.log(obj3);
const obj4 = {...obj1, ...obj2}      // good method
console.log(obj4);

const users = [
    {
        id : "abc12",
        email : "abhi@google.com"
    },
    {
    },
    {
    },
]
users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Object prototype thru inspect
// obj1 = {1: "a",2: "b"}
//obj1
//press arrow to see functions