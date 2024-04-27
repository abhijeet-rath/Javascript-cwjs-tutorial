// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

//below codes must be avoided. comparison b/w 2 different datatypes is complicated.
console.log(null>0);
console.log(null==0);
console.log(null>=0);
//The reason is that equality check == and comparisons > < >= work differently.Comparisons convert null to a number, treating it as zero. thatswhy null>=0 is true and null>0 is false.
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);

// === is strict check
console.log("2" == 2);
console.log("2" === 2);