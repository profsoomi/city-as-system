//Making the monarchy box bigger

const Bbox = document.getElementById('box');
Bbox.addEventListener('click', biggerbox);
window.onload = function(){Bbox.style.marginLeft = '22%'};
function biggerbox(){
    if (Bbox.style.marginLeft == '22%'){
        Bbox.style.width = '90%';
        Bbox.style.height = '100%';
        Bbox.style.marginLeft = '3%';
        Bbox.style.marginTop = '-15%';  
        Bbox.style.fontSize = '200%';
        console.log('worked')
       
    } else {
        Bbox.style.fontSize = '25px';
        Bbox.style.marginLeft = '22%';
        Bbox.style.width = '700px';
        Bbox.style.marginTop = '0%'
        console.log('it');
    }
}