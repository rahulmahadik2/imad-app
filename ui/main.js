// counter value needs to be incremented

var button = document.getElementById('counter');
button.onclick= function(){
    // create a request object
    
    var request= new XMLHttpRequest();
    // capture the response
    request.onreadystatechange = function(){
      if (request.readystate === XMLHttpRequest.DONE){
       if(request.status===200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
       }    
      }
    };
    
    
    // render the variable
        request.open('GET', 'https://rahulmahadik2.imad.hasura-app.io/',true);
        request.send(null);
};