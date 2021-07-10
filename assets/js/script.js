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
    "https://api.spotify.com/v1/browse/new-releases?query=" +
      searchTerm +
      "&type=genre",
    {
      method: "GET",
      headers:{
        "Authorization": "Bearer BQARGdUEzGHnZOIrVTdv9E834mzIPnud6A0JGmgG3xxG_DUDPWOgTRoMJIEUCLxP-y11m3_oneihrkdMYuL1f9FqTCD9kZhtrWZpXLGUcZuGXvq_E8JFNYypBlbjkGhBxCk3KBWawKVi7g"
      }
    }
  ).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
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
