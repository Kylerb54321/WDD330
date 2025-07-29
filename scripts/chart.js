document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("myChart").getContext("2d");

  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Match 1", "Match 2", "Match 3"],
      datasets: [{
        label: "Tries Scored",
        data: [2, 1, 3],
        backgroundColor: "#FACC15"
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});
