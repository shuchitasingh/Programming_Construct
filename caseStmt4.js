let value = Math.floor(Math.random()*100);
console.log("Given value: "+value);
let conversionType=Math.floor(Math.random()*10)%4+1;
let convertedValue=0;

switch(conversionType){
    case 1:
        convertedValue = value*12;
        console.log("Feet to inch:"+convertedValue);
        break;
    case 2:
        convertedValue = value/12;
        console.log("Inch to feet: "+convertedValue);
        break;
    case 3:
        convertedValue = value*0.3048;
        console.log("Feet to meter: "+convertedValue);
        break;
    case 4:
        convertedValue = value/0.3048;
        console.log("Meter to feet: "+convertedValue);
}