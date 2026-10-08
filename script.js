const flashcards = [
{
question: "What is an application?",
answer: "A software program designed to perform specific tasks for users."
},
{
question: "What is web development?",
answer: "Web development is the process of creating websites and web applications."
},
{
question: "What is HTML?",
answer: "HTML is used to create and structure the content of web pages."
},
{
question: "What is CSS?",
answer: "CSS is used to style and design web pages."
},
{
question: "What is JavaScript?",
answer: "JavaScript is a programming language used to make web pages interactive."
},
{
question: "What is a website?",
answer: "A website is a collection of web pages available on the internet."
},
{
question: "What is a web browser?",
answer: "A web browser is software used to access and view websites on the internet."
},
{
question: "What is responsive web design?",
answer: "Responsive design makes a website work properly on different screen sizes."
},
{
question: "What is a URL?",
answer: "URL stands for Uniform Resource Locator and is the address of a resource on the web."
},
{
question: "What is a database?",
answer: "A database is a system used to store, organize, and manage data electronically."
}
];

let currentCard = 0;
let isAnswerShown = false;
let editingCard = false;

// Display Current Card
function displayCard() {


const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const cardNumberElement = document.getElementById("cardNumber");

questionElement.textContent = flashcards[currentCard].question;

if (isAnswerShown) {
    answerElement.textContent = flashcards[currentCard].answer;
    answerElement.classList.remove("hidden");
} else {
    answerElement.textContent = "Click Show Answer";
    answerElement.classList.add("hidden");
}

cardNumberElement.textContent =
    (currentCard + 1) + " / " + flashcards.length;


}

// Show Answer
function showAnswer() {


isAnswerShown = true;
displayCard();


}

// Next Card
function nextCard() {


if (currentCard < flashcards.length - 1) {

    currentCard++;
    isAnswerShown = false;
    displayCard();

} else {

    alert("You are already on the last card.");
}


}

// Previous Card
function previousCard() {


if (currentCard > 0) {

    currentCard--;
    isAnswerShown = false;
    displayCard();

} else {

    alert("You are already on the first card.");
}


}

// Add New Card
function addCard() {


const questionInput = document.getElementById("questionInput");
const answerInput = document.getElementById("answerInput");
const message = document.getElementById("message");

const question = questionInput.value.trim();
const answer = answerInput.value.trim();

if (question === "" || answer === "") {

    message.textContent =
        "Please enter both question and answer.";

    return;
}

if (editingCard) {

    flashcards[currentCard].question = question;
    flashcards[currentCard].answer = answer;

    message.textContent =
        "Flashcard updated successfully.";

    editingCard = false;

} else {

    flashcards.push({
        question: question,
        answer: answer
    });

    currentCard = flashcards.length - 1;

    message.textContent =
        "Flashcard added successfully.";
}

questionInput.value = "";
answerInput.value = "";

isAnswerShown = false;

displayCard();


}

// Edit Current Card
function editCard() {


const questionInput = document.getElementById("questionInput");
const answerInput = document.getElementById("answerInput");
const message = document.getElementById("message");

questionInput.value = flashcards[currentCard].question;
answerInput.value = flashcards[currentCard].answer;

editingCard = true;

message.textContent =
    "Edit the information and click Add Card to save changes.";


}

// Update Current Card
function updateCard() {


const questionInput = document.getElementById("questionInput");
const answerInput = document.getElementById("answerInput");
const message = document.getElementById("message");

const question = questionInput.value.trim();
const answer = answerInput.value.trim();

if (question === "" || answer === "") {

    message.textContent =
        "Please enter both question and answer.";

    return;
}

flashcards[currentCard].question = question;
flashcards[currentCard].answer = answer;

questionInput.value = "";
answerInput.value = "";

editingCard = false;
isAnswerShown = false;

message.textContent =
    "Flashcard updated successfully.";

displayCard();


}

// Delete Current Card
function deleteCard() {


const message = document.getElementById("message");

if (flashcards.length === 1) {

    alert("At least one flashcard must remain.");

    return;
}

flashcards.splice(currentCard, 1);

if (currentCard >= flashcards.length) {

    currentCard = flashcards.length - 1;
}

editingCard = false;
isAnswerShown = false;

message.textContent =
    "Flashcard deleted successfully.";

displayCard();


}

// Button Events
document.addEventListener("DOMContentLoaded", function () {


displayCard();

document
    .getElementById("showAnswerBtn")
    .addEventListener("click", showAnswer);

document
    .getElementById("nextBtn")
    .addEventListener("click", nextCard);

document
    .getElementById("previousBtn")
    .addEventListener("click", previousCard);

document
    .getElementById("addBtn")
    .addEventListener("click", addCard);

document
    .getElementById("editBtn")
    .addEventListener("click", editCard);

document
    .getElementById("deleteBtn")
    .addEventListener("click", deleteCard);

document
    .getElementById("updateBtn")
    .addEventListener("click", updateCard);


});
