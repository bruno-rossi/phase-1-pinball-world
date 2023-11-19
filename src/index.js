// In this challenge, we need to add the names of games and manufacturers to the nav. 
    // 1. First, I need to make a fetch() GET request to the db to get the data.
        //  a. Then, forEach of the items in the games array, I want to create a <h5></h5> tag;
        //  b. The textContent of the h5 tag should interpolate the "name" property of each item, with the name of the manufacturer interpolated between parentheses.
        //  c. With the h5s created, we will append() them to <nav class="game-list"></nav>.
    // 2. Show the image, name and high_score properties of the first game
        //  a. Outside the forEach statement, query select:
            // - the img tag <img id="detail-image" src=""/>;
            // - the h2 tag <h2 id="detail-title"></h2>;
            // - the span tag inside the h3 tag for High Score <h3>High Score: <span id="detail-high-score"></span></span></h3>
        //  b. Assign the following information:
            // - Assign the img tag's src value as the "image" from the first item of the array using the [0] index;
            // - Assign the h2 tag's textContent as the "name" property from the array's first index item using [0];
            // - Assign the span tag's textContent as the "high_score" property.
    // 3. When the user clicks on one of the games in the list, display all the details of that game.
        //  a. Inside the forEach function, add a "click" event listener to each of the h5 elements;
        //  b. Assign the following information:
            // - Assign the img tag's src value as the "image" property of game;
            // - Assign the h2 tag's textContent as the "name" property of game;
            // - Assign the span tag's textContent as the "high_score" property of game.
    // 4. The user should be able to enter a high score in the form's <input id="score-input" type="text" /> tag on the right side and have it replace the textContent inside the highScoreSpan.
        //  a. Inside the .then() function, but outside of forEach, querySelect the form.
        //  b. Add a "submit" EventListener to the form.
        //  c. Prevent default behavior on submit event listener.
        //  d. Assign highScoreSpan's textContent to the value of the #score-input field.
    // *The value of the high score does not need to persist between refreshes, but should save state when switching between games.*
        // If the above doesn't work, embed the event listener inside a POST request to save high score in the database.


fetch("http://localhost:3000/games")
.then(response => response.json())
.then(games => {

    games.forEach(game => {

        const gameListNav = document.body.querySelector(".game-list");
        
        const headerTag = document.createElement("h5");
        headerTag.textContent = `${game.name} (${game.manufacturer_name})`;
        
        gameListNav.append(headerTag);

        headerTag.addEventListener("click", event => {
            displayGameDetails(game);
        })
        
    });

    const gameImage = document.body.querySelector("#detail-image");
    const gameTitle = document.body.querySelector("#detail-title");
    const highScoreSpan = document.body.querySelector("#detail-high-score");
    
    function displayGameDetails(gameItem) {
        gameImage.src = gameItem.image;
        gameTitle.textContent = gameItem.name;
        // highScoreSpan.textContent = gameItem.high_score;
    }

    displayGameDetails(games[0]);

    const form = document.body.querySelector("#high-score-form");

    form.addEventListener("submit", event => {
        event.preventDefault();

        const scoreInput = document.body.querySelector("#score-input");
        highScoreSpan.textContent = scoreInput.value;        
        scoreInput.value = "";

    });

})

// ## Challenge #1
// Make a request to `http://localhost:3000/games` and add the names of all the games in the `#game-list` nav element. We want to see both the name **and** the manufacturer for each game, since some games have the same name from different manufacturers. The end result should be of the format `name (manufacturer)`. For example, `Ghostbusters (Stern)`.

// (Optional) If you want the styling to work, each element needs to be an `h5` tag.

// ## Challenge #2
// When the page loads, show the `image`, `name`, and `high_score` properties of the the **first** game in the array returned from your fetch. 

// ## Challenge #3
// When the user clicks on one of the games in the list, display all the details of that game.

// ## Challenge #4 
// The user should be able to enter a high score in the form on the right side and have it show that value for "high score".

// *The value of the high score does not need to persist between refreshes, but should save state when switching between games.*

