// singleton

// object literals

const mySym = Symbol("key1")

const jsuser = {
    name : "Abhijeet" ,
    "full name" : "Abhijeet Kumar Rath" ,   // no chance to acess it
    [mySym] : "myKey1" ,       // interview - syntax of symbol
    age : 18,
    location : "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(jsuser[mySym]);

jsuser.email = "hitesh@chatgpt.com"
//Object.freeze(jsuser)         // now u cant change info of object
jsuser.email = "hitesh@micro.com"
console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello JS user");
}
console.log(jsuser.greeting);
console.log(jsuser.greeting());

jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);   // same reference object
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());
