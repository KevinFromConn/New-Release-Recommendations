var options = ["New Releases", "Music News", "My Account"];

console.log(M.Sidenav);

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
  $(".sidenav").sidenav();
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  console.log(elems);
  var instances = M.Sidenav.init(elems, options);
  console.log(instances);
});

var btnEl = $("search-btn");
var userInput = $("#search-content");
var songTitle = $("#song-title");
var searchItem = $("#search-item");
var searchHistory = JSON.parse(localStorage.getItem("userInput")) || [];

var searchFunction = function (searchTerm) {
  getGenres(searchTerm);
  //   searchHistory[searchTerm] = null;
  if (!searchHistory.includes(searchTerm)) searchHistory.push(searchTerm);
  localStorage.setItem("userInput", JSON.stringify(searchHistory));
};

var getGenres = function (searchTerm) {
  fetch(
    "https://api.spotify.com/v1/recommendations/available-genre-seeds?query=" +
      searchTerm +
      "&type=genre",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer BQCRdSKE316spKJxC7vgdloM1QVb2AjqpIOLM6lMB_BT9TkD1UxwYd7iHbNlqrY3zq79M1viNFzLqMrHfbTeOmXx2r0T71Oh1S9KCdyNF_W5E6lGcsNJDnSPCzSaQZYmTgES552zNfMDaQ",
      },
    }
  ).then(function (response) {
    response.json().then(function () {
      var genres = userInput.value;

      for (let i = 0; i < genres.length; i++) {
        var userGenre = genres[i];
      }
      console.log(userGenre);
    });
  });
};

var displayGenres = function (spotifyData) {
  songTitle.innerHtml = "";
  for (let i = 0; i < spotifyData.length; i++) {
    songTitle.innerHtml = "";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  //   console.log(elems);
  var instances = M.Sidenav.init(elems, options);
  console.log(instances);
});

function submitForm(event) {
  event.preventDefault();
  console.log(userInput.val());
  searchFunction(userInput.val());
}