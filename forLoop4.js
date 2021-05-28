let start = Math.ceil(Math.random()*10); 
let end = Math.ceil(Math.random()*100);
console.log("Start="+start);
console.log("End="+end);
if(end>start){
    if(start==1)
    console.log("Not Prime");
    else{
        for(let i=start;i<=end;i++){
            for(let j=2;j<=i;j++){
                if(j==i){
                    console.log("Prime number: "+i);
                }
                if(i%j==0)
                    break;   
            }
        }
    }
}