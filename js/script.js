// Question 1
var outOfStock = true;

if (outOfStock) {
	console.log("In Stock");
} else {
	console.log("Out of Stock");
}


// Question 2

for (var i = 15; i <= 25; i++) {
	if (i == 17 || i == 20)
    console.log(i);
}

// Question 3

var games = [
	{
		title: "Grand Theft Auto",
		rating: 4.48,
	},
	{
		title: "Portal 2",
		rating: 3.5,
	},
	{
		title: "Team Fortress",
		rating: null,
	},
	{
		title: "The Witcher",
		rating: 3.0,
	},
	{
		title: "The Elder Scrolls",
		rating: 2.9,
	},
];

var gamesContainer = document.querySelector(".games")

for (var i = 0; i < games.length; i++){
    
    if (games[i].rating && games[i].rating < 3.5){
		console.log(games[i].title);
    	console.log(games[i].rating);
		gamesContainer.innerHTML = gamesContainer.innerHTML + "<li>" + games[i].title + " : " + (games[i].rating) + "</li>";
	}    
}

// Question 4

function whatIDontLike(val){
	if (typeof val == "string") {
		console.log("I dont like", val);
	} else {
		console.log("Please send in a string")
	}
}

// Question 5

function isNumber(val1, val2){
	if (perseFloat(val1) && perseFloat(val2)){
		console.log(val1 - val2);
	} else {
		console.log("Invalid Argument(s)");
	}
}

// Question 6

var updateTitle = document.querySelector("title");
var heading = document.querySelector("h1");
var changeColor = document.querySelector("body");
var button = document.querySelector("button");
var gamesUl = document.querySelector(".games")
var headingText = heading.innerHTML


function changeUpdatePage (){
    heading.style.color = "green";
	heading.style.fontFamily = "impact";
	updateTitle.innerHTML = "Updated Title";
	changeColor.style.backgroundColor = "yellow";
	gamesUl.style.padding = "0";
	gamesUl.style.listStyleType = "none";
	heading.innerHTML = "<a href=\"#\">" + headingText + "</a>"
}


button.onclick = changeUpdatePage;


//Question 7 

var toys = [
	{
		name: "Lego",
		price: 15.6,
	},
	{
		name: "Master of the Universe",
		price: "28.3",
	},
	{
		name: "Barbie",
		price: null,
	},
	{
		name: "Mr Potato Head",
		price: 89.99,
	},
];


