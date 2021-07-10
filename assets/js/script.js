var options = ["New Releases", "Music News", "My Account"];

console.log(M.Sidenav);

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.sidenav').sidenav();
});


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    console.log(elems)
    var instances = M.Sidenav.init(elems, options);
    console.log(instances)
  });

console.log("dwhajbsdh")

