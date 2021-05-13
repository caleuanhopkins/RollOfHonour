const data = {
    labels: [
        'Dany',
        'Maks',
        'IrnBruh',
        'Harold',
        'Peek',
        'Rosco',
        'Cal',
        'Gurne',
        'Morgan',
        'Rotary',
        'Mags',
        'Bruce Leroy',
        'Heel',
        'Eazy',
        'Aaron',
        'Stu',
        'Xainarc',
        'Dylan',
        'Jaay',
        'Sweaty',
        'Sunny',
        'Steven',
        'Paul',
        'Lainncli',
        'Sulk',
        'Chris',
        'Walnut',
        'Darren',
        'Croppy'
      ],
  datasets: [
    {
      label: "Average Stars",
      data: [8, 7.7, 7.5, 7.3, 7.3, 7.2, 7.2, 7, 6.9, 6.6, 6.6, 6.5, 6.3, 6.1, 6.1, 6.1, 6, 6, 5.5, 5.5, 5.4, 5.3, 5, 5, 4.5, 4.5, 4, 4, 3.5],
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
