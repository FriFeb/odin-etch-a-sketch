/* 
create container with 960x960 px
set gridSize to 16 (it means 16x16 grid within container)
go into a loop:

    go into a loop:

        create div with 960 / 16 px size
        append to the grid

		continue until iterations are over (columnSize < 16)

continue until iterations are over (rowSize < 16)
*/

const gridSize = 16;
const containerSize = 960;

const container = document.querySelector(".container");
container.style.width = container.style.height = containerSize + "px";

for (let i = 0; i < gridSize; i++) {
  for (let j = 0; j < gridSize; j++) {
    const div = document.createElement("div");
    div.className = "grid-element";
    div.style.width = div.style.height = containerSize / gridSize + "px";
    container.appendChild(div);
  }
}

container.addEventListener("mouseover", (e) => {
  if (e.target.className !== "grid-element") return;

  if (e.buttons === 1) e.target.classList.add("bg-dark");
});