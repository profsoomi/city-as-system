// Made with Zdog
const TAU = Zdog.TAU;
let isSpinning = true;

let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: false,
  // stop spinning when drag starts
  onDragStart: function() {
    isSpinning = true;
  },
});

let box1 = new Zdog.Box({
  addTo: illo,
  width: 80,
  height: 200,
  depth: 80,
  stroke: 1,
  color: '#D2B876',
  fill: false,
  translate: {x: -200},
  rotate: {y: TAU/6, x: TAU/16},
});

let sphere = new Zdog.Shape({
  addTo: box1,
  // no path set, default to single point
  stroke: 7,
  translate: {x: 5, y: 80},
  color: '#516752',
});

sphere.copy({
  translate: {x: 30, y: -60, z: 20},
});

sphere.copy({
  translate: {x: -30, y: -90},
  color: '#D4E5CD',
});

sphere.copy({
  translate: {x: 5, y: 10, z: 5},
  color: '#D4E5CD',
});

sphere.copy({
  translate: {x: -30, y: -40, z: 30},
});

sphere.copy({
  translate: {x: -10, y: 20, z: -20},
});

sphere.copy({
  translate: {x: 35, y: 70, z: 10},
  color: '#D4E5CD',
});

sphere.copy({
  translate: {x: 20, y: 50, z: -20},
});

sphere.copy({
  translate: {x: 30, y: -40, z: -10},
  color: '#D4E5CD',
});

sphere.copy({
  translate: {x: 15, y: 90, z: 30},
});

let box2 = new Zdog.Box({
  addTo: illo,
  width: 80,
  height: 200,
  depth: 80,
  stroke: 1,
  color: '#D2B876',
  fill: false,
  translate: {x: 0},
  rotate: {y: TAU/6, x: TAU/16},
});

let curve = new Zdog.Ellipse({
  addTo: box2,
  diameter: 70,
  quarters: 2,
  translate: { y: 85 },
  rotate: { x: TAU/5 },
  closed: false,
  color: '#FFFFFF',
  stroke: 5,
  fill: false,
});

curve.copy({
  translate: {y: 63.5},
  rotate: {x: -TAU/5, y: TAU/2},
});

curve.copy({
  translate: {y: 41.5},
  rotate: {x: TAU/5},
});

curve.copy({
  translate: {y: 20},
  rotate: {x: -TAU/5, y: TAU/2},
});

curve.copy({
  translate: {y: -2},
  rotate: {x: TAU/5},
});

curve.copy({
  translate: {y: -23.5},
  rotate: {x: -TAU/5, y: TAU/2},
});

curve.copy({
  translate: {y: -45},
  rotate: {x: TAU/5},
});

curve.copy({
  translate: {y: -67},
  rotate: {x: -TAU/5, y: TAU/2},
});



let box3 = new Zdog.Box({
  addTo: illo,
  width: 80,
  height: 200,
  depth: 80,
  stroke: 1,
  color: '#D2B876',
  fill: false,
  translate: {x: 200},
  rotate: {y: TAU/6, x: TAU/16},
});

var flower1 = new Zdog.Group({
  addTo: box3,
  translate: { z: 20 },
});

let stem1 = new Zdog.Shape({
  addTo: flower1,
  path: [
    { y: -40 }, // start at 1st point
    { y: 90 }, // line to 2nd point
  ],
  stroke: 5,
  color: '#FFFFFF',
});

let fruit = new Zdog.Shape({
  addTo: flower1,
  // no path set, default to single point
  stroke: 7,
  translate: {y: -45},
  color: '#C22C2C',
});

fruit.copy({
  translate: { z: -4, y: -40},
});

fruit.copy({
  translate: { z: 4, y: -40},
});

fruit.copy({
  translate: { x: 4, y: -40},
});

fruit.copy({
  translate: { x: -4, y: -40},
});

fruit.copy({
  translate: { z: -4, y: -35},
});

fruit.copy({
  translate: { z: 4, y: -35},
});

fruit.copy({
  translate: { x: 4, y: -35},
});

fruit.copy({
  translate: { x: -4, y: -35},
});

var flower2 = new Zdog.Group({
  addTo: box3,
  translate: { x: 20 },
});

let stem2 = new Zdog.Shape({
  addTo: flower2,
  path: [
    { y: 10 }, // start at 1st point
    { y: 90 }, // line to 2nd point
  ],
  stroke: 5,
  color: '#FFFFFF',
});

let fruit2 = new Zdog.Shape({
  addTo: flower2,
  // no path set, default to single point
  stroke: 7,
  translate: {y: 5},
  color: '#C22C2C',
});

fruit2.copy({
  translate: { z: -4, y: 10},
});

fruit2.copy({
  translate: { z: 4, y: 10},
});

fruit2.copy({
  translate: { x: 4, y: 10},
});

fruit2.copy({
  translate: { x: -4, y: 10},
});

fruit2.copy({
  translate: { z: -4, y: 15},
});

fruit2.copy({
  translate: { z: 4, y: 15},
});

fruit2.copy({
  translate: { x: 4, y: 15},
});

fruit2.copy({
  translate: { x: -4, y: 15},
});

function animate() {
  box1.rotate.y += isSpinning ? 0.01 : 0;
  box2.rotate.y += isSpinning ? 0.01 : 0;
  box3.rotate.y += isSpinning ? 0.01 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();