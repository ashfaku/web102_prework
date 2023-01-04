/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
*/

// import the JSON data about the crowd funded games from the games.js file
//import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA)
// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
*/

// grab the element with the id games-container
let gamesContainer = null;

// create a function that adds all data from the games array to the page
function addGamesToPage(games) {
    for (let index of games)
    {
        let game_card = document.createElement("div");
        game_card.classList.add("game-card");
        let x = 1;
        let y = 2;
        let inner_html = `
            <img class = 'game-img' src = ${index.img} />
            <div>${index.description}</div>
            <div>Goal: ${index.goal}</div>
        `;
        game_card.innerHTML = inner_html;

        gamesContainer.appendChild(game_card);
    }
    // loop over each item in the data


        // create a new div element, which will become the game card


        // add the class game-card to the list


        // set the inner HTML using a template literal to display some info 
        // about each game
        // TIP: if your images are not displaying, make sure there is space
        // between the end of the src attribute and the end of the tag ("/>")


        // append the game to the games-container

}
function init()
{
    gamesContainer = document.getElementById("games-container");
    addGamesToPage(GAMES_JSON);
    // call the function we just defined using the correct variable
    // later, we'll call this function using a different list of games
    document.getElementById("num-contributions").innerHTML = GAMES_JSON.reduce((sum, index) => {
        return sum + index.backers;

    }, 0).toLocaleString();
    document.getElementById("total-raised").innerHTML = "$" + GAMES_JSON.reduce((sum, index) => {
        return sum + index.pledged;

    }, 0).toLocaleString();
    document.getElementById("num-games").innerHTML = GAMES_JSON.length;


    let filteredList = GAMES_JSON.filter((game) => {
        return game.pledged < game.goal;
    });
    let sum = GAMES_JSON.reduce((sum, index) => {
        return sum + index.pledged;

    }, 0);
    
    const displayStr = `A total of $${sum.toLocaleString()} has been raised for ${GAMES_JSON.length} games. Currently, ${filteredList.length} ${filteredList.length == 1 ? "game remains" : "games remain"} unfunded. We need your help to fund these amazing games!`;
    document.getElementById("display").innerHTML = displayStr;
    
    var sorted = GAMES_JSON.sort((a, b) => {
        return b.pledged < a.pledged ?  -1 
             : b.pledged > a.pledged ? 1 
             : 0;
    });
    let [first, second, ...others] = sorted;
    let firstGame = document.createElement("div");
    let secondGame = document.createElement("div");
    firstGame.innerHTML = `${first.name}`;
    secondGame.innerHTML = `${second.name}`;
    document.getElementById("first-game").appendChild(firstGame);
    document.getElementById("second-game").appendChild(secondGame);
}
/*************************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page displaying the
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: arrow functions, reduce, template literals
*/

// grab the contributions card element
const contributionsCard = document.getElementById("num-contributions");

// use reduce() to count the number of total contributions by summing the backers


// set the inner HTML using a template literal and toLocaleString to get a number with commas


// grab the amount raised card, then use reduce() to find the total amount raised
const raisedCard = document.getElementById("total-raised");

// set inner HTML using template literal


// grab number of games card and set its inner HTML
const gamesCard = document.getElementById("num-games");


/*************************************************************************************
 * Challenge 5: Add functions to filter the funded and unfunded games
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: functions, filter
*/

// show only games that do not yet have enough funding
function filterUnfundedOnly() {
   deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have not yet met their goal
    let filteredList = GAMES_JSON.filter((game) => {
        return game.pledged < game.goal;
    });

    // use the function we previously created to add the unfunded games to the DOM
    addGamesToPage(filteredList);
}
// show only games that are fully funded
function filterFundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have met or exceeded their goal
       let filteredList = GAMES_JSON.filter((element) => 
       {
           return element.pledged >= element.goal;
       });
   
       addGamesToPage(filteredList);
       // use the function we previously created to add unfunded games to the DOM

}

// show all games
function showAllGames() {
    deleteChildElements(gamesContainer);

    // add all games from the JSON data to the DOM
    addGamesToPage(GAMES_JSON);

}

// select each button in the "Our Games" section
const unfundedBtn = document.getElementById("unfunded-btn");
const fundedBtn = document.getElementById("funded-btn");
const allBtn = document.getElementById("all-btn");

// add event listeners with the correct functions to each button


/*************************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
*/

// grab the description container
const descriptionContainer = document.getElementById("description-container");

// use filter or reduce to count the number of unfunded games


// create a string that explains the number of unfunded games using the ternary operator


// create a new DOM element containing the template string and append it to the description container

/************************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort 
 */

const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

const sortedGames =  GAMES_JSON.sort( (item1, item2) => {
    return item2.pledged - item1.pledged;
});

// use destructuring and the spread operator to grab the first and second games

// create a new element to hold the name of the top pledge game, then append it to the correct element

// do the same for the runner up item