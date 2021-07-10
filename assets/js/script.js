var btnEl = $("search-btn");
var userInput = $(".search-content");
var songTitle = $("#song-title")
var searchHistory = json.parse(localStorage.getItem("userInput")) || [];

var searchFunction = function() {
    var searchTerm = userInput.value;
        if (searchTerm) {
            getGenres(searchTerm);
            searchHistory[searchTerm] = null;
            localStorage.setItem("userInput", json.stringify(searchHistory))
        }
}

var getGenres = function(searchTerm) {
    fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds?query=' + searchTerm + '&type-genre', {
    method: 'GET',
    headers: 'Authorization: Bearer BQAWH96c-fu1BQBt2HcvZxF4iIxcSKJ1VvTOBlvOvZosStIIMOPumpWbhCJW-1u07CEPG3grALlJm5j3A1tXr1glzF6csJgVadhlYAlRrwvZT_nNgpSswENWvoFmyx2Hw2wNr4gGxV484A'
}).then(function(response) {
    response.json().then(function(data) {
        console.log(data)
    });
});
}
var displayGenres = function(spotifyData) {
    songTitle.innerHtml = "";
    for (let i = 0; i < spotifyData.length; i++) {
        songTitle.innerHtml = "";
        
    }
} 

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    console.log(elems);
    var instances = M.Sidenav.init(elems, options);
    console.log(instances);
  });

var searchBtn = document.querySelector("#search-btn");
var searchBar = document.querySelector("#search-bar");

searchBtn.addEventListener("click", function() {
    

})
