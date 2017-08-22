console.log('Loaded!');

//changing main text
var element = document.getElementById('main-text');
element.innerHTML = "New value";

//moving image
var img = document.getElementById('img');
img.onclick = function(){
    img.style.marginLeft='100px';
}