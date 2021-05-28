/* 
1.Write a program in the following steps
a. Generates 10 Random 3 Digit number.
b. Store this random numbers into a array.
c. Then find the 2nd largest and the 2nd smallest element without sorting the array.*/

  
//Find second largest number and second smallest with out sorting
let array=new Array();
//iterating the loop for getting 10 threeDigit random number

for(let i=0;i<10;i++){
    let randomNumber=Math.floor(Math.random()*900+100);
    array.push(randomNumber);
}
console.log(array)
let lengthArray=array.length;
console.log(lengthArray);

let largest1=0;
let largest2=0;
let smallest=array[0];
let smallest2=array[0];

for(let i=0;i<lengthArray;i++){
    if(array[i]>largest1){
        largest1=array[i];
    }
    if(array[i]<smallest){
        smallest=array[i];
    }
}
for(let j=0;j<lengthArray;j++){
    if(array[j]>largest2 && array[j]!=largest1){
        largest2=array[j];
    }if(array[j]<smallest2 && array[j]!=smallest){
        smallest2=array[j];
    }

}
console.log("First largest number is:"+largest1);
console.log("First smallest number is:"+smallest);
console.log("Second largest number:"+largest2);
console.log("Second smallest number:"+smallest2);
