class Automata3D {
  constructor(input, maxSize = 4) {
    this.grid = new Map();
    this._grid = new Map();
    this._size = input[0].length;
    this.maxSize = maxSize;
    this.init(input);
  }

  init(input) {
    for (let y = 0; y < input.length; y++) {
      for (let x = 0; x < input[y].length; x++) {
        this.setPosition(
        x - Math.floor(this.size / 2),
        y - Math.floor(this.size / 2),
        0,
        input[y][x]);

      }
    }

    this.commit();
  }

  get size() {
    return this._size;
  }

  commit() {
    for (let [key, value] of this._grid) {
      this.grid.set(key, value);
    }
    if (this._size < this.maxSize) {
      this._size += 2;
    }
  }

  setPosition(x, y, z, val) {
    this._grid.set(this.toIndex(x, y, z), val);
  }

  getPosition(x, y, z) {
    const index = this.toIndex(x, y, z);
    if (this.grid.has(index)) {
      return this.grid.get(index);
    }
    return ".";
  }

  getAdjacent(x, y, z) {
    const adjacent = [];
    for (let zz = z - 1; zz <= z + 1; zz++) {
      for (let yy = y - 1; yy <= y + 1; yy++) {
        for (let xx = x - 1; xx <= x + 1; xx++) {
          if (xx === x && yy === y && zz === z) continue;
          adjacent.push(this.getPosition(xx, yy, zz));
        }
      }
    }
    return adjacent;
  }

  countAdjacent(x, y, z, type) {
    return this.getAdjacent(x, y, z).filter(c => c === type).length;
  }

  countTotal(type) {
    return Array.from(this.grid.values()).filter(c => c === type).length;
  }

  toIndex(x, y, z) {
    return `${x}:${y}:${z}`;
  }

  fromIndex(index) {
    return index.split(":").map(x => parseInt(x, 10));
  }}


const automata = new Automata3D([".#.", "..#", "###"]);

let i = 0;
function step() {
  for (let z = automata.size * -1; z <= automata.size; z++) {
    for (let y = automata.size * -1; y <= automata.size; y++) {
      for (let x = automata.size * -1; x <= automata.size; x++) {
        const currentCell = automata.getPosition(x, y, z);
        const activeCount = automata.countAdjacent(x, y, z, "#");
        if (currentCell === "#") {
          if (![2, 3].includes(activeCount)) {
            automata.setPosition(x, y, z, ".");
          }
        } else {
          if (activeCount === 3) {
            automata.setPosition(x, y, z, "#");
          }
        }
      }
    }
  }
  automata.commit();
  i++;
}

const illo = new Zdog.Illustration({
  element: ".color-palette",
  dragRotate: true });


const size = 20;

const dots = new Map();

const colours = [
"#8CC0A7",
"#FFACAC",
"#D04623FF",
"#B6D5DE",
"#981526",
"#FDF6EA"];


setInterval(() => {
  step();
  automata.grid.forEach((cell, index) => {
    const [x, y, z] = automata.fromIndex(index);
    const colour = colours[Math.abs(x + y + z) % colours.length];
    if (!dots.has(index) && cell === "#") {
      const shape = new Zdog.Shape({
        addTo: illo,
        stroke: 0,
        color: colour,
        translate: {
          x: x * size,
          y: y * size,
          z: z * size } });



      dots.set(index, shape);
    }
    if (dots.has(index)) {
      gsap.to(dots.get(index), {
        duration: 0.5,
        stroke: cell === "#" ? size * 0.9 : 0,
        ease: cell === "#" ? "elastic" : "power4.in",
        delay: cell === "#" ? 0.4 : 0 });

    }
  });
}, 1000);

function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}

animate();