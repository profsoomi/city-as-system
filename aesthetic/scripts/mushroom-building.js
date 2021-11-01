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
  element: '.zdog-canvas',
  dragRotate: true,
  rotate: { x: -TAU/8 },
});

var mushroom = new Zdog.Anchor({
  addTo: illo,
  translate: { y: 100 },
  rotate: { x: TAU/4 },
});

// top of mushroom head
var topMush2 = new Zdog.Hemisphere({
  addTo: mushroom,
  diameter: 100,
  translate: { z: 150 },
  stroke: 24,
  color: yellow,
});

// mushroom head
var topMush = new Zdog.Hemisphere({
  addTo: mushroom,
  diameter: 250,
  translate: { z: 44 },
  stroke: 24,
  color: yellow,
  backface: garnet,
});

//mushroom base
var mushBase = new Zdog.Cylinder({
  addTo: illo,
  diameter: 75,
  length: 75,
  translate: { y: 75 },
  stroke: false,
  color: nude,
  backface: yellow,
  rotate: { x: -TAU/4 },
});

var seedAnchor = new Zdog.Anchor({
  addTo: topMush,
});

var seedAnchor2 = new Zdog.Anchor({
  addTo: topMush2,
});

var seedZ = ( topMush.diameter + topMush.stroke ) / 2;

var seedX = ( mushBase.diameter + mushBase.stroke ) / 2;

var seedY = (topMush2.diameter + topMush2.stroke) / 2;

//Windows
new Zdog.Cylinder({
  addTo: seedAnchor,
  translate: { z: seedZ },
  length: 1,
  diameter: 50,
  stroke: 5,
  color: aqua,
  backface: darkaqua,
});

//Smaller Windows
new Zdog.Cylinder({
  addTo: seedAnchor2,
  path: [ { y: -10 }, { y: 5 } ],
  translate: { z: seedY },
  length: 1,
  diameter: 15,
  stroke: 5,
  color: aqua,
  backface: darkaqua,
});

//Door
new Zdog.Cylinder({
  addTo: illo,
  diameter: 40,
  length: 10,
  rotate: { y: -0.5 },
  translate: { x: 25, y: 75, z: seedX },
  stroke: 1,
  color: darkbrown,
  backface: brown,
});

seedAnchor.copyGraph({
  rotate: { x: 0.5 },
});
seedAnchor.copyGraph({
  rotate: { x: -0.5 },
});
seedAnchor.copyGraph({
  rotate: { x: 1 },
});
seedAnchor.copyGraph({
  rotate: { x: -1 },
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
seedAnchor2.copyGraph({
  rotate: { x: 0.7 },
});
seedAnchor2.copyGraph({
  rotate: { x: -0.7 },
});
seedAnchor2.copyGraph({
  rotate: { y: -0.7 },
});
seedAnchor2.copyGraph({
  rotate: { y: 0.7 },
});

function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();
