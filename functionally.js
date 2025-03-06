console.log("*************************");
console.log("**********Part 1*********");

// Take an array of numbers and return the sum

let array1 = [1 , 10 , 23 , -13 , 0 , 12 , 300 ];

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
    }
    return sum ;
}

console.log( "1 - The sum of the numbers is : " + sumArray(array1));
console.log("*************************");

// Take an array of numbers and return the average.

function averageArray(ar) {
    return  sumArray(ar)/ar.length;
}

console.log( "2 - The average of the numbers is : " + averageArray(array1));
console.log("*************************");

// Take an array of strings and return the longest string.

let array2 = ['hello' , 'hi', 'bonjour', 'welcome' , 'merci'];

function longestString(string) {
let long = "";
    for (let i = 0; i < string.length; i++) {
        
        if (string[i].length > long.length) {
            long = string[i];   // but here the function returne the first longest string in the array if 2 or more are the same         
        }
    }

    return long
}

console.log( "3 - The longest string in the array is : " +  longestString(array2));
console.log("*************************");
// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 

function stringNumber(string , number) {
    return string.filter(i => i.length > number).join(" and ");
}

console.log( `4 - The strings longer than ${3} are: ` +  stringNumber(array2, 5));
console.log("*************************");
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
// recursion is like a function loop 

function printNumberRecursion(num , start = 1 ) {
    if (start > num) return;
    console.log(start);
    printNumberRecursion(num , start + 1 );

}

console.log( `5 - Numbers between 1 and ${6} are: `);
console.log( printNumberRecursion(6));
console.log("*************************");