let isPlaying = true;
let row = (column = 5);
let snackLength = 1;

class point {
  row = 0;
  column = 0;
}

let q = new Queue();

function move(row, column) {
  let r = document.getElementById(row + "," + column);
  r.style.background = "blue";
  r.style.borderColor = "blue";
}
function update(progress) {
  // Update the state of the world for the elapsed time since last render
}

let goRight = true;
let goLeft = false;
let goUp = false;
let goDown = false;

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "d":
      if (goLeft) return;
      goRight = true;
      goDown = false;
      goLeft = false;
      goUp = false;
      break;
    case "a":
      if (goRight) return;
      goLeft = true;
      goRight = false;
      goDown = false;
      goUp = false;
      break;
    case "s":
      if (goUp) return;
      goDown = true;
      goLeft = false;
      goRight = false;
      goUp = false;

      break;
    case "w":
      if (goDown) return;
      goUp = true;
      goLeft = false;
      goRight = false;
      goDown = false;
      break;
  }
});

function generatePoint() {
  let obRow, obColumn, obstacle;
  do {
    obRow = Math.floor(Math.random() * 20);
    obColumn = Math.floor(Math.random() * 20);
    obstacle = document.getElementById(obRow + "," + obColumn);
  } while (obstacle.style.background === "blue");

  obstacle.style.background = "green";
  obstacle.style.borderColor = "green";
}

function getCelColor(cell) {
  let obstacle = document.getElementById(cell.row + "," + cell.column);
  return obstacle.style.background === "blue";
}

generatePoint();

function draw() {
  let p = new point();
  p.row = row;
  p.column = column;
  if (row < 0 || row > 19 || column < 0 || column > 19) return false;

  q.enqueue(p);
  if (goRight) {
    column++;
  } else if (goLeft) {
    column--;
  } else if (goDown) {
    row++;
  } else if (goUp) {
    row--;
  }

  let position = new point();
  position.row = row;
  position.column = column;

  if (
    document.getElementById(row + "," + column).style.background === "green"
  ) {
    ++snackLength;
    generatePoint();
  }

  move(row, column);

  if (q.size() > snackLength) {
    let b = q.dequeue();
    let bb = document.getElementById(b.row + "," + b.column);
    bb.style.background = "red";
    bb.style.borderColor = "red";
  }

  return true;
}

let timer = 0;

function loop(timestamp) {
  var progress = timestamp - lastRender;
  timer++;

  update(progress);
  if (timer >= 20) {
    if (!draw()) return;
    timer = 0;
  }

  lastRender = timestamp;
  window.requestAnimationFrame(loop);
}

var lastRender = 0;
window.requestAnimationFrame(loop);
