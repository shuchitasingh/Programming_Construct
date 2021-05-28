/* Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,
etc and store them in an array */

let array=new Array();

for(let number=11;number<=100;number++){
    let temp=number;
    let reverse=0;
    while(temp>0){
        let rem=temp%10;
        reverse=reverse*10+rem;
        temp=parseInt(temp/10);
    }
    if(reverse==number){
        array.push(number);
    }
}
console.log(array);