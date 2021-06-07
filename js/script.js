// Question 1
var food = true;
var typeOfFood = typeof food;
console.log(typeOfFood)





function outOfStock (val1) {
    if (typeof val1 == "boolean") {
        console.log("In Stock", val1)
    } else {
        console.log("Out of Stock")
    }
}
outOfStock("pizza")

// Question 2

for (var i = 15; i < 26; i++) {
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
    
    if (games[i].rating <= 3.5)
    console.log(games[i].title)
    console.log(games[i].rating)
    

    gamesContainer.innerHTML = gamesContainer.innerHTML + "<li>" + games[i].title + " : " + (games[i].rating) + "</li>"
    
}

// Question 4

function whatIDontLike (rats) {

}

// Question 5


// Question 6

var updatePage = document.querySelector("h1");
var button = document.querySelector("button");

function changeUpdatePage (){
    updatePage.innerHTML = "Programming Foundations Course Assignment - Updated Title";
    updatePage.style.color = "green";
    updatePage.style.font = "impact";
}


button.onclick = changeUpdatePage;
//Question 7 

