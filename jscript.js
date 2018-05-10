function createDiv (size) {
  for (i=0; i <= size - 1; i++){
    let newDiv = document.createElement("div");
    let gridDiv = document.querySelector(".grid");
    gridDiv.appendChild(newDiv);
  };
}

let size = 16;
createDiv(size);

/*let btnQuery = document.querySelector("#size-input");

btnQuery.addEventListener("click", () => createDiv(size));*/
