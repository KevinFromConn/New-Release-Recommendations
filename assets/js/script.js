
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    console.log(elems)
    var instances = M.Sidenav.init(elems, options);
    console.log(instances)
  });

console.log("dwhajbsdh")

var getAppleMusic = function() {
    var apiUrl = 'https://api.music.apple.com/v1/catalog/us/genres&q=' + userInput + '&appid='

// var getAppleMusic = function() {
//     var apiUrl = 'https://api.music.apple.com/v1/catalog/us/genres&q=' + userInput + '&appid='

//     fetch(apiUrl).then(function(response) {
//         if (response.ok) {
//             response.json().then(function() {
//                 displayGenres(genres);
//             });
//         } else {
//             return
//         }
//     })
//     .catch(function(error) {
//         return
//     });
// };

// const endpoint = "https://api.spotify.com/v1/recommendations";
// const artists = '6sFIWsNpZYqfjUpaCgueju';
// const danceability = encodeURIComponent('0.9');

// fetch(`${endpoint}?seed_artists=${artists}&target_danceability=${danceability}`, {
//   method: "GET",
//   headers: {
//       Authorization: `Bearer ${userAccessToken}`
//   }
// })
// .then(response => response.json())
// .then(({tracks}) => {
//   tracks.forEach(item => {
//     console.log(`${item.name} by ${item.artists[0].name}`);
//   })
// })

var searchBtn = document.querySelector("#search-btn");
var searchBar = document.querySelector("#search-bar");

searchBtn.addEventListener("click", function() {
    

})