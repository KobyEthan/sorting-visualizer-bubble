canvas.width = 400;
canvas.height = 300;
const margin = 30;

const n = 20;
const array = [];

for (let i = 0; i < n; i++) {
  array[i] = Math.random();
}

const columns = [];
const spacing = (canvas.width - margin * 2) / n;
const ctx = canvas.getContext("2d");

const maxColumnHeight = 200;

for (let i = 0; i < array.length; i++) {
  const x = i * spacing + spacing / 2 + margin;
  const y = canvas.height - margin - i * 3;
  const width = spacing;
  const height = maxColumnHeight * array[i];
  columns[i] = new Column(x, y, width, height);
}

animate();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < close.length; i++) {
    cols[i].draw(ctx);
  }

  requestAnimationFrame(animate);
}
