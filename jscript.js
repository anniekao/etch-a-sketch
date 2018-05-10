function createDiv(size) {
  for (i=0; i <= size - 1; i++){
    let newDiv = document.createElement("div");
    let grid = document.querySelector(".grid");

    newDiv.className = "gridDiv";
    grid.appendChild(newDiv);
  };
}

function addGreen(){
  this.style.backgroundColor = "#00ff92";
}

function addWhite(){
  this.style.backgroundColor = "white";
}

let size = 16;
createDiv(size);

let gridDiv = document.getElementsByClassName("gridDiv");

for (let i=0; i < gridDiv.length; i++) {
  gridDiv[i].addEventListener("mouseenter", addGreen, false);
  gridDiv[i].addEventListener("mouseleave", addWhite, false);
}



/*let btnQuery = document.querySelector("#size-input");

btnQuery.addEventListener("click", () => createDiv(size));*/
