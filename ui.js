'use strict';

let decks = document.getElementById('decks');
for(let catX = 0; catX < categories.length; ++catX) {
    let catName = categories[catX].name;

    let catButton = document.createElement('button');
    catButton.id = 'draw-' + catName;
    catButton.innerHTML = 'Draw<br>' + catName;
    catButton.onclick = function() {
        let drawn = drawSeveral(catX, 4);

        document.getElementById('question').innerHTML = drawn[0].question;

        let radios = document.getElementById('radios');
        radios.innerHTML = '';

        for(let drawnX = 0; drawnX < drawn.length; ++drawnX) {
            let answerRadio = document.createElement('input');
            answerRadio.type = 'radio';
            answerRadio.setAttribute('name', 'answers');
            answerRadio.setAttribute('class', 'radio');
            answerRadio.id = 'answer' + drawnX;
            radios.appendChild(answerRadio);

            let answerLabel = document.createElement('label');
            answerLabel.setAttribute('class', 'radio-label');
            answerLabel.htmlFor = answerRadio.id;
            answerLabel.innerHTML = drawn[drawnX].answer;
            radios.appendChild(answerLabel);
        }
    };
    decks.appendChild(catButton);
}
