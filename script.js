let submitOption = document.getElementById("submit")
let userResult = document.getElementById("result")

const correctAnswers = {
    q1: "3",
    q2: "1"
}

submitOption.addEventListener("click", function() {
    let correctScore = 0;

    for (const questions in correctAnswers) { 
        const selectedOption = document.querySelector(`input[name="${questions}"]:checked`);

        if (selectedOption && selectedOption.value === correctAnswers[questions]) {
            correctScore++
        }
     }

     userResult.textContent = `You scored ${correctScore}!`
});

