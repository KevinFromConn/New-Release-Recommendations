var options = ["New Releases", "Music News", "My Account"];

// console.log(M.Sidenav);

// document.addEventListener("DOMContentLoaded", function () {
//   var elems = document.querySelectorAll(".sidenav");
//   var instances = M.Sidenav.init(elems, options);
// });

// Or with jQuery

$(document).ready(function () {
  $(".sidenav").sidenav();
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
//   console.log(elems);
  var instances = M.Sidenav.init(elems, options);
//   console.log(instances);
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

var getGenres = function () {
  fetch(
    "https://api.spotify.com/v1/recommendations/available-genre-seeds?query=",
     {
      method: "GET",
      headers: {
        Authorization:
          "Bearer BQD__SF9CubTNahDUppd-Ji4vb0rZEeinkYnB70l5Eq0EP1M2KEvw1WlDNaxcxdi0J8BXRkJfdkYY2nH7UulPh69wctH53Hn_Vpa5OY24nMLYfRyEtUsDO2Njbejb6kZyXxNN9qjg0U9tQ",
      },
    }
  ).then(function(response) {
    response.json().then(function() {
        
    });
  });
};

var displayGenres = function () {
  userInput.innerHtml = "";
  var genreDisplay = $(document.createElement('div'))
  var displayDiv = $(genreDisplay.attr("container"))
  
  $(displayDiv).append(genreDisplay)
  };

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  console.log(elems);
  var instances = M.Sidenav.init(elems, options);
  console.log(instances);
});

function submitForm(event) {
  event.preventDefault();
  console.log(userInput.val());
  searchFunction(userInput.val());

  getGenres();
  displayGenres();
}