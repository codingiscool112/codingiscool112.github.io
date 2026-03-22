let myClasses = JSON.parse(localStorage.getItem('studySphereClasses')) || [];
displayClasses();
function addClass() {
  const input = document.getElementById('classInput');
  const className = input.value.trim();
  if (className !=="") {
    myClasses.push(className);
    input.value = "";
    saveAndRefresh();
  }
}
function saveAndRefresh() {
  localStorage.setItem('studySphereClasses', JSON.stringify(myClasses));
  displayClasses();
}
function displayClasses() {
  const question = document.getElementById('classList');
  listDiv.innerHTML += '<article class="class-card">${className}<article>`;
});
}
function askAI() {
  const question = document.getElementById('chatInput').value;
  const responseDiv = document.getElementById('chatResponse');
  if (myClasses.length === 0) {
    responseDiv.style.display = "block";
    responseDiv.innerHTML = `<strong>Bot:</strong> "Since you're taking ${myClasses.join(' and ')}, I'd suggest starting with a quick review of ${myClasses0} for your question: '${question} '"`:
