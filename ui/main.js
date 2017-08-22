console.log('Loaded!');

//counter
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    
    //Request to end point
    
    //Capture response and store to variable
    
    //Render the variable in correct span
    counter = counter +1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};