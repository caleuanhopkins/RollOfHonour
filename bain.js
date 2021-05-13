const data = {
  labels: [
      'Aaron (7)',
      'Jaay (6)',
      'Dude (2)',
      'Rotary (1)',
      'Stu (1)',
      'Xainarc (1)',
      'Morgan (1)',
      'Aif (1)',
      'Gurne (1)',
      'Heel (1)'
    ],
datasets: [
  {
    label: "Total Freddos",
    data: [52, 38, 13, 8, 7, 7, 7, 5, 4, 4],
    backgroundColor: [
      "rgba(102, 209, 110, 0.2)",
      "rgba(201, 203, 207, 0.2)",
      "rgba(255, 205, 86, 0.2)",

    ],
    borderColor: [
      "rgb(102, 209, 110)",
      "rgb(201, 203, 207)",
      "rgb(255, 205, 86)",
    ],
    borderWidth: 1,
  },
],
};

const config = {
type: "bar",
data: data,
options: {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
},
};

var myChart = new Chart(document.getElementById("myChart"), config);
