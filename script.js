// --- CONFIG ---
const MATH_DATE = new Date("May 1, 2026 09:00:00").getTime();
const JMUN_DATE = new Date("May 15, 2026 08:00:00").getTime();

const questions = [
    { q: "Double Criminality is needed for legal extradition.", a: true },
    { q: "A player must legally lend a racket to a rival.", a: false },
    { q: "Copyright protects work as soon as it is saved.", a: true }
];

let qIndex = 0;

// --- TENNIS BAR (6-1 Win) ---
function loadTennisStats() {
    const bar = document.getElementById('tennis-bar');
    const text = document.getElementById('stats-text');
    setTimeout(() => {
        bar.style.width = "85%";
        text.innerText = "MATCH RESULT: 6-1 WIN | DOMINANCE: 85%";
    }, 500);
}

// --- CALENDAR FUNCTIONS ---
function openCalendar() { document.getElementById("calendar-modal").style.display = "block"; }
function closeCalendar() { document.getElementById("calendar-modal").style.display = "none"; }

// --- QUIZ LOGIC ---
function handleChoice(choice) {
    const feedback = document.getElementById('feedback');
    if (choice === questions[qIndex].a) {
        feedback.innerText = "✓ CORRECT";
        feedback.className = "success";
        setTimeout(() => {
            qIndex = (qIndex + 1) % questions.length;
            document.getElementById('question').innerText = questions[qIndex].q;
            feedback.innerText = "";
        }, 1000);
    } else {
        feedback.innerText = "✗ RETRY";
        feedback.className = "danger";
    }
}

// --- TIMERS ---
function runTimers() {
    const now = new Date().getTime();
    const update = (target, id, label) => {
        const diff = target - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById(id).innerText = `${days} Days until ${label}`;
    };
    update(MATH_DATE, "math-timer", "Math Quiz");
    update(JMUN_DATE, "jmun-timer", "JMUN Legal Committee");
}

// --- START ---
setInterval(runTimers, 1000);
loadTennisStats();
document.getElementById('live-date').innerText = new Date().toDateString();
document.getElementById('question').innerText = questions[qIndex].q;


