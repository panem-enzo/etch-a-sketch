const grid = document.querySelector(".grid");

let numRows = 16;
let numCols = 16;

for (r = 0; r < numRows; r++) {
  const row = document.createElement("div");
  row.setAttribute("style", "display: flex;");
  grid.appendChild(row);
  for (c = 0; c < numCols; c++) {
    const column = document.createElement("div");
    column.setAttribute(
        "style",
        "height: 25px; width: 25px; border: solid; border-width: 1px;"
      );
    row.appendChild(column);
  }
}