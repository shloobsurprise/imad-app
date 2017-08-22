console.log('Loaded!');

//counter
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    
    //Create request
    var request = new XMLHttpRequest();
    //Capture response and store to variable
    request.onreadystatechange = function(){
        if (request.ready.State === XMLHttpRequest.DONE){
            //Action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    //Make request
    request.open('GET', 'http://sooraj1990.imad.hasura-app.io/counter', true);
    request.send(null);
};