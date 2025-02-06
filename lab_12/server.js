var express = require('express');
var app = express();
 app.use(express.static('public'))
 app.get('/'
, function(req, res){
 res.send("Hello world! by express");
});
spotifyApi.clientCredentialsGrant().then( 
    function (data) { 
    console.log('The access token expires in ' + data.body['expires_in']); 
    console.log('The access token is ' + data.body['access_token']); 
    // Save the access token so that it's used in future calls 
    spotifyApi.setAccessToken(data.body['access_token']);

    },
    function (err) { 
        console.log( 
        'Something went wrong when retrieving an access token', 
        err.message 
                ); 
        });
        async function getTracks(searchterm, res) { 
            spotifyApi.searchTracks(searchterm) 
            .then(function (data) { 
            res.send(JSON.stringify(data.body)); 
            }, function (err) { 
            console.error(err); 
            }); 
            }
            
app.listen(8080);
