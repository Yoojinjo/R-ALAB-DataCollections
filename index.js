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
let columns 

// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
//Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.
columns = csv.split("\n");
let data = []
let data2 = []
for (let i=0; i<columns.length; i++) {
     data = columns[i].split(",")
     console.log(data)
    
}
