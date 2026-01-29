document.getElementById("plannerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const subjectsInput = document.getElementById("subjects").value;
  const hours = Number(document.getElementById("hours").value);
  const weak = document.getElementById("weak").value.trim().toLowerCase();

  if (!subjectsInput || !hours) {
    alert("Please enter subjects and hours.");
    return;
  }

  let subjects = subjectsInput.split(",").map(s => s.trim());

  // Move weak subject to front if exists
  if (weak) {
    subjects = subjects.sort((a, b) => {
      if (a.toLowerCase() === weak) return -1;
      if (b.toLowerCase() === weak) return 1;
      return 0;
    });
  }

  let plan = "<h2>Your Study Plan for Today</h2>";
  let timePerSubject = Math.floor((hours * 60) / subjects.length);

  subjects.forEach(subject => {
    plan += `<p>📘 ${subject}: ${timePerSubject} minutes</p>`;
  });

  plan += "<p>⏸ Take a 5–10 minute break every hour.</p>";
  plan += "<p>🔁 Revise what you studied at the end.</p>";

  document.getElementById("result").innerHTML = plan;
});
