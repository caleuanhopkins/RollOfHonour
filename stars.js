const data = {
    labels: [
        'Rosco',
        'Rotary',
        'Bruce Leroy',
        'Jaay',
        'Eazy',
        'Sweaty',
        'Mags',
        'Cal',
        'Morgan',
        'Heel',
        'Sunny',
        'Aaron',
        'Harold',
        'Stu',
        'Croppy',
        'Xainarc',
        'Maks',
        'Peek',
        'Sulk',
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
      label: "Total Stars",
      data: [208, 164, 124, 116, 115, 115, 99, 86, 83, 76, 70, 61, 44, 43, 28, 24, 23, 22, 18, 16, 15, 14, 9, 8, 6, 5, 5, 4, 4],
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
