const grid = document.querySelector(".grid");

let numRows = 16;
let numCols = 16;

for (r = 0; r < numRows; r++) {
  const row = document.createElement("div");
  row.setAttribute("style", "display: flex;");
  grid.appendChild(row);

  for (c = 0; c < numCols; c++) {
    const gridSquare = document.createElement("div");
    gridSquare.setAttribute(
        "style",
        "height: 25px; width: 25px; border: solid; border-width: 1px;"
      );
    gridSquare.addEventListener("mouseover", () => {
      gridSquare.style.backgroundColor = "black";
      gridSquare.style.transition = "background-color ease 0.2s";
    });
    
    row.appendChild(gridSquare);
  }
}