/*

function go_get() {
  var base_url = 'http://www.youtube.com/embed?listType=search&list=';
  var search_field = document.getElementById('yourtextfield').value;
  var target_url = base_url + search_field;
  var ifr = document.getElementById('youriframe');
  ifr.src = target_url;
  return false;
}

*/

///////////////////////////


$("#search").on("click", function (event) {
  event.preventDefault();

  // This line grabs the input from the text box
  let input = $("#vid-input").val().trim()


  // Constructing a URL to search Giphy for the name of the person who said the quote
  let queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyB6IswVE48qLuJOLNaEPIulzEchVcmO8NY&q=ladygaga";

  // Performing our AJAX GET request
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After the data comes back from the API
    .then(function (response) {
      console.log(response);
    });
  });
