//string in js....

// let str = "shah lucky";
// console.log(str.length);
// console.log(str);

//template literal...

// let tl = `this is temlate literal`;
// console.log(tl);

let obj = {
  item: "tv",
  price: 250000,
};

console.log("the price of", obj.item, "is", obj.price, "rupees");
console.log(`the price of ${obj.item} is ${obj.price} rupees `); //template literal

//we can  also do some work in template literal..

console.log(`the addition is ${1 + 1}`);

//escape characters

console.log("shah\nlucky"); //new line
console.log("shah\tlucky"); // tab
