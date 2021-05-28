let num = Math.floor(Math.random()*1000);
let rem;
console.log(num);
while(num>0){
    rem = num%10;
    console.log(rem);
    num = num/10;
    num = Math.floor(num);
}