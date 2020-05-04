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

        for(let drawnX = 0; drawnX < drawn[1].length; ++drawnX) {
            let answerRadio = document.createElement('input');
            answerRadio.type = 'radio';
            answerRadio.setAttribute('name', 'answers');
            answerRadio.setAttribute('class', 'radio');
            answerRadio.id = 'answer' + drawnX;
            answerRadio.value = (drawn[0] === drawn[1][drawnX]);
            radios.appendChild(answerRadio);

            let answerLabel = document.createElement('label');
            answerLabel.setAttribute('class', 'radio-label');
            answerLabel.htmlFor = answerRadio.id;
            answerLabel.innerHTML = drawn[1][drawnX].answer;
            radios.appendChild(answerLabel);
        }
    };
    decks.appendChild(catButton);
}

document.getElementById('answers').onsubmit = function(event) {
    let chosen = document.querySelectorAll('input[name=answers]:checked');
    if(chosen.length == 1)
        alert(chosen[0].value);
    else
    if(chosen.length > 1)
        alert('Cheater, cheater, CHEATER! (Probably. Sorry if this is really my fault because it\'s actually a bug.)');
    else
        alert('Please choose an answer first.');
    event.preventDefault();
};
