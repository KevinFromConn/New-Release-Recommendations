var btnEl = $("search-btn");
var userInput = $(".search-content")

var searchFunction = function() {
    var searchTerm = userInput.value;
        if (searchTerm) {

        }
}

var getGenres = function(searchTerm) {
    fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds?query=' + searchTerm + '&type-genre', {
    method: 'GET',
    headers: 'Authorization: Bearer BQAyLuhUY90nHM3IzhjYtH-0f3peD8KwqzmMuwQ8Z-V6fgeX0ng5lktpa4tv9z25cKkLxJFN90kO0nf8YaLKjdw1t7LFVA8oFIEvPBjvkYZx6a9YKth5HzjNX14yR_nI1IwquXVYamWtww'
}).then(function(response) {
    response.json().then(function(data) {
        console.log(data)
    });
});
}

var getSongs = 

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    console.log(elems);
    var instances = M.Sidenav.init(elems, options);
    console.log(instances);
  });