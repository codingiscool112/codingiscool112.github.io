// 1. SET YOUR DATES HERE
const MATH_TEST = new Date("May 1, 2024 09:00:00").getTime();
const JMUN_CONF = new Date("May 15, 2024 08:00:00").getTime();

// 2. COUNTDOWN LOGIC
function updateTimers() {
    const now = new Date().getTime();

    function calculate(target, elementId, label) {
        const diff = target - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById(elementId).innerText = `${days} Days until ${label}`;
    }

    calculate(MATH_TEST, "math-timer", "Math Quiz");
    calculate(JMUN_CONF, "jmun-timer", "JMUN Legal Committee");
}

// 3. QUIZ LOGIC
const legalQuiz = {
    q: "A neutral ship can be seized if it carries 'Dual-Use' goods like sugar for explosives.",
    a: true
};

document.getElementById('question').innerText = legalQuiz.q;

function checkAnswer(choice) {
    const feedback = document.getElementById('feedback');
    if (choice === legalQuiz.a) {
        feedback.innerText = "ACCESS GRANTED: Logic Correct.";
        feedback.className = "success";
    } else {
        feedback.innerText = "ACCESS DENIED: Review Legal Code.";
        feedback.className = "danger";
    }
}

// 4. RUN ON LOAD
setInterval(updateTimers, 1000);
document.getElementById('date-display').innerText = new Date().toDateString();
