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