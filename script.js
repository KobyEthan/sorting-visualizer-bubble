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

for (let i = 0; i < array.length; i++) {
  const x = i * spacing + spacing / 2 + margin;
  const y = canvas.height - margin;
  const width = spacing;
  const height = (canvas.height - margin * 2) * array[i];
  columns[i] = new Column(x, y, width, height);
  columns[i].draw(ctx);
}
