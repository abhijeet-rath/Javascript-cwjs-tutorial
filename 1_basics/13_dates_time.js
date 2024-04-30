let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateStringo);
console.log(myDate.toISOString);
console.log(myDate.toJSON);
console.log(myDate.toLocaleDateString);
console.log(myDate.toLocaleString);
console.log(typeof myDate);   //interview q

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString());
let myCreatDate = new Date(2023,0,23, 5, 3)
console.log(myCreatDate.toLocaleString());
let mynewDate = new Date("2024-05-12")
console.log(mynewDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);   // time from 1jan,1970 till now in miliseconds
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));    //convert from miliseconds to seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

newDate.toLocaleString('default', {
    weekday : "long",
    
})