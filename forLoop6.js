let num = Math.ceil(Math.random()*100);
console.log("Num is: "+num);
console.log("Factors are:");
for(let i=1;i<=num;i++){
    if(num%i==0)
        console.log(i);
}