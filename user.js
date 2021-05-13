const data = {
    labels: [
        'Rosco',
        'Rotary',
        'Jaay',
        'Sweaty',
        'Bruce Leroy',
        'Eazy',
        'Mags',
        'Sunny',
        'Cal',
        'Morgan',
        'Heel',
        'Aaron',
        'Croppy',
        'Stu',
        'Harold',
        'Xainarc',
        'Sulk',
        'Maks',
        'Peek',
        'Steven',
        'IrnBruh',
        'Gurne',
        'Chris',
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
      data: [29, 25, 21, 21, 19, 19, 15, 13, 12, 12, 12, 10, 8, 7, 6, 4, 4, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1],
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
