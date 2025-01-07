// script.js
function submitForm() {
    const radios = document.querySelectorAll('input[type="radio"]');
    let totalScore = 0;
    let group1Score = 0; // For questions 5, 10, 13
    let group2Score = 0; // For questions 2, 3, 11
    let group3Score = 0; // For questions 1, 9, 7, 14
    let group4Score = 0; // For questions 4, 8
    let group5Score = 0; // For questions 6, 12, 15

    const group1Questions = [5, 10, 13];
    const group2Questions = [2, 3, 11];
    const group3Questions = [1, 9, 7, 14];
    const group4Questions = [4, 8];
    const group5Questions = [6, 12, 15];

    const numQuestions = radios.length / 5;

    for (let i = 0; i < numQuestions; i++) {
        let questionScore = 0;
        const radioName = `question${i + 1}`;
        const selectedRadio = document.querySelector(`input[name="${radioName}"]:checked`);
        if (selectedRadio) {
            questionScore = parseInt(selectedRadio.value);
            totalScore += questionScore;
            if (group1Questions.includes(i + 1)) {
                group1Score += questionScore;
            } else if (group2Questions.includes(i + 1)) {
                group2Score += questionScore;
            } else if (group3Questions.includes(i + 1)) {
                group3Score += questionScore;
            } else if (group4Questions.includes(i + 1)) {
                group4Score += questionScore;
            } else if (group5Questions.includes(i + 1)) {
                group5Score += questionScore;
            }
        }
    }

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `Your total score is: ${totalScore} <br>`;

    let comment = "";
    if (totalScore <= 35) {
        comment = "You most likely struggle to effect positive change within your team. You may not have developed the rapport necessary to build trust and intimacy with your coachee, or the communication skills to know which questions to ask and how to analyze the answers. Don't worry, there are plenty of tools and tips that you can use to make progress quickly! ";
    } else if (totalScore <= 55) {
        comment = "Your coaching skills are good, but there's some room for improvement. Have a look through your answers to identify where you could do better. You may need to focus on one particular area, or make small improvements overall. Perhaps you should aim to listen more closely to the answers your coachee gives, develop your motivation techniques, or build on your interpersonal skills. There is plenty of guidance for you to improve in these areas provided below.";
    } else if (totalScore <= 75) {
        comment = "Well done, your coaching skills are probably highly effective! You're likely making a real difference to your team members' development, and people feel comfortable coming to you for guidance. You are personable, emotionally intelligent, and highly organized, with effective goal-setting skills and questioning techniques. However, it's important to continue developing and improving your coaching skills. Read our tips and guidance below, and identify areas where you can improve even further!";
    } else {
        comment = "Thank you! We are thrilled that you loved our product.";
    }

    resultsDiv.innerHTML += `<strong>${comment}</strong> <br><br>`;

    resultsDiv.innerHTML += "Coaching is unlocking a person's potential to maximize their growth<br><br>";

    resultsDiv.innerHTML += `Solutions Lie Within the Coachee: ${group1Score} <br>`;
    resultsDiv.innerHTML += `No Judgment or Fixed Agenda, But Have an Agreed Goal: ${group2Score} <br>`;
    resultsDiv.innerHTML += `Coaching Is About the Whole Person: ${group3Score} <br>`;
    resultsDiv.innerHTML += `Coach and Coachee Are Equal Partners: ${group4Score} <br>`;
    resultsDiv.innerHTML += `Coaching Looks to the Future and Next Actions: ${group5Score} <br>`;
    resultsDiv.innerHTML += `Total Group Score: ${group1Score + group2Score + group3Score + group4Score + group5Score} <br><br>`;

    const scores = [group1Score, group2Score, group3Score, group4Score, group5Score];
    const minScore = Math.min(...scores);
    const sortedScores = [...scores].sort((a, b) => a - b);
    const colors = scores.map(score => {
        if (score === minScore) return "red";
        if (score === sortedScores[1]) return "blue";
        return "grey";
    });

    let barChartHTML = "<div style='display: flex;'>";
    for (let i = 0; i < scores.length; i++) {
        barChartHTML += `<div class="bar ${colors[i]}" style="height: ${scores[i] * 10}px;">${scores[i]}</div>`;
    }
    barChartHTML += "</div>";

    resultsDiv.innerHTML += barChartHTML;

    resultsDiv.innerHTML += "<button onclick='window.print()'>Print</button>";
}

