'use strict';

var main = document.getElementById('decks');
for(let catX = 0; catX < categories.length; ++catX) {
    let catName = categories[catX].name;
    
    let catDiv = document.createElement('div');
    catDiv.className = "flex";

    let catButton = document.createElement('div');
    catButton.classList.add('button', 'm0');
    catButton.id = 'draw-' + catName;
    catButton.innerHTML = 'Draw<br>' + catName;
    catDiv.appendChild(catButton);

    let catQuestion = document.createElement('div');
    catQuestion.classList.add('question', 'm0');
    catQuestion.id = 'question-' + catName;
    catDiv.appendChild(catQuestion);

    let catAnswer = document.createElement('div');
    catAnswer.classList.add('answer', 'm0');
    catAnswer.id = 'answer-' + catName;
    catDiv.appendChild(catAnswer);

    let catReference = document.createElement('div');
    catReference.classList.add('reference', 'm0');
    catReference.id = 'reference-' + catName;
    catDiv.appendChild(catReference);

    main.appendChild(catDiv);

    catButton.onclick = function() {
        var card = draw(catX)[1];
        catQuestion.innerHTML = card.question.toString();
        catAnswer.innerHTML = card.answer.toString();
        catReference.innerHTML = card.reference.toString();
    };
}

// example of closure function
function createFunction(x) {
    return function() {
        console.log(x)
    };
}

var created = createFunction('hello');
created();
