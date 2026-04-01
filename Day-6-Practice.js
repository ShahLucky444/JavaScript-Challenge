// even number till 100....

// for(num=0;num<=100;num++){
//     if(num%2 == 0){
//         console.log("even=",num);
//     }
// }

// //odd number till 100....

// for(num=0;num<=100;num++){
//     if(num%2 !== 0){
//         console.log("even=",num);
//     }
// }

// number guessing game....

let gno = 25;
let uno = prompt("guess the number:");

while(uno != gno ){
    uno = prompt("you guess wrong number");
}

console.log("congratulation you guess it  right!!!");
