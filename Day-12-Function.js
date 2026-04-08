/* function myfunction(){ // function definition
    console.log("i am js learner")
}

myfunction(); // function call
*/

/* function sum(a,b){//parameter pass
   s = a+b;
   return s;
}

let val = sum(3,10);
console.log(val);
*/

// arrow function.

/*const arrowmul = (a,b) =>{
    return a*b;
};*/

//practice question for count vowels in string...

function countvowel(str) {
  let count = 0;
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}
