var socket = io();
var user= true
$('#form').submit(function () { 
    var message = $('#input').val(); 
    if (message) { 
                socket.emit('chat message', message); 
    $("#input").val(""); 
    } 
    return false;  
    })
    socket.on('chat message', function(msg) { 
        if(user==true){
            $('#Username').append(+" User");
            $('#messages').append("<li>"+msg+"</li>");
            
        } 
        if(user==false){
            $('#Username').append(+" ANother user");
            $('#messages').append("<li>"+msg+"</li>");
            
        } 
        window.scrollTo(0, document.body.scrollHeight);
        user =false 
    });