const myArr = [0,1,2,3,4,5]    // arrays prototype access in inspect
const myHeros = ["Shaktimaan","Naagraj"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]);  
// Array Methods :
//myArr.push(6)
//console.log(myArr);
//myArr.pop()    //removes last element
// myArr.unshift(9) // 9 gets added to start of array 
// myArr.shift()    // first element gets removed 

// console.log(myArr.includes(9));     //false
// console.log(myArr.includes(3));     //true

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);    //converted to string

//slice, splice
console.log("A", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);
const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);