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
    questionTorah.value = questionData.toString();
    answerTorah.value = answerData.toString();
    referenceTorah.value = referenceData.toString();
};


// Handle historyButton Event
var historyButton = document.getElementById('drawHistory');

historyButton.onclick = function() {
    // call the draw function and store the data
    card = draw(1);
    setCard(card);
    // Update the HTML elements with the result of the function
    questionHistory.value = questionData.toString();
    answerHistory.value = answerData.toString();
    referenceHistory.value = referenceData.toString();
};

// Handle wisdomButton Event
var wisdomButton = document.getElementById('drawWisdom');

wisdomButton.onclick = function() {
    // call the draw function and store the data
    card = draw(2);
    setCard(card);
    // Update the HTML elements with the result of the function
    questionWisdom.value = questionData.toString();
    answerWisdom.value = answerData.toString();
    referenceWisdom.value = referenceData.toString();
};

// Handle prophetsButton Event
var prophetsButton = document.getElementById('drawProphets');

prophetsButton.onclick = function() {
    // call the draw function and store the data
    card = draw(3);
    setCard(card);
    // Update the HTML elements with the result of the function
    questionProphets.value = questionData.toString();
    answerProphets.value = answerData.toString();
    referenceProphets.value = referenceData.toString();
};

// Handle prophetsButton Event
var gospelsButton = document.getElementById('drawGospels');

gospelsButton.onclick = function() {
    // call the draw function and store the data
    card = draw(4);
    setCard(card);
    // Update the HTML elements with the result of the function
    questionGospels.value = questionData.toString();
    answerGospels.value = answerData.toString();
    referenceGospels.value = referenceData.toString();
};

// Handle actsButton Event
var actsButton = document.getElementById('drawActs');

actsButton.onclick = function() {
    // call the draw function and store the data
    card = draw(5);
    setCard(card);
    // Update the HTML elements with the result of the function
    questionActs.value = questionData.toString();
    answerActs.value = answerData.toString();
    referenceActs.value = referenceData.toString();
};

// Handle paulButton Event
var paulButton = document.getElementById('drawPaul');

paulButton.onclick = function() {
    // call the draw function and store the data
    card = draw(6);
    setCard(card);
    // Update the HTML elements with the result of the function
    questionPaul.value = questionData.toString();
    answerPaul.value = answerData.toString();
    referencePaul.value = referenceData.toString();
};

// Handle epistlesButton Event
var epistlesButton = document.getElementById('drawEpistles');

epistlesButton.onclick = function() {
    // call the draw function and store the data
    card = draw(7);
    setCard(card);
    // Update the HTML elements with the result of the function
    questionEpistles.value = questionData.toString();
    answerEpistles.value = answerData.toString();
    referenceEpistles.value = referenceData.toString();
};