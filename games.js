'use strict';

// Load all cards
var categories = JSON.parse(cardsJSON);
// TODO FIXME: validate with a JSON schema

// Process answer tags
var tagMap = new Map();
{
    let addAnswerToTag = function(tag, answer) {
        let tagSet = tagMap.get(tag);
        if(!tagSet) {
            tagSet = new Set();
            tagMap.set(tag, tagSet);
        }

        tagSet.add(answer);
    };
    for(let catX = 0; catX < categories.length; ++catX) {
        let deck = categories[catX].deck;
        for(let cardX = 0; cardX < deck.length; ++cardX) {
            let card = deck[cardX];
            for(let qTagX = 0; qTagX < card.questionTags.length; ++qTagX) {
                addAnswerToTag(card.questionTags[qTagX], card.answer);
            }
            for(let aTagX = 0; aTagX < card.answerTags.length; ++aTagX) {
                addAnswerToTag(card.questionTags[aTagX], card.answer);
            }
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
    return categories[catX].deck[cardX];
}

function drawSeveral(catX, drawCount) {
    let realDraw = draw(catX);

    let plausibleSet = new Set();
    for(let qTagX = 0; qTagX < realDraw.questionTags.length; ++qTagX) {
        let tagSet = tagMap.get(realDraw.questionTags[qTagX]);
        for(let answer of tagSet)
            plausibleSet.add(answer);
    }
    let plausible = new Array(plausibleSet.size);
    let plausibleX = 0;
    for(let answer of plausibleSet) {
        plausible[plausibleX] = answer;
        ++plausibleX;
    }

    if(drawCount*3 > plausible.length*2)
        drawCount = Math.floor(plausible.length*2/3);
    if(!(drawCount >= 1))
        drawCount = 1;

    let hand = new Set([ realDraw.answer ]);
    let shuffledHand = new Array(drawCount-1);
    let shuffledX = 0;
    while(hand.size < drawCount) {
        // TODO: Fix infinite run-time worst case.
        let answer = plausible[Math.floor(Math.random()*plausible.length)];
        if(!hand.has(answer)) {
            hand.add(answer);
            shuffledHand[shuffledX] = answer;
            ++shuffledX;
        }
    }
    shuffledX = Math.floor(Math.random()*drawCount);
    shuffledHand.splice(shuffledX, 0, realDraw.answer);
    return [ realDraw, shuffledHand ];
}
