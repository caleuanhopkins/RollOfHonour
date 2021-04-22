const data = {
    labels: [
        'Dany',
        'Maks',
        'IrnBruh',
        'Rosco',
        'Harold',
        'Peek',
        'Cal',
        'Bruce Leroy',
        'Mags',
        'Morgan',
        'Rotary',
        'Xainarc',
        'Stu',
        'Aaron',
        'Heel',
        'Dylan',
        'Eazy',
        'Sulk',
        'Jaay',
        'Sweaty',
        'Sunny',
        'Paul',
        'Lainncli',
        'Chris',
        'Steven',
        'Walnut',
        'Darren',
        'Croppy'
      ],
  datasets: [
    {
      label: "Average Stars",
      data: [8, 7.7, 7.5, 7.4, 7.4, 7.3, 7.1, 7.1, 7, 6.9, 6.5, 6.3, 6.2, 6, 6, 6, 5.9, 5.5, 5.4, 5.4, 5, 5, 5, 4.5, 4, 4, 4, 3.5],
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
