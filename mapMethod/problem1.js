/*
      Write a program in the following steps
   a. Roll a die and find the number between 1 to 6
   b. Repeat the Die roll and find the result each time
   c. Store the result in a dictionary
   d. Repeat till any one of the number has reached 10 times
   e. Find the number that reached maximum times and the one that was for
      minimum times
*/

let dictionary = new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]]);
while(true){
    let numberOnDice = (Math.floor(Math.random() * 10) % 6) + 1;
    let count = dictionary.get(numberOnDice);
    dictionary.set(numberOnDice, ++count);
    if (Array.from(dictionary.values()).includes(10)) 
        break;
}
console.log(dictionary);

let sortedMap = new Map([...dictionary.entries()].sort((a, b) => b[1] - a[1]));
console.log("Max occurance : "+ Array.from(sortedMap)[0]);
console.log("Max occurance : "+ Array.from(sortedMap)[5]);
