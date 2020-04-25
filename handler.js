'use strict';

var card;
var questionData;
var answerData;
var referenceData;

function setCard(card){
    questionData = card[1].question;
    answerData = card[1].answer;
    referenceData = card[1].reference;
}

// Handle torahButton Event
var torahButton = document.getElementById('drawTorah');

torahButton.onclick = function() {
    // call the draw function and store the data
    card = draw(0);
    setCard(card);
    // Update the HTML elements with the result of the function
    document.getElementById('questionTorah').innerHTML = questionData.toString();
    document.getElementById('answerTorah').innerHTML = answerData.toString();
    document.getElementById('referenceTorah').innerHTML = referenceData.toString();
};


// Handle historyButton Event
var historyButton = document.getElementById('drawHistory');

historyButton.onclick = function() {
    // call the draw function and store the data
    card = draw(1);
    setCard(card);
    // Update the HTML elements with the result of the function
    document.getElementById('questionHistory').innerHTML = questionData.toString();
    document.getElementById('answerHistory').innerHTML = answerData.toString();
    document.getElementById('referenceHistory').innerHTML = referenceData.toString();
};

// Handle wisdomButton Event
var wisdomButton = document.getElementById('drawWisdom');

wisdomButton.onclick = function() {
    // call the draw function and store the data
    card = draw(2);
    setCard(card);
    // Update the HTML elements with the result of the function
    document.getElementById('questionWisdom').innerHTML = questionData.toString();
    document.getElementById('answerWisdom').innerHTML = answerData.toString();
    document.getElementById('referenceWisdom').innerHTML = referenceData.toString();
};

// Handle prophetsButton Event
var prophetsButton = document.getElementById('drawProphets');

prophetsButton.onclick = function() {
    // call the draw function and store the data
    card = draw(3);
    setCard(card);
    // Update the HTML elements with the result of the function
    document.getElementById('questionProphets').innerHTML = questionData.toString();
    document.getElementById('answerProphets').innerHTML = answerData.toString();
    document.getElementById('referenceProphets').innerHTML = referenceData.toString();
};

// Handle prophetsButton Event
var gospelsButton = document.getElementById('drawGospels');

gospelsButton.onclick = function() {
    // call the draw function and store the data
    card = draw(4);
    setCard(card);
    // Update the HTML elements with the result of the function
    document.getElementById('questionGospels').innerHTML = questionData.toString();
    document.getElementById('answerGospels').innerHTML = answerData.toString();
    document.getElementById('referenceGospels').innerHTML = referenceData.toString();
};

// Handle actsButton Event
var actsButton = document.getElementById('drawActs');

actsButton.onclick = function() {
    // call the draw function and store the data
    card = draw(5);
    setCard(card);
    // Update the HTML elements with the result of the function
    document.getElementById('questionActs').innerHTML = questionData.toString();
    document.getElementById('answerActs').innerHTML = answerData.toString();
    document.getElementById('referenceActs').innerHTML = referenceData.toString();
};

// Handle paulButton Event
var paulButton = document.getElementById('drawPaul');

paulButton.onclick = function() {
    // call the draw function and store the data
    card = draw(6);
    setCard(card);
    // Update the HTML elements with the result of the function
    document.getElementById('questionPaul').innerHTML = questionData.toString();
    document.getElementById('answerPaul').innerHTML = answerData.toString();
    document.getElementById('referencePaul').innerHTML = referenceData.toString();
};

// Handle epistlesButton Event
var epistlesButton = document.getElementById('drawEpistles');

epistlesButton.onclick = function() {
    // call the draw function and store the data
    card = draw(7);
    setCard(card);
    // Update the HTML elements with the result of the function
    document.getElementById('questionEpistles').innerHTML = questionData.toString();
    document.getElementById('answerEpistles').innerHTML = answerData.toString();
    document.getElementById('referenceEpistles').innerHTML = referenceData.toString();
};