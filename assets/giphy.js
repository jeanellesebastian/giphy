// Create an array of movies
var movies = ["Toy Story", "Star Wars", "Despicable  Me", "Harry Potter", "Moana", "John Wick", "Aladdin", "Forrest Gump", "The Lion King", "Land Before Time"]

console.log(movies);

// Function for displaying movie data

// 
function renderButtons (){
	$("#movie-buttons").empty();
	// loop through the array of movies
	for (var i = 0; i < movies.length; i++) {
	// dynamically generate buttons for each movie
	var a = $("<button>");
	// adding a class
	a.addClass("movie");
	// adding a data-attribute with a value of the movie at index i
	a.attr("data-name", movies[i]);
	// providing the button's text with a value of the movie at index i
	a.text(movies[i]);
	// adding the button to the html page
	$("#movie-buttons").append(a);
	}
}

// this function handles events where one button is clicked

	$("#add-movie").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();
        // This line will grab the text from the input box
        var movie = $("#movie-input").val().trim();
        // The movie from the textbox is then added to our array
        movies.push(movie);
        // calling renderButtons which handles the processing of our movie array
        renderButtons();
      });
    
    // Calling the renderButtons function at least once to display the initial list of movies
    renderButtons();



// $("button").on("click",function(){
// 	var x = $(this).data("search");
// 	console.log(x);

// 	// requesting to the GIPHY API 
// 	var queryURL = "https://api.giphy.com/v1/gifs/search?q="+x+"&api_key=7191e7d7b4ed4614839f005e863efdfa&limit=10";
// 	console.log(queryURL);

// 	// GET request sends a call to the URL - collecting information
// 	$.ajax({url:queryURL,method:"GET"})

// 		// DONE runs whatever is located within the () after requeset has been made
// 		// Once server responds with data .. the function runs ..
// 		.done(function(response){
// 			console.log(response);
// 			for(var i=0;i<response.data.length;i++){
// 			$("#GIFArea").prepend("<img src='"+response.data[i].images.downsized.url+"'>");
// 			$("#GIFArea").prepend("<p>Rating: "+response.data[i].rating+"</p>")
// 		}
// 		})
// })

