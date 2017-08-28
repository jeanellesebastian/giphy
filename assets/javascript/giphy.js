$(document).ready(function () {


// var topics = ["dogs", ];

$("button").on("click",function(){
	var x = $(this).data("search");
	console.log(x);

	// requesting to the GIPHY API 
	var queryURL = "https://api.giphy.com/v1/gifs/search?q="+x+"&api_key=7191e7d7b4ed4614839f005e863efdfa&limit=10";
	console.log(queryURL);

	// GET request sends a call to the URL - collecting information
	$.ajax({url:queryURL,method:"GET"})
		.done(function(response){
			console.log(response);
			for(var i=0;i<response.data.length;i++){
			$("#GIFArea").prepend("<img src='"+response.data[i].images.downsized.url+"'>");
			$("#GIFArea").prepend("<p>Rating: "+response.data[i].rating+"</p>");
		}
		})
	})
	


	// DONE runs whatever is located within the () after requeset has been made
	// Once server responds with data .. the function runs ..
		

})