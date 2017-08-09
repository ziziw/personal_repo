var movies = [{name: "\"Wukong\"", rating: 8.4, hasWatched: true}, 
				{name: "\"Inception\"", rating: 9.5, hasWatched: true}, 
				{name: "\"Pixel\"", rating: 3.3, hasWatched: false}];

movies.forEach(function(element){
	if (element.hasWatched === true){
		console.log("You have watched " + element.name + " - " + element.rating + " stars");
	} else {
		console.log("You have not watched " + element.name + " - " + element.rating + " stars");
	}
});