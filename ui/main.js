// counter value needs to be incremented

var button = document.getElementById('counter');
var counter=0;
button.onclick= function()
{
    // make a request
    
    
    // capture the response
    
    // render the variable
    counter=counter+1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
}