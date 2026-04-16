// --- 1. DATA CONFIGURATION ---
const MATH_DATE = new Date("May 1, 2026 09:00:00").getTime();
const JMUN_DATE = new Date("May 15, 2026 08:00:00").getTime();

const questions = [
    { q: "Double Criminality is needed for legal extradition.", a: true },
    { q: "A player is legally required to lend a racket to a rival.", a: false },
    { q: "Copyright protects work the moment it is 'fixed' in media.", a: true },
    { q: "In tennis, a 6-1 win equals a 'Bagel'.", a: false } // A 6-0 is a bagel!
];

let qIndex = 0;

// --- 2. THE TENNIS BAR (Based on your 6-1 win) ---
function loadTennisStats() {
    const bar = document.getElementById('tennis-bar');
    const text = document.getElementById('stats-text');
    const winRate = 85; // 6-1 is dominance
    
    setTimeout(() => {
        bar.style.width = winRate + "%";
        text.innerText = `LATEST MATCH: 6-1 WIN | DOMINANCE: ${winRate}%`;
    }, 500);
}

// --- 3. THE QUIZ LOGIC ---
function handleChoice(choice) {
    const feedback = document.getElementById('feedback');
    if (choice === questions[qIndex].a) {
        feedback.innerText = "✓ LOGIC VERIFIED";
        feedback.className = "success";
        setTimeout(nextQuestion, 1500);
    } else {
        feedback.innerText = "✗ LOGIC ERROR: RETRY";
        feedback.className = "danger";
    }
}

function nextQuestion() {
    qIndex = (qIndex + 1) % questions.length;
    document.getElementById('question').innerText = questions[qIndex].q;
    document.getElementById('feedback').innerText = "";
}

// --- 4. THE TIMERS ---
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

// --- INITIALIZE ---
setInterval(runTimers, 1000);
loadTennisStats();
document.getElementById('live-date').innerText = new Date().toDateString();
document.getElementById('question').innerText = questions[qIndex].q;

