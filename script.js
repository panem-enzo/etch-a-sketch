const container = document.querySelector(".container");
container.style = "width: 960px;";

function createGridNode(size) {
  const grid = document.createElement("div");
  grid.className = "grid";
  container.appendChild(grid);
  generateGrid(grid, size, size);
}

function promptUser() {
  const startBtn = document.querySelector("button");

  startBtn.addEventListener("click", () => {
    let size = prompt("What is the size 'N', of your 'NxN' grid?");
    if (document.querySelector(".grid")) document.querySelector(".grid").remove();
    createGridNode(size);
  });
}

function generateGrid(grid, numRows, numCols) {

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
}

promptUser();