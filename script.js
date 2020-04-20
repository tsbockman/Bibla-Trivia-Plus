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




