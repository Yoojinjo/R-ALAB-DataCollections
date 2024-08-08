//Part 1. Refactored Loopy
const csv =
    "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const rows = csv.split("\n");
console.log(rows);

for (let row of rows) {
    let cell1, cell2, cell3, cell4;
    const cells = row.split(",");
    [cell1, cell2, cell3, cell4] = [...cells];
    console.log(cell1, cell2, cell3, cell4);
}
//Part2. Expanding Functionality
// Declare a variable that stores the number of columns in each row of data within the CSV.
let columns;

// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
//Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.
columns = csv.split("\n");
let data = [];
let data2 = [];
for (let i = 0; i < columns.length; i++) {
    data = columns[i].split(",");
    data2.push(data);
}
console.log(data2);

// PART 3
// Implement the following:
// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

//  headings convert  to lowercase
let headings = data2[0].map((heading) => heading.toLowerCase());
console.log(headings);

// convert into objects
let result = data2.slice(1).map((row) => {
    // Create an object for each row
    let obj = {};
    row.forEach((value, index) => {
        obj[headings[index]] = value;
    });
    return obj;
});

console.log(result);

// PART 4
// Using array methods, accomplish the following tasks, in order upon the result of Part 3:
// Remove the last element from the sorted array.
let result2 = result;
result2.pop();
console.log(result2);

// Insert the following object at index 1: { id: "48", name: "Barry", occupation: "Runner", age: "25" }

result2.unshift({ id: "48", name: "Barry", occupation: "Runner", age: "25" });
console.log(result2);

// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }
result2.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

// Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.
// Average Age == TotalAge/numberOfPeople
let TotalAge = 0;
for (let i = 0; i < result2.length; i++) {
    TotalAge += Number(result2[i].age);
    
}

console.log(TotalAge);
let AverageAge = TotalAge/result2.length
console.log(AverageAge)