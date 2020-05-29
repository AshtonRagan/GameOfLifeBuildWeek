const arrone = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const genCount = document.getElementById("gen");
const playBtn = document.getElementById("playBtn");
const resetBtn = document.getElementById("resetBtn");
const clearBtn = document.getElementById("clearBtn");
const saveBtn = document.getElementById("saveBtn");
const saveCont = document.getElementById("saveCont");
const saveinput = document.getElementById("saveinput");
const main = document.getElementById("main");
const body = document.querySelector("body");
// import { arrone } from "./presets.js";
const reso = 10;
var width = 250;
var height = 250;

const cols = width / reso;
const rows = height / reso;

const alive = "#abcbff";
const dead = "#2d2847";
var savetext = "";
var saves = [{ name: "pew", arr: arrone }];
let Gen = 0;
var play = false;
var reset = false;
var clear = false;
genCount.innerHTML = 0;

// main = document.createElement("div");
main.id = "main";
// body.appendChild(main);

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

const clicky = (dcell, col, row) => {
  const nextgen = grid.map((arr) => [...arr]);

  if (dcell.innerHTML === "1") {
    nextgen[col][row] = 0;
    dcell.innerHTML = "0";
    // dcell.style.backgroundColor = "white";
  } else {
    nextgen[col][row] = 1;
    dcell.innerHTML = "1";
    // dcell.style.backgroundColor = "black";
  }
  grid = nextgen.map((arr) => [...arr]);
  uprender(grid);
  requestAnimationFrame(unrender);
  //   console.log(`${dcell.innerHTML},Id: ${dcell.id}`);

  console.log(`${dcell.innerHTML},Id: ${dcell.id}`);
};

const loadSave = (e) => {
  console.log("E: ", e.innerText);
  let c = saves.filter((ele) => ele.name === e.innerHTML);
  console.log("C: ", c[0].arr);
  grid = c[0].arr.map((a) => [...a]);
  uprender(grid);
  requestAnimationFrame(unrender);
};

const buildDiv = () => {
  div = document.createElement("div");
  div.classList.add("numDiv");
  //   div.addEventListener("click", () => {
  //     clicky(div);
  //   });
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
        clicky(dcell, col, row);
      });
      dcell.style.backgroundColor = dcell.innerHTML === "1" ? dead : alive;
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
      dcell.style.backgroundColor = dcell.innerHTML === "1" ? dead : alive;
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

// function update() {
//   if (play === true) {
//     playBtn.innerHTML = "Stop";
//     // main.remove();
//     grid = nextGen(grid);
//     Gen += 1;
//     genCount.innerHTML = Gen;
//     console.log(Gen);
//     render(grid);
//   } else {
//     playBtn.innerHTML = "Play";
//   }
//   requestAnimationFrame(update);
// }

const unrender = () => {
  if (clear) {
    Gen = 0;
    genCount.innerHTML = Gen;
    clear = false;
    play = false;
    grid = new Array(cols)
      .fill(null)
      .map(() => new Array(rows).fill(null).map(() => 0));
    uprender(grid);
    requestAnimationFrame(unrender);
  }
  if (reset) {
    reset = false;
    Gen = 0;
    genCount.innerHTML = Gen;
    grid = buildGrid();
    uprender(grid);
    requestAnimationFrame(unrender);
  }
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

const changetext = (e) => {
  savetext = e.target.value;
};
saveinput.addEventListener("change", changetext);

const playfunc = () => {
  play = !play;
  console.log("Clicky", play);
  if (play) {
    requestAnimationFrame(unrender);
  }
};

const clearfunc = () => {
  clear = true;
  requestAnimationFrame(unrender);
};

const resetfunc = () => {
  reset = true;
  requestAnimationFrame(unrender);
};

const checksave = () => {
  console.log("Saves", saves);
};

const updateSaves = (ele) => {
  const e = document.createElement("div");
  e.innerText = ele;
  e.classList.add("saveDiv");
  e.addEventListener("click", () => {
    loadSave(e);
  });
  saveCont.appendChild(e);
};

const savefunc = () => {
  newsave = {
    name: savetext,
    arr: grid,
  };
  console.log("Text: ", savetext);
  //   newsave.name = savetext;
  if (saves.length <= 0) {
    saves.push(newsave);
    updateSaves(newsave.name);
  } else {
    n = saves.filter((ele) => ele.name === newsave.name);
    if (n.length > 0) {
      alert("Saves need differt names");
    } else {
      console.log("ADDED");
      saves.push(newsave);
      updateSaves(newsave.name);
    }
  }
  savetext = "";
  saveinput.value = "";
  checksave();
};

let grid = buildGrid();
render(grid);
// buildGrid();
playBtn.addEventListener("click", playfunc);
resetBtn.addEventListener("click", () => {
  resetfunc();
});
clearBtn.addEventListener("click", clearfunc);
requestAnimationFrame(unrender);
saveBtn.addEventListener("click", savefunc);
updateSaves(saves[0].name);
// console.log(grid)
