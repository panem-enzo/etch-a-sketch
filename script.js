function promptUser() {
  const startBtn = document.querySelector("button");
  startBtn.addEventListener("click", () => {
    let size = prompt("What is the size 'N', of your 'NxN' grid?");
    generateGrid(size, size);
  }); 
}

function generateGrid(numRows, numCols) {

  const grid = document.querySelector(".grid");

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