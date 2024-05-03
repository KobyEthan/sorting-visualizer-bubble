canvas.width = 400;
canvas.height = 300;
const margin = 30;

const n = 20;
const array = [];
let moves = [];
const columns = [];
const spacing = (canvas.width - margin * 2) / n;
const ctx = canvas.getContext("2d");

const maxColumnHeight = 200;

init();

function init() {
  for (let i = 0; i < n; i++) {
    array[i] = Math.random();
  }
  moves = [];
  for (let i = 0; i < array.length; i++) {
    const x = i * spacing + spacing / 2 + margin;
    const y = canvas.height - margin - i * 3;
    const width = spacing - 4;
    const height = maxColumnHeight * array[i];
    columns[i] = new Column(x, y, width, height);
  }
}

function playBubbleSort() {
  moves = bubbleSort(array);
}

animate();

function bubbleSort(array) {
  const moves = [];
  do {
    var swapped = false;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        swapped = true;
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
        moves.push({ indicies: [i - 1, i], swap: true });
      } else {
        moves.push({ indicies: [i - 1, i], swap: false });
      }
    }
  } while (swapped);
  return moves;
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let changed = false;
  for (let i = 0; i < columns.length; i++) {
    changed = columns[i].draw(ctx) || changed;
  }

  if (!changed && moves.length > 0) {
    const move = moves.shift();
    const [i, j] = move.indicies;
    if (move.swap) {
      columns[i].moveTo(columns[j]);
      columns[j].moveTo(columns[i], -1);
      [columns[i], columns[j]] = [columns[j], columns[i]];
    } else {
      columns[i].jump();
      columns[j].jump();
    }
  }

  requestAnimationFrame(animate);
}
