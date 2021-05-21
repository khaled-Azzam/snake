const MATRIX_SIZE = 20


let matrix = new Array(MATRIX_SIZE);
let table = document.getElementById('matrix');

for (let index = 0; index < matrix.length; index++) {
  matrix[index] = new Array(MATRIX_SIZE);
  table.innerHTML += '<tr id="row'+ index +'"></tr>';
}

for (let index = 0; index < matrix.length; index++) {
  for (let i = 0; i < matrix[index].length; i++) {
    document.getElementById('row'+index).innerHTML += '<td id="'+ index + ',' + i +'"></td>'
  }
}




