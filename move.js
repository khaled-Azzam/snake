
let isPlaying = true;
let row = column = 5;
let snackLength = 2;

class point {
    row= 0
    column= 0
}

let q = new Queue();

function move(row, column) {
        let r = document.getElementById(row + ',' + column);
        r.style.background = 'blue';
        r.style.borderColor = 'blue';
}
function update(progress) {
// Update the state of the world for the elapsed time since last render
}

let goRight = false;
let goLeft = false;
let goUp = false;
let goDown = false;

document.addEventListener('keydown', (e) => {
    switch(e.key)
    {
        case 'd':
            
            goRight = true;
            goDown = false;
            goLeft = false;
            goUp = false;
            break;
        case 'a' :
            goLeft = true;
            goRight = false;
            goDown = false;
            goUp = false;
            break;
        case 's' :
            goDown = true;
            goLeft = false;
            goRight = false;
            goUp = false;

            break;
        case 'w' :
            goUp = true;
            goLeft = false;
            goRight = false;
            goDown = false;
            break;
    }
});

function generatePoint() {
    let obRow = Math.floor(Math.random() * 20)
    let obColumn = Math.floor(Math.random() * 20)
    let obstacle = document.getElementById(obRow + ',' + obColumn);

    obstacle.style.background = 'green';
    obstacle.style.borderColor = 'green';
}

generatePoint();

function draw() {
    let p = new point();
    p.row = row;
    p.column = column;
    q.enqueue(p);
    if (goRight && column < 19) {
        column++;
    }
    else if (goLeft && column > 0) {
        column--;
    }
    else if (goDown && row < 19) {
        row++;
    }
    else if (goUp && row > 0) {
        row--;
    }

    let position = new point();
    position.row = row;
    position.column = column;

    if (document.getElementById(row +',' + column).style.background === 'green') {
        ++snackLength;
        generatePoint();
    } 

        move(row, column);
    
    
    if (q.size() > snackLength) {
        let b = q.dequeue();
        let bb = document.getElementById(b.row + ',' + b.column);
        bb.style.background = 'red';
        bb.style.borderColor = 'red';
    }
}

let timer = 0;

function loop(timestamp) {
    var progress = timestamp - lastRender
    timer ++;


    update(progress)
    if (timer >= 20) {
        draw()
        timer = 0;
    }
    
    lastRender = timestamp
    window.requestAnimationFrame(loop)
}
var lastRender = 0
window.requestAnimationFrame(loop)



