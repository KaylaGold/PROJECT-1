 //YOUTUBE PLAYER
 var player;

 function onYouTubeIframeAPIReady() {
     player = new YT.Player('player', {
         height: '390',
         width: '640',
         videoId: 'M7lc1UVf-VE',
         events: {
             'onReady': onPlayerReady,
             'onStateChange': onPlayerStateChange
         }
     });
 }
 $("#submitButton").on("click", function (e) {
     var videoArray = [];
     e.preventDefault();
     let city = $("#input1").val();
     console.log(city);
     $.ajax({
             type: "GET",
             url: "https://app.ticketmaster.com/discovery/v2/events.json?apikey=pBf0vPvFVvEYxX2QED6w3nO42LNdzL92&size=5&city=" +
                 city,
             async: false,
             dataType: "json",

             //ADD YOUTUBE HERE
         })
         .then(function (json) {
             json._embedded.events.forEach(function (dataEvent) {
                 console.log(dataEvent.name);
                 $(".eventCol").addClass("jojo").append("Musical Artist: " + dataEvent.name +
                     "<br>");
                 $(".eventCol").append("<a href = " + dataEvent.url +
                     " > Buy Tickets Now </a>");
                 $(".eventCol").addClass("jojo").append("<img src = " + dataEvent.images[
                     0].url + " >")
                 return $.ajax({
                         type: "GET",
                         url: "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyB6IswVE48qLuJOLNaEPIulzEchVcmO8NY&q=" +
                             dataEvent.name,
                         async: false,
                         dataType: "json"
                     })
                     .then(function (youtubeData) {
                         videoArray.push(youtubeData.items[0].id.videoId);
                         $('.videoCol').append(
                             `<div><iframe id="player" type="text/html" width="200" height="190"
                             src="https://www.youtube.com/embed/${youtubeData.items[0].id.videoId}"
                             frameborder="0"></iframe></div>`
                         );

                         console.log("This is the array", videoArray)
                         console.log("length: " + videoArray.length)
                     })
             

             });



         }).done(function () {

             for (let index = 0; index < 5; index++) {
                 console.log("videos:" + videoArray[index])

             }
         });

 });
 