const data = {
    labels: [
        'Rotary',
        'Rosco',
        'Jaay',
        'Eazy',
        'Sweaty',
        'HYB',
        'Mags',
        'Morgan',
        'Cal',
        'Heel',
        'Sunny',
        'Xainarc',
        'Aaron',
        'Harold',
        'Peek',
        'Stu',
        'Croppy',
        'Sulk',
        'Aidan',
        'Maks',
        'Steven',
        'DMMacdonald',
        'IrnBruh',
        'Gurne',
        'Chris',
        'Pudge',
        'Dany',
        'Dylan',
        'Paul',
        'Lainncli',
        'Walnut',
        'Darren'
      ],
  datasets: [
    {
      label: "Starred Messages",
      data: [39, 36, 36, 32, 31, 26, 23, 21, 20, 17, 17, 17, 16, 12, 8, 8, 8, 6, 4, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
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
