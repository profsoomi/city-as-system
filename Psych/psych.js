window.human = false;

var canvasEl = document.querySelector('.spores');
var ctx = canvasEl.getContext('2d');
var numberOfParticules = 100;
var pointerX = 0;
var pointerY = 0;
var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
var colors = ['#FC89BA','#FF74AF','#97F2B1','#FF7D2E']; 

function setCanvasSize() {
  canvasEl.width = window.innerWidth *2;
  canvasEl.height = window.innerHeight *2;
  canvasEl.style.width = window.innerWidth + 'px';
  canvasEl.style.height = window.innerHeight + 'px';
  canvasEl.getContext('2d').scale(2, 2);
}

function updateCoords(e) {
  pointerX = e.clientX || e.touches[0].clientX;
  pointerY = e.clientY || e.touches[0].clientY;
}

function setParticuleDirection(p) {
  var angle = anime.random(0, 360) * Math.PI / 180;
  var value = anime.random(50, 180);
  var radius = [-1, 1][anime.random(0, 1)] * value;
  return {
    x: p.x + radius / Math.cos(angle),
    y: p.y + radius / Math.sin(angle)
  }
}

function createParticule(x,y) {
  var p = {};
  p.x = x;
  p.y = y;
  p.color = colors[anime.random(0, colors.length - 1)];
  p.radius = anime.random(16, 32);
  p.endPos = setParticuleDirection(p);
  p.draw = function() {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
    ctx.fillStyle = p.color;
    ctx.fill();
  }
  return p;
}

function createCircle(x,y) {
  var p = {};
  p.x = x;
  p.y = y;
  p.color = '#FFF';
  p.radius = 0.01;
  p.alpha = 0;
  p.lineWidth = 6;
  p.draw = function() {
    ctx.globalAlpha = p.alpha;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
    ctx.lineWidth = p.lineWidth;
    ctx.strokeStyle = p.color;
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
  return p;
}

function renderParticule(anim) {
  for (var i = 0; i < anim.animatables.length; i++) {
    anim.animatables[i].target.draw();
  }
}

function animateParticules(x, y) {
  var circle = createCircle(x, y);
  var particules = [];
  for (var i = 0; i < numberOfParticules; i++) {
    particules.push(createParticule(x, y));
  }
  anime.timeline().add({
    targets: particules,
    x: function(p) { return p.endPos.x; },
    y: function(p) { return p.endPos.y; },
    radius: 0.001, //changing size of the circles
    duration: anime.random(1200, 1800),
    easing: 'easeOutExpo',
    update: renderParticule
  })
    .add({
    targets: circle,
    radius: anime.random(80, 160),
    lineWidth: 0,
    alpha: {
      value: 0,
      easing: 'linear',
      duration: anime.random(600, 800),  
    },
    duration: anime.random(1200, 1800),
    easing: 'easeOutExpo',
    update: renderParticule,
    offset: 0
  });
}

var render = anime({
  duration: Infinity,
  update: function() {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  }
});

document.addEventListener(tap, function(e) {
  window.human = true;
  render.play();
  updateCoords(e);
  animateParticules(pointerX, pointerY);
}, false);

var centerX = window.innerWidth /2;
var centerY = window.innerHeight / 2;

function autoClick() {
  if (window.human) return;
  animateParticules(
    anime.random(centerX-50, centerX+50), 
    anime.random(centerY-50, centerY+50)
  );
  anime({duration: 100}).finished.then(autoClick);
}

autoClick();
setCanvasSize();
window.addEventListener('resize', setCanvasSize, false);

//Audio Code

var songs = {
  dog: new Howl({
    src: 'audio/Baby_Tears_Blues.mp3'
    // html5:true,
  }),
  cake: new Howl({
    src: 'audio/Walk_a_Begonia.mp3'
  }),
  type: new Howl({
    src: 'audio/Swingin_Spathiphyllums.mp3'
  }),
  history: new Howl({
    src: 'audio/Symphony_Spider_Plant.mp3'
  }),
  logo: new Howl({
    src: 'audio/Plantasia.mp3',
    
  }),
};


document.getElementById("dog").onclick = function() {
  const dog = document.getElementById("dog");
  dog.classList.toggle("isPlaying");
  console.log('dogisplaying');
  if(dog.className ==='isPlaying'){
    // getAudioContext().resume();
  songs.cake.pause();
  songs.logo.pause();
  songs.history.pause();
  songs.type.pause();
  songs.dog.play();
  }else{
    songs.dog.pause();
  }
  


  if (document.getElementById("barb").style.opacity = "0%") {
    document.getElementById("barb").style.opacity = "100%";
  } else {
    document.getElementById("barb").style.opacity = "0%";
  }
}

document.getElementById("cake").onclick = function() {
  const cake = document.getElementById("cake");
  cake.classList.toggle("isPlaying");
  console.log('cakeisplaying');
  if(cake.className === 'isPlaying'){
  songs.dog.pause();
  songs.logo.pause()
  songs.history.pause();
  songs.type.pause();
  songs.cake.play();
  } else{
    songs.cake.pause();
  }
  
}

document.getElementById("type").onclick = function() {
  const type = document.getElementById("type");
  type.classList.toggle("isPlaying")
  if(type.className === 'isPlaying'){
    songs.dog.pause();
    songs.cake.pause();
    songs.logo.pause();
    songs.history.pause();
    songs.type.play();
  } else{
    songs.type.pause();
  }

}

document.getElementById("history").onclick = function() {
  const history = document.getElementById("history");
  history.classList.toggle("isPlaying")
  if(history.className === 'isPlaying'){
    // console.log('isplaying');
    songs.dog.pause();
    songs.cake.pause();
    songs.logo.pause();
    songs.type.pause();
    songs.history.play();
  } else{
    songs.history.pause();
  }
 
}

document.getElementById("logo").onclick = function() {
  const logo = document.getElementById("logo");
  logo.classList.toggle("isPlaying")
  if(logo.className === 'isPlaying'){
    // console.log('isplaying');
    songs.dog.pause();
    songs.cake.pause();
    songs.logo.play();
    songs.type.pause();
    songs.history.pause();
  } else{
    songs.logo.pause();
  }
}

var dog=document.getElementById("dog");
var cake=document.getElementById("cake");
var popup=document.getElementById("popup");
var popupContent=document.getElementById("popupContent");
var closeButton=document.getElementById("closeButton");


dog.addEventListener("click", showPopUp);
cake.addEventListener("click", showPopUp);
closeButton.addEventListener("click",closePopUp);

dog.myParam="Society functions because the plants are in control. All living beings live joyously because the plants allow them to. They are happy to serve the mushrooms because they are right in their desires and understand peace in ways other living beings cannot. Those being dosed are allowed a life of laying, lounging, resting, living, laughing, and creating because the mushrooms have made it so. Jov is one of the very first hybrids to be born. Mushrooms were forced to dose beings to make them happy, docile, calm and peaceful in a time when our society was violent and chaotic. In this state, each being reacts differently. When fairies are dosed they meet with their predators and induce-dose them, turning them into joyful creatures. Every species and being, in one way or another, comes in contact with each other, which results in mass dosing. There are never any side effects of Jov. Jov helps one realise their deepest desires and create meaningful and beautiful art and have harmonious interactions with other living beings.Prod works as a stimulant. It engages one's brain cells and makes them productive and energetic. Creativity and joy can be honed into a project to create tangible products. Mir makes one see what the naked eye cannot. This allows living beings to share a mind with the mushrooms controlling them for a several hour period, to see what needs to be helped and ";

cake.myParam= "Recipes: <p> Our favourite recipes with our favourite fungi! These recipes have been crafted in a way to maximise your experience. </p> <p> Jov cupcakes -  </p> 1tsp of minced Jov <p> 1 tbsp of Cina bark </p> <p>1 cup Moss wheat </p>";

function showPopUp(evt){
popupContent.innerHTML=evt.currentTarget.myParam;

console.log(popup.style.display);

if(popup.style.display=="none"){
  popup.style.display="block";

// }else{
//   popup.style.display="none";
}
}

function closePopUp(){
  popup.style.display="none";
}

//inspired by Julian Garnier's "Fireworks" on codepen using anime.js 
//https://codepen.io/juliangarnier/pen/gmOwJX