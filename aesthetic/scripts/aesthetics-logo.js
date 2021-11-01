// Made with Zdog

var yellow = '#ED0';
var lightpink = '#ffd1d1';
var pink = '#FFACAC';
var aqua = '#8CC0A7'
var darkaqua = '#519474';
var garnet = '#C25';
const TAU = Zdog.TAU;

var illo = new Zdog.Illustration({
  element: '.aesthetics-logo',
  dragRotate: true,
  rotate: { x: -TAU/8 },
});

var mushroom = new Zdog.Anchor({
  addTo: illo,
  translate: { y: 24 },
  rotate: { x: TAU/4 },
});

// mushroom head
var topMush = new Zdog.Hemisphere({
  addTo: mushroom,
  diameter: 96,
  translate: { z: 44 },
  stroke: 24,
  color: 'url("#gradientA")',
});

//mushroom base
var mushBase = new Zdog.Cylinder({
  addTo: illo,
  diameter: 50,
  length: 60,
  stroke: false,
  color: aqua,
  backface: darkaqua,
  rotate: { x: -TAU/4 },
});

var seedAnchor = new Zdog.Anchor({
  addTo: topMush,
});

var seedZ = ( topMush.diameter + topMush.stroke ) / 2 + 1;
// seed
new Zdog.Shape({
  addTo: seedAnchor,
  path: [ { y: -3 }, { y: 3 } ],
  translate: { z: seedZ },
  stroke: 8,
  color: lightpink,
});

seedAnchor.copyGraph({
  rotate: { x: 0.6 },
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

function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();