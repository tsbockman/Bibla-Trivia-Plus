'use strict';

// Load all cards
var categories = JSON.parse(cardsJSON);
// TODO FIXME: validate with a JSON schema

// Process answer tags
var tagMap = new Map();
for(let catX = 0; catX < categories.length; ++catX) {
    let deck = categories[catX].deck;
    for(let cardX = 0; cardX < deck.length; ++cardX) {
        let card = deck[cardX];
        for(let qTagX = 0; qTagX < card.questionTags.length; ++qTagX) {
            let tag = card.questionTags[qTagX];
            let tagSet = tagMap.get(tag);
            if(!tagSet) {
                tagSet = new Set();
                tagMap.set(tag, tagSet);
            }

            tagSet.add(card.answer);
        }
        for(let aTagX = 0; aTagX < card.answerTags.length; ++aTagX) {
            let tag = card.answerTags[aTagX];
            let tagSet = tagMap.get(tag);
            if(!tagSet) {
                tagSet = new Set();
                tagMap.set(tag, tagSet);
            }

            tagSet.add(card.answer);
        }
    }
}

// A master container to hold our splicable decks
var fresh = []; // a master list to hold our lists of decks

for(let x=0; x < categories.length; ++x){ // initaites an empty list for every category
    fresh.push([]);
}

// Prep deck of numbers to be spliced from and insert into master container called fresh
function prepDeck(catX){
    fresh[catX] = [];
    let deckLength =  categories[catX].deck.length;
    for(let cardX = 0; cardX < deckLength; ++cardX){
        fresh[catX][cardX] = cardX;
    }
}

// Draw a card from a specific deck - shuffle if the length of the deck is 0
function draw(catX){
    // if the deck is empty, we prep it and fill it with data
    if (fresh[catX].length == 0) {
        prepDeck(catX);
    }

    // freshX is just a random number that is selected in comparison to the lenth of the deck
    let freshX = Math.floor(Math.random()*fresh[catX].length);
    // cardX is the actual card drawn from the deck, a splice is performed to remove that it from the master list
    let cardX = fresh[catX].splice(freshX, 1)[0];
    return [cardX, categories[catX].deck[cardX]];
}

function drawSeveral(catX, drawCount) {
    if(drawCount*2 >= categories[catX].deck.length){
        throw new Error("Category does not have enough cards");
    }

    let realDraw = draw(catX);
    let hand = new Set([ realDraw[0] ]);
    let shuffled = new Array(drawCount-1);
    let shuffledX = 0;
    while(hand.size < drawCount) {
        let randomX = Math.floor(Math.random()*categories[catX].deck.length);
        if(!hand.has(randomX)) {
            hand.add(randomX);
            shuffled[shuffledX] = categories[catX].deck[randomX];
            shuffledX += 1;
        }
    }
    shuffledX = Math.floor(Math.random()*drawCount);
    shuffled.splice(shuffledX, 0, realDraw[1]);
    return [ realDraw[1], shuffled ];
}
