// Made with Zdog

var yellow = '#ffd11a';
var lightyellow = '#ffeb99';
var aqua = '#daeff5';
var darkaqua = '#9bd4e4';
var pink = '#FFACAC';
var nude = '#fcebca'
var brown = '#804000';
var darkbrown = '#4d2600';
var garnet = '#C25';
const TAU = Zdog.TAU;

var illo = new Zdog.Illustration({
  element: '.mushroom-fashion-2',
  dragRotate: true,
  rotate: { x: -TAU/8 },
});

var mushroom = new Zdog.Anchor({
  addTo: illo,
  translate: { y: 100 },
  rotate: { x: TAU/4 },
});

// mushroom head
var topMush = new Zdog.Hemisphere({
  addTo: mushroom,
  diameter: 100,
  translate: { z: 175 },
  stroke: 24,
  color: brown,
  backface: darkaqua,
});

//mushroom base
var mushBase = new Zdog.Cylinder({
  addTo: illo,
  diameter: 50,
  length: 40,
  translate: { y: -45 },
  stroke: false,
  color: aqua,
  backface: darkaqua,
  rotate: { x: -TAU/4 },
});

// large mushroom head
var bigMush = new Zdog.Hemisphere({
  addTo: mushBase,
  diameter: 300,
  stroke: 24,
  color: brown,
  backface: darkaqua,
  translate: { z: 175 },  
  rotate: { x: -TAU/2 },
});

var seedAnchor = new Zdog.Anchor({
  addTo: topMush,
});

var seedAnchor2 = new Zdog.Anchor({
  addTo: bigMush,
});

var seedZ = ( topMush.diameter + topMush.stroke ) / 2;

var seedY = ( bigMush.diameter + bigMush.stroke) / 2;

//Seeds
new Zdog.Cylinder({
  addTo: seedAnchor,
  path: [ { y: -1 }, { y: 5 } ],
  translate: { z: seedZ },
  length: 2,
  diameter: 10,
  stroke: 2,
  color: aqua,
  backface: darkaqua,
});

//Seeds2
new Zdog.Cylinder({
  addTo: seedAnchor2,
  path: [ { x: -1 }, { y: 5 } ],
  translate: { z: seedY-10 },
  length: 2,
  diameter: 50,
  stroke: 1,
  color: aqua,
  backface: darkaqua,
});

//seedAnchor copies
seedAnchor.copyGraph({
  rotate: { x: 0.6 },
});
seedAnchor.copyGraph({
  rotate: { x: -1.1 },
});
seedAnchor.copyGraph({
  rotate: { x: 1.1 },
});
seedAnchor.copyGraph({
  rotate: { x: -0.6 },
});
seedAnchor.copyGraph({
  rotate: { y: -0.5 },
});
seedAnchor.copyGraph({
  rotate: { y: 0.5 },
});
seedAnchor.copyGraph({
  rotate: { y: -1 },
});
seedAnchor.copyGraph({
  rotate: { y: 1 },
});

//seedAnchor2 copies
seedAnchor2.copyGraph({
  rotate: { x: 0.6 },
});
seedAnchor2.copyGraph({
  rotate: { x: -1.1 },
});
seedAnchor2.copyGraph({
  rotate: { x: 1.1 },
});
seedAnchor2.copyGraph({
  rotate: { x: -0.6 },
});
seedAnchor2.copyGraph({
  rotate: { y: -0.5 },
});
seedAnchor2.copyGraph({
  rotate: { y: 0.5 },
});
seedAnchor2.copyGraph({
  rotate: { y: -1 },
});
seedAnchor2.copyGraph({
  rotate: { y: 1 },
});

function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();