let num = Math.floor(Math.random()*10)+1; 
console.log("n= "+num);
let harmonicNum = 0;
for(let n=1;n<=num;n++){
    harmonicNum = harmonicNum + 1/n;
}
console.log("Harmonic Num: "+harmonicNum);