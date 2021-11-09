//Making the monarchy box bigger

const Bbox = document.getElementById('box');
const titleBox1 = document.getElementById('titlebox');
const infoBox1 = document.getElementById('infobox1');
const titleBox2 = document.getElementById('titlebox2');
const infoBox2 = document.getElementById('infobox2');
const titleBox3 = document.getElementById('titlebox3');
const infoBox3 = document.getElementById('infobox3');
const titleBox4 = document.getElementById('titlebox4');
const infoBox4 = document.getElementById('infobox4');
const titleBox5 = document.getElementById('titlebox5');
const info_Box5 = document.getElementById('infobox5');
Bbox.addEventListener('click', biggerbox);
titleBox1.addEventListener('click', openBox1);
titleBox2.addEventListener('click', openBox2);
titleBox3.addEventListener('click', openBox3);
titleBox4.addEventListener('click', openBox4);
titleBox5.addEventListener('click', openBox5);
window.onload = function(){Bbox.style.marginLeft = '22%'};
window.onload = function(){infoBox1.style.visibility = 'hidden'};
window.onload = function(){infoBox2.style.visibility = 'hidden'};
window.onload = function(){infoBox3.style.visibility = 'hidden'};
window.onload = function(){infoBox4.style.visibility = 'hidden'}
window.onload = function(){info_Box5.style.visibility = 'hidden'};


function biggerbox(){
    if (Bbox.style.marginLeft == '22%'){
        Bbox.style.width = '90%';
        Bbox.style.height = '100%';
        Bbox.style.marginLeft = '3%';
        Bbox.style.marginTop = '-15%';  
        Bbox.style.fontSize = '200%';
        console.log('worked')
       
    } else {
        Bbox.style.fontSize = '15px';
        Bbox.style.marginLeft = '22%';
        Bbox.style.width = '700px';
        Bbox.style.marginTop = '0%'
        console.log('it');
    }
}

function openBox1(){
    console.log('worked');
    if(infoBox1.style.visibility == 'hidden'){
        infoBox1.style.visibility = 'visible';
    } else {
        infoBox1.style.visibility = 'visible';
    }
}

function openBox2(){
    console.log('worked');
    if(infoBox2.style.visibility == 'hidden'){
        infoBox2.style.visibility = 'visible';
    } else {
        infoBox2.style.visiblity = 'visible';
    }
}

function openBox3(){
    console.log('worked');
    if(infoBox3.style.visibility == 'hidden'){
        infoBox3.style.visibility = 'visible';
    } else {
        infoBox3.style.visibility = 'visible';
    }
}

function openBox4(){
    console.log('worked');
    if(infoBox4.style.visibility == 'hidden'){
        infoBox4.style.visibility = 'visible';
    } else {
        infoBox4.style.visibility = 'visible';
    }
}

function openBox5(){
    console.log('worked');
    if(info_Box5.style.visibility == 'hidden'){
        infoBox5.style.visibility = 'visible';
    } else {
        info_Box5.style.visibility = 'visible';
    }
}