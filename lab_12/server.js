var express = require('express');
var app = express();

 var SpotifyWebApi= require("spotify-web-api-node");
 app.use(express.static('public'))
var spotifyApi=new SpotifyWebApi({
    clientId: "528b3177671f4f2dbff264a5e1660369",
    clientSecret: "d59140c11da548529cf68b8061296e71"
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
