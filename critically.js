console.log("*************************");
console.log("**********Part 3*********");

let data = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

//Take an object and increment its age field.
// if the object does not yet contain an age field, create one and set it to 0.
// add (or modify, as appropriate) an updated_at field that stores a Date object with the current time

function incrementAge(object) {
   object.age = parseInt(object.age); // convertet to int so i can inciment it
    if (!object.age) {
        object.age = 0;
    } else {
        object.age += 1;
        
    }
    object.updated_at = new Date();
    object.age = object.age.toString();  // reconvertet to string
    return object;

}
data.forEach(i => incrementAge(i));
console.log(data);

console.log("*************************");

// Take an object, make a copy, and increment the age field of the copy. Return the copy.

function copyData(oldData) {
    let newData = JSON.stringify(oldData);

    return JSON.parse(newData);
}

//console.log(copyData(data));

function incrementAgeCopy(data) {
    dt = copyData(data);
    dt.forEach(i => incrementAge(i));
    return dt;
}

console.log(incrementAgeCopy(data));
console.log(data);

// since the Date object is an object, what would happen if 
// we modified it in the copy of the object created in the second function using setTime() or another method?

// it would affect the original Date object as well if i used a shallow copy
// but i allready used a deep copy methode JSON.stringify and JSON.parse .
//so any modifications to the Date object in the copy will not affect the original Date object
