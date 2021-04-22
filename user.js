const data = {
    labels: [
        'Rosco',
        'Rotary',
        'Jaay',
        'Eazy',
        'Sweaty',
        'Bruce Leroy',
        'Cal',
        'Sunny',
        'Morgan',
        'Heel',
        'Croppy',
        'Aaron',
        'Harold',
        'Mags',
        'Stu',
        'Maks',
        'Peek',
        'Xainarc',
        'IrnBruh',
        'Sulk',
        'Chris',
        'Dany',
        'Dylan',
        'Paul',
        'Lainncli',
        'Steven',
        'Walnut',
        'Darren'
      ],
  datasets: [
    {
      label: "Starred Messages",
      data: [23, 20, 19, 18, 18, 13, 11, 11, 9, 8, 8, 7, 6, 6, 6, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
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
