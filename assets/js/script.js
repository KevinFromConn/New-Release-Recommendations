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
var genreDiv = $("#container");
var searchHistory = JSON.parse(localStorage.getItem("userInput")) || [];

var searchFunction = function (searchTerm) {
  getGenres(searchTerm);
  //   searchHistory[searchTerm] = null;
  if (!searchHistory.includes(searchTerm)) searchHistory.push(searchTerm);
  localStorage.setItem("userInput", JSON.stringify(searchHistory));
};

var getGenres = function (searchTerm) {
  fetch(
    "https://api.spotify.com/v1/recommendations/available-genre-seeds?query=",
     
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer BQAPoBGm_BvQT-MnYhVWYAHyTo-TwbExZz7M6Z7egOIpkM4NWoRq3YfRIb_4m9JqMaeSTP8qxBgj3jx5dpMtVSkqIlK2ENmBK_ePaVJdn4aV6wAMea13ZTIfYSS2FT4crPNuaSotRSNcMw",
      },
    }
  ).then(function (response) {
    response.json().then(function () {
        
    });
  });
};

var displayGenres = function () {
//   songTitle.innerHtml = "";
  var genreDisplay = $(document.createElement('div'))
  $(songTitle).append(genreDisplay)
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

  displayGenres();
}