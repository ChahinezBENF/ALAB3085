console.log("*************************");
console.log("**********Part 2*********");

let data = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
            { id: "48", name: "Barry", occupation: "Runner", age: "25" },
            { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
            { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
            { id: "7", name: "Bilbo", occupation: "None", age: "111" }]


// Sort the array by age.

let sortByAge = data.slice().sort((a, b)=> a.age - b.age);
console.log("1 - Data is assorted by Age : ");
console.log(sortByAge);
console.log("*************************");

// Filter the array to remove entries with an age greater than 50.

let filterAge = data.filter(i=> i.age <= 50);
console.log("2 - Data is filtred by Age less than 50 ");
console.log(filterAge);
console.log("*************************");

// Map the array to change the “occupation” key to “job” and increment every age by 1.

let mapArray = data.map((key) =>({ job :key.occupation , age : parseInt(key.age)+1 }))
console.log("3 - New Data with JOB and Age");
console.log(mapArray);
console.log("*************************");

// Use the reduce method to calculate the sum of the ages.

const initialValue = 0;
let sumAge = data.reduce((accumulator , curentValue) => accumulator + parseInt(curentValue.age) , initialValue );
console.log("4 - sum of the ages ");
console.log(sumAge);
console.log("*************************");

// Then use the result to calculate the average age.

let averAge = sumAge/data.length;
console.log("5 - Average of the ages ");
console.log(averAge);
console.log("*************************");

