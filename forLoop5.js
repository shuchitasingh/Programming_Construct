let num = Math.ceil(Math.random()*10); 
console.log("Number = "+num);
let factorial=1;
for(let i=1;i<=num;i++){
    factorial = factorial*i;
}
console.log("Factorial: "+factorial);