const charts = document.querySelectorAll(".chart");

charts.forEach(function (chart) {
  var ctx = chart.getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      datasets: [
        {
          label: "Total Attendance",
          data: [21, 21, 23, 25, 12, 13],
          backgroundColor: [
            "rgba(33, 150, 243, 0.2)",
            "rgba(0, 150, 136, 0.2)",
            "rgba(156, 39, 176, 0.2)",
            "rgba(255, 152, 0, 0.2)",
            "rgba(76, 175, 80, 0.2)",
            "rgba(255, 85, 94, 0.2)",
          ],

          borderColor: [
            "rgba(33, 150, 243, 1)",
            "rgba(0, 150, 136, 1)",
            "rgba(156, 39, 176, 1)",
            "rgba(255, 152, 0, 1)",
            "rgba(76, 175, 80, 1)",
            "rgba(255, 85, 94, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

$(document).ready(function () {
  $(".data-table").each(function (_, table) {
    $(table).DataTable();
  });
});
