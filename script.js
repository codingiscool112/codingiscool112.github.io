function openCalendar() { document.getElementById("calendar-modal").style.display = "block"; }
function closeCalendar() { document.getElementById("calendar-modal").style.display = "none"; }

function addTask() {
    let val = document.getElementById('task-input').value;
    if (val) {
        let li = document.createElement('li');
        li.innerHTML = "⚡ " + val;
        li.style.listStyle = "none";
        li.style.marginTop = "10px";
        document.getElementById('task-list').appendChild(li);
        document.getElementById('task-input').value = "";
    }
}

function init() {
    // Set Tennis Bar
    setTimeout(() => { 
        document.getElementById('tennis-bar').style.width = "85%";
        document.getElementById('stats-text').innerText = "MATCH RESULT: 6-1 WIN | DOMINANCE: 85%";
    }, 500);

    // Set Timer
    const mathDate = new Date("May 1, 2026").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const diff = mathDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById('math-timer').innerText = `>> ${days} Days until Math Quiz`;
    }, 1000);
}

window.onclick = function(e) {
    if (e.target == document.getElementById("calendar-modal")) closeCalendar();
}

init();


