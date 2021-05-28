let num = Math.ceil(Math.random()*100); 
console.log("Number is: "+num);
if(num==1)
    console.log("Not Prime");
else{
    for(let i=2;i<=num;i++){
        if(i==num){
            console.log("Prime");
            break;
        }
        if(num%i==0){
            console.log("Not prime");
            break;
        }
    }
}