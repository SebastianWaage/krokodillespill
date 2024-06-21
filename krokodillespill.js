// model
const app = document.getElementById("app");
let x = 0;
let y = 0;
let z = 0;

// view
function updateView() {
  document.getElementById("app").innerHTML = /*html*/ `
<div id="z">
points: ${z}
<br><br>
<div class="tall">


<label id="x">${x}</label>
<input id="inputfield" placeholder=">=<">
<label id="y">${y}</label>
</div>
<div class="knapper">
<button id="btn1" onclick="random()">random</button>
<button id="btn2" onclick="submit()">submit</button>
<button id="btn3" onclick="btn3()">reset</button>
</div>
`;
}

//controller
startgame();
function startgame() {
  x = 1;
  y = 10;
  updateView();
}

function random() {
  x = Math.floor(Math.random() * 10) + 1;
  y = Math.floor(Math.random() * 10) + 1;
  updateView();
}

function btn3() {
  x = 1;
  y = 10;
  z = 0;
  updateView();
}
console.log();

function submit() {
  const playerInput = document.getElementById("inputfield").value;
  console.log(x);
  console.log(y);
  console.log(playerInput);

  if (playerInput === "=" && x === y) {
    z.innerHTML = ++z;
    popup.innerHTML = " N I C E ";
  } else if (playerInput === "<" && x < y) {
    z.innerHTML = ++z;
    popup.innerHTML = " N I C E ";
  } else if (playerInput === ">" && x > y) {
    z.innerHTML = ++z;
    popup.innerHTML = " N I C E ";
  } else {
    z.innerHTML = --z;
    popup.innerHTML = " I D I O T ";
  }
  updateView();
}
