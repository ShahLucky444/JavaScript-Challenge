let str = "shah lucky";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.slice(2,10));
console.log(str.replace("h","u"));
console.log(str.charAt(2));

//concat

let str1 = "shah";
let str2 = "bunny";
let cnt = str1.concat(str2);
console.log(cnt);

//practice que.

let fullname = prompt("enter your fullname without spaces");
let username = "@" + fullname + fullname.length;
console.log(username);
