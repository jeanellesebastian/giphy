/*****

- With a given array of movies create buttons
- Add a form where user can input their own movie
- Create a new button if user submits a new movie
- Upon button click print a list of GIPHYs of the movie to the HTML page
- GIPHYs will animate/pause upon click

*****/

$(document).ready(function(){

// create an array of movies
var movies = [
	"Toy Story", 
	"Despicable  Me",
	"Harry Potter",
	"Moana",
	"John Wick",
	"Aladdin",
	"Forrest Gump",
	"Land Before Time"];

// FUNCTION - needed to create buttons from array

function renderButtons() {
	    // (this is necessary otherwise you will have repeat buttons)
        $("#movie-buttons").empty();
        // Looping through the array of movies
        for (var i = 0; i < movies.length; i++) {
          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of movie to our button
          a.addClass("movie");
          // Adding a data-attribute
          a.attr("data-name", movies[i]);
          // Providing the initial button text
          a.text(movies[i]);
          // Adding the button to the buttons-view div
          $("#movie-buttons").append(a);
        }
      }


// FUNCTION - to add new buttons with user input

	 // This function handles events where a movie button is clicked
      $("#add-movie").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var movie = $("#movie-input").val().trim();
        // Adding movie from the textbox to our array
        movies.push(movie);
        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

	// call renderButtons function to display initial buttons
	renderButtons();


// FUNCTION - needed to request to GIPHY using AJAX

	// event listener for all button elements
	function displayMovie (){

		// $("movie-buttons").on("click", function(){

		// this refers to the button that was clicked
		var movie = $(this).attr("data-name");

		// constructing a URL to search GIPHY for movie
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=7191e7d7b4ed4614839f005e863efdfa&limit=10";

		// create AJAX GET request
		$.ajax({
			url:queryURL,
			method:"GET"}) // ajax closes here

			// after the data is DONE getting called from the GIPHY API
			.done(function(response){
				// store the results in a results variable
				var results = response.data;


				for (var i = 0; i < results.length; i++) {
					var gifDiv = $("<div class='gifDiv'>");
					var rating = results[i].rating;
					var p = $("<p>").text("Rating: " + rating);
					var movieGif = $("<img>");
					movieGif.attr("src", results[i].images.fixed_height.url);
					gifDiv.append(p);
					gifDiv.append(movieGif);
					$("#GIFArea").prepend(gifDiv);
				
				} // close for loop

			}); // close done function

	} // close displayMovie function


    $(document).on("click", ".movie", displayMovie);


});


