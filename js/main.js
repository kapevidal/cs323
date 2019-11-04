$('.dropdown-menu a').click(function (e) {
    if  (window.innerWidth < 768){
      $('.navbar-collapse').collapse('toggle');
    }
  });


$('body').scrollspy({target: ".navbar", offset: 50});

$("#collapsingNavbar a").on('click', function(event) {

  if (this.hash !== "") {

    event.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });

  }
});

function navigatorFunc() {
    var txt = "";
    txt += "<p>Browser Name: " + navigator.appName + "</p>";
    txt += "<p>Browser Name: " + navigator.product + "</p>";
    txt += "<p>Browser Version: " + navigator.appVersion + "</p>";
    txt += "<p>User-agent header: " + navigator.userAgent + "</p>";
    txt += "<p>Platform: " + navigator.platform + "</p>";
    txt += "<p>Browser Language: " + navigator.language + "</p>";
    document.getElementById("navigator").innerHTML = txt;
}

function windowFunc() {
    var txt = "";
    txt += "<p>Window Inner Height: " + window.innerHeight + "</p>";
    txt += "<p>Window Inner Width: " + window.innerWidth + "</p>";

    document.getElementById("window").innerHTML = txt;
}

function screenFunc() {
    var txt = "";
    txt += "<p>Screen Width: " + screen.width + "</p>";
    txt += "<p>Screen Height: " + screen.height + "</p>";
    txt += "<p>Screen availWidth: " + screen.availWidth + "</p>";
    txt += "<p>Screen availHeight: " + screen.availHeight + "</p>";
    txt += "<p>Screen Color Depth: " + screen.colorDepth + "</p>";
    txt += "<p>Screen Pixel Depth: " + screen.pixelDepth + "</p>";

    document.getElementById("screen").innerHTML = txt;
}

function locationFunc() {
    var txt = "";
    txt += "<p>Location href: " + location.href + "</p>";
    txt += "<p>Location Hostname: " + location.hostname + "</p>";
    txt += "<p>Location Pathname: " + location.pathname + "</p>";
    txt += "<p>Location Protocol: " + location.protocol + "</p>";

    document.getElementById("location").innerHTML = txt;
}

function geolocationFunc() {
 //Check if Geolocation is supported 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 

        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var txt = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
    document.getElementById("geolocation").innerHTML = txt;
}

navigatorFunc();
windowFunc()
screenFunc();
locationFunc();
geolocationFunc();
