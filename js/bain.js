const data = {
  labels: [
      'Jaay (37)',
      'Aaron (27)',
      'Sulk (10)',
      'Rotary (10)',
      'Xainarc (8)',
      'Cal (8)',
      'Heel (7)',
      'Aidan (6)',
      'Morgan (4)',
      'Rosco (4)',
      'Mags (3)',
      'Sunny (3)',
      'Goldbuggg (3)',
      'Aif (2)',
      'Dazza_G (2)',
      'Gurne (2)',
      'Pudge (1)',
      'HYB (1)',
      'Stu (1)',
      'Lainncli (1)',
      'Sweaty (1)'
    ],
datasets: [
  {
    label: "Total Freddos",
    data: [225, 161, 55, 45, 51, 40, 27, 36, 24, 19, 21, 18, 15, 15, 12, 8, 10, 8, 7, 6, 4],
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
  {
    label: "Average Freddo Per Message",
    data: [6.1, 6, 5.5, 4.5, 6.4, 5, 3.9, 6, 6, 4.8, 7, 6, 5, 7.5, 6, 4, 10, 8, 7, 6, 4],
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
