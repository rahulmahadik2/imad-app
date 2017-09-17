// counter value needs to be incremented

var button = document.getElementById('counter');
counter=0;
button.onclick= function()
{
    // make a request
    
    
    // capture the response
    
    // render the variable
    counter=counter++;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
}