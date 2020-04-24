'use strict';

// enumerate categories
class Category {
    constructor(name, title) {
        this.name = name;
        this.title = title;
        this.deck = [];
    }
}

var categories = [
    new Category('torah', 'Torah'),
    new Category('history', 'History'),
    new Category('wisdom', 'Wisdom'),
    new Category('prophets', 'Prophets'),
    new Category('gospels', 'Gospels'),
    new Category('acts', 'Acts'),
    new Category('paul', 'Paul'),
    new Category('epistles', 'Epistles of the New Testament')
];

function findCategoryIndex(name){
    for(let catX = 0; catX < categories.length; ++catX){
        if(categories[catX].name == name)
            return catX;
    }
    throw new Error("'" + name + "' is not a valid category.");
}

// define Card
class Card {
    constructor(question, answer, reference) {
        this.question = question;
        this.answer = answer;
        this.reference = reference;
    }
}

// load the cards
cards_csv.split('\n').forEach((lineStr, lineNum) => {
    var lineStr = lineStr.trim();
    if (lineStr.length <= 0)
        return;
    try {
        var cells = lineStr.split(",");
        var cellCount = cells.length;
        if (cellCount != 4) {
            throw new Error(cellCount + " cells were found, but there should be 4.")
        }
        var deck = categories[findCategoryIndex(cells[0].trimEnd())].deck;
        var card = new Card(cells[1].trim(), cells[2].trim(), cells[3].trimStart());
        deck.push(card);
    }
    catch(e) {
        console.log("ERROR in 'cards.csv' at line " + lineNum + ": " + e);
    }
});

// Destroy all empty Categories!!!!!
var catX = 0;
while (catX < categories.length) {
    var deck = categories[catX].deck;
    if (deck.length <= 0) {
        console.log("WARNING 'cards.csv' contains no cards for category '" + categories[catX].name + "'.");
        categories.splice(catX, 1);
    } else{
        catX += 1;
    }
}

// Shuffle Algo
var fresh = [];

for(let x=0; x < categories.length; ++x){
    fresh.push([]);
}

function prepDeck(catX){
    fresh[catX] = [];
    var deckLength =  categories[catX].deck.length;
    for(let cardX = 0; cardX < deckLength; ++cardX){
        fresh[catX][cardX] = cardX;
    }
}

function draw(catX){
    if (fresh[catX].length == 0) {
        prepDeck(catX);
    }

    var freshX = Math.floor(Math.random()*fresh[catX].length);
    var cardX = fresh[catX].splice(freshX, 1)[0];
    return [cardX, categories[catX].deck[cardX]];
}
