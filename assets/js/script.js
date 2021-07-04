var endpoint = 'https://api.spotify.com/v1/recommendations';
var artists = '6sFIWsNpZYqfjUpaCgueju';
var danceability = encodeURIComponent('0.9');

var getAppleMusic = function() {
    var apiUrl = 'https://api.music.apple.com/v1/catalog/{storefront}/genres'

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                displayGenres(genres);
            });
        } else {
            return
        }
    })
    .catch(function(error) {
        return
    });
};

var getSpotify = function() {
    var apiUrl = '"https://api.spotify.com/v1/recommendations'

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                displayGenres(genres);
            });
        } else {
            return
        }
    })
    .catch(function(error) {
        return
    });
};