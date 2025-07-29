document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("liveMatches");

  const dummyMatch = {
    teams: ["Springboks", "All Blacks"],
    score: "17 - 20",
    status: "Full Time"
  };

  container.innerHTML = `
    <p><strong>${dummyMatch.teams[0]}</strong> vs <strong>${dummyMatch.teams[1]}</strong></p>
    <p>Score: ${dummyMatch.score}</p>
    <p>Status: ${dummyMatch.status}</p>
  `;
});
