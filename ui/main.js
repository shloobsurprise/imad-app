console.log('Loaded!');

//counter
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    
    //Create request
    var request = new XMLHttpRequest();
    //Capture response and store to variable
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE){
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

//Submit name
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //Make request and send name
    //Create request
    var request = new XMLHttpRequest();
    //Capture response and store to variable
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE){
            //Action
            if(request.status === 200){
                 //Capture and render
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i=0; i<names.length; i++){
                list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
    };
    //Make request
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET', 'http://sooraj1990.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
};