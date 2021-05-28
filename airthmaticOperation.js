let a = Math.floor(Math.random()*100);
let b = Math.floor(Math.random()*100);
let c = Math.floor(Math.random()*100);
console.log("a: "+a);
console.log("b: "+b);
console.log("c: "+c);
let op1 = a+b*c;
console.log(op1);
let op2 = a%b+c;
console.log(op2);
let op3 = c+a/b;
console.log(op3);
let op4 = a*b+c;
console.log(op4);

let max = op1;
if(op2>max)
    max = op2;
if(op3>max)
    max = op3;
if(op4>max)
    max = op4;
console.log("Max: "+max);