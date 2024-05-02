function calculateCartPrice(...num1){      // ... is rest or spread operator
    return num1
}
console.log(calculateCartPrice(200,400,500,2000));

function calculateCartPric(val1,val2,...num1){      // output asked in interview.
    return num1
}
console.log(calculateCartPric(200,400,500,2000));

const user = {                // object pass
    username : "hitesh",
    price : 199
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));   //OR,
console.log(returnSecondValue([200,400,500,1000]));