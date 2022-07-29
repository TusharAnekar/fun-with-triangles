const quizForm = document.querySelector (".quiz-form");
const submitButton = document.querySelector ("#submit-button");
const output = document.querySelector ("#output");

const correctAnswers = ["90°", "right angled"];

submitButton.addEventListener ("click" , () => {

    let index = 0, score = 0;
    const formResults = new FormData(quizForm);

    for (let value of formResults.values()) {
        
        if(value === correctAnswers[index]) {
            score++;
        }
        index++;
    }
    output.innerText = "The final score is "+score;
});