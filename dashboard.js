
const ctxLine = document.getElementById("linechart");
new Chart(ctxLine, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [{
      label: "Sales",
      data: [12, 19, 3, 5, 2],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      tension: 0.3
    }]
  },
  options: {
    responsive: true
  }
});

const ctxRadar = document.getElementById("radarChart");
new Chart(ctxRadar, {
  type: "radar",
  data: {
    labels: ["Speed", "Reliability", "Comfort", "Safety", "Efficiency"],
    datasets: [{
      label: "Car A",
      data: [65, 59, 90, 81, 56],
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      borderColor: "rgba(153, 102, 255, 1)",
      pointBackgroundColor: "rgba(153, 102, 255, 1)"
    }]
  },
  options: {
    responsive: true
  }
});
