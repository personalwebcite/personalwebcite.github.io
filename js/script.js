$( document ).ready(function(){
// *********************************
// ВИДЕО ФОН
// *********************************
        var myPlayer;
        jQuery(function () {
            var options = {
                mobileFallbackImage: "https://avatanplus.com/files/resources/original/56d48a59c92b51532e3c6ee0.jpg",
                playOnlyIfVisible  : false
            };
            myPlayer = jQuery(".player").YTPlayer(options);
        });
// *********************************
// КЛИК ПО МИРОНЕНКО КИРИЛЛ
// *********************************
$("#link").click(function(){ 
	   $("#link").text('Shit the website'); 
	  });

// *********************************
// СМЕНА ЦВЕТА
// *********************************
function ColorDiv(params) {
        if (!(this instanceof ColorDiv)) {
          return new ColorDiv(params);
        }
        this.initialize.apply(this, arguments);
      }
      ColorDiv.prototype.initialize = function (params) {
        setInterval(function () {
          var letters = '0123456789ABCDEF';
          var color = '#';
          for (var i = 0; i < 6; i++) {
            color += letters.charAt(Math.floor(Math.random() * 16));
          }
          params.element.style.color = color;
        }, params.interval);
      }

      ColorDiv({
        element: document.getElementById('link'),
        interval: 1500
      });



}); 