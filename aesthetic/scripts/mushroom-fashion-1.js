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
  element: '.mushroom-fashion-1',
  dragRotate: true,
  rotate: { x: -TAU/8 },
});

var mushroom = new Zdog.Anchor({
  addTo: illo,
  translate: { y: 90 },
  rotate: { x: TAU/4 },
});

// mushroom head
var topMush = new Zdog.Hemisphere({
  addTo: mushroom,
  diameter: 250,
  translate: { z: 44 },
  stroke: 24,
  color: 'url("#gradientA")',
  backface: garnet,
});

var seedAnchor = new Zdog.Anchor({
  addTo: topMush,
});

var seedZ = ( topMush.diameter + topMush.stroke ) / 2;

//Large Windows
new Zdog.Cylinder({
  addTo: seedAnchor,
  translate: { z: seedZ },
  length: 1,
  diameter: 50,
  stroke: 5,
  color: aqua,
  backface: darkaqua,
});

//Medium Windows
new Zdog.Cylinder({
  addTo: seedAnchor,
  translate: { z: seedZ },
  length: 1,
  diameter: 25,
  stroke: 5,
  color: pink,
  backface: pink,
});

//Small Windows
new Zdog.Shape({
  addTo: seedAnchor,
  path: [ { y: -10 }, { y: 5 } ],
  translate: { z: seedZ+10 },
  stroke: 5,
  color: lightyellow,
  backface: yellow,
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
  rotate: { x: 1.5 },
});
seedAnchor.copyGraph({
  rotate: { x: -2 },
});
seedAnchor.copyGraph({
  rotate: { x: 2 },
});
seedAnchor.copyGraph({
  rotate: { x: -1.5 },
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
seedAnchor.copyGraph({
  rotate: { y: -1.5 },
});
seedAnchor.copyGraph({
  rotate: { y: 1.5 },
});
seedAnchor.copyGraph({
  rotate: { y: -2 },
});
seedAnchor.copyGraph({
  rotate: { y: 2 },
});

function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();
