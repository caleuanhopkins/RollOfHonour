const data = {
    labels: [
        'Rosco',
        'Rotary',
        'Eazy',
        'Jaay',
        'Sweaty',
        'Bruce Leroy',
        'Cal',
        'Morgan',
        'Sunny',
        'Heel',
        'Harold',
        'Mags',
        'Aaron',
        'Stu',
        'Croppy',
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
      label: "Total Stars",
      data: [171, 129, 106, 103, 97, 92, 78, 62, 55, 48, 44, 42, 42, 37, 28, 23, 22, 19, 15, 11, 9, 8, 6, 5, 5, 4, 4, 4],
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
