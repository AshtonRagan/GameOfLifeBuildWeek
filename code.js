const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const genCount = document.getElementById("gen");
const playBtn = document.getElementById("playBtn");
// const main = document.getElementById("main");
const body = document.querySelector("body");
const reso = 10;
canvas.width = 250;
canvas.height = 250;

const cols = canvas.width / reso;
const rows = canvas.height / reso;
let Gen = 0;
var play = false;
genCount.innerHTML = 0;

main = document.createElement("div");
main.id = "main";
body.appendChild(main);

// console.log(Gencont);

const buildGrid = () => {
  return new Array(cols)
    .fill(null)
    .map(() =>
      new Array(rows).fill(null).map(() => Math.floor(Math.random() * 2))
    );
};

// const buildGrid = () => {
//   num = 25;
//   for (let i = 0; i < num; i++) {
//     for (let i = 0; i < num; i++) {
//       div = document.createElement("div");
//       div.classList.add("numDiv");
//       div.innerHTML = Math.floor(Math.random() * 2);
//       div.addEventListener("click", clicky);
//       main.appendChild(div);
//     }
//   }
// };

// const clicky = (dcell) => {
//   if (dcell.innerHTML === 1) {
//     dcell.innerHTML = 0;
//   } else {
//     dcell.innerHTML = 1;
//   }
//   console.log(`${dcell.innerHTML},Id: ${dcell.id}`);
// };

const buildDiv = () => {
  div = document.createElement("div");
  div.classList.add("numDiv");
  //   div.innerHTML = Math.floor(Math.random() * 2);

  return div;
};

// const buildGrid = () => {
//   // div = document.createElement("div");
//   //   div.classList.add("numDiv");
//   //   div.innerHTML = Math.floor(Math.random() * 2);
//   // div.addEventListener("click", clicky);
//   //   main.appendChild(div);
//   return new Array(cols)
//     .fill(null)
//     .map(() => new Array(rows).fill(null).map(() => buildDiv()));
// };

// let grid = buildGrid();
// console.log(grid);

const render = (grid) => {
  console.log(grid.length);
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      var cell = grid[col][row];
      let dcell = buildDiv();
      dcell.innerHTML = cell;
      dcell.id = `C${col}R${row}`;

      dcell.addEventListener("click", () => {
        // console.log(dcell);
        if (dcell.innerHTML === "1") {
          cell = 0;
          dcell.innerHTML = "0";
          dcell.style.backgroundColor = "white";
        } else {
          cell = 1;
          dcell.innerHTML = "1";
          dcell.style.backgroundColor = "black";
        }
        console.log(`${dcell.innerHTML},Id: ${dcell.id}`);
      });
      dcell.style.backgroundColor = dcell.innerHTML === "1" ? "black" : "white";
      main.appendChild(dcell);
    }
  }
};

const uprender = (grid) => {
  // console.log(grid.length);
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row];
      let dcell = document.getElementById(`C${col}R${row}`);
      dcell.innerHTML = cell;
      dcell.style.backgroundColor = dcell.innerHTML === "1" ? "black" : "white";
    }
  }
};

// function getCursorPosition(canvas, event) {
//   const rect = canvas.getBoundingClientRect();
//   const x = event.clientX - rect.left;
//   const y = event.clientY - rect.top;
//   console.log("x: " + x + " y: " + y);
// }

// canvas.addEventListener("mousedown", function (e) {
//   getCursorPosition(canvas, e);
// });

// const render = (grid) => {
//   for (let col = 0; col < grid.length; col++) {
//     for (let row = 0; row < grid[col].length; row++) {
//       const cell = grid[col][row];
//       //   main.appendChild(cell);

//       ctx.beginPath();
//       ctx.rect(col * reso, row * reso, reso, reso);
//       ctx.fillStyle = cell ? "black" : "white";
//       ctx.fill();
//       ctx.stroke();
//     }
//   }
// };

// function nextGen(grid) {
//     const nextgen = grid.map((arr) => [...arr]);

//     //   console.log("NEXT GEN: ", nextgen);

//     for (let col = 0; col < grid.length; col++) {
//       for (let row = 0; row < grid[col].length; row++) {
//         const cell = grid[col][row];
//         let numN = 0;
//         for (let i = -1; i < 2; i++) {
//           for (let j = -1; j < 2; j++) {
//             if (i === 0 && j === 0) {
//               continue;
//             }
//             const xcell = col + i;
//             const ycell = row + j;

//             if (xcell >= 0 && ycell >= 0 && xcell < cols && ycell < rows) {
//               let curN = grid[col + i][row + j];
//               numN += curN;
//             }
//           }
//         }
//         if (cell === 1 && numN < 2) {
//           nextgen[col][row] = 0;
//         } else if (cell === 1 && numN > 3) {
//           nextgen[col][row] = 0;
//         } else if ((cell === 0) & (numN === 3)) {
//           nextgen[col][row] = 1;
//         }
//       }
//     }
//     return nextgen;
//   }

function nextGen(grid) {
  const nextgen = grid.map((arr) => [...arr]);

  //   console.log("NEXT GEN: ", nextgen);

  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row];
      let numN = 0;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          if (i === 0 && j === 0) {
            continue;
          }
          const xcell = col + i;
          const ycell = row + j;

          if (xcell >= 0 && ycell >= 0 && xcell < cols && ycell < rows) {
            let curN = grid[col + i][row + j];
            numN += curN;
          }
        }
      }
      if (cell === 1 && numN < 2) {
        nextgen[col][row] = 0;
      } else if (cell === 1 && numN > 3) {
        nextgen[col][row] = 0;
      } else if ((cell === 0) & (numN === 3)) {
        nextgen[col][row] = 1;
      }
    }
  }
  return nextgen;
}

function update() {
  if (play === true) {
    playBtn.innerHTML = "Stop";
    // main.remove();
    grid = nextGen(grid);
    Gen += 1;
    genCount.innerHTML = Gen;
    console.log(Gen);
    render(grid);
  } else {
    playBtn.innerHTML = "Play";
  }
  requestAnimationFrame(update);
}

const unrender = () => {
  if (play) {
    playBtn.innerHTML = "Stop";
    grid = nextGen(grid);
    Gen += 1;
    genCount.innerHTML = Gen;
    // console.log("Clicky", play);
    uprender(grid);
    requestAnimationFrame(unrender);
  } else {
    playBtn.innerHTML = "Play";
  }
};

const playfunc = () => {
  play = !play;
  console.log("Clicky", play);
  if (play) {
    requestAnimationFrame(unrender);
  }
};

let grid = buildGrid();
// buildGrid();
// requestAnimationFrame(unrender);
playBtn.addEventListener("click", playfunc);
render(grid);
// console.log(grid)
