const data = {
    labels: [
        'Rosco',
        'Rotary',
        'Jaay',
        'Sweaty',
        'Eazy',
        'HYB',
        'Mags',
        'Cal',
        'Morgan',
        'Heel',
        'Harold',
        'Aaron',
        'Sunny',
        'Xainarc',
        'Stu',
        'Peek',
        'Croppy',
        'Aidan',
        'Sulk',
        'Maks',
        'DMMacdonald',
        'Steven',
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
      label: "Total Stars",
      data: [260, 249, 192, 181, 179, 178, 155, 151, 144, 105, 97, 95, 93, 90, 53, 35, 28, 27, 27, 23, 17, 16, 15, 14, 9, 9, 8, 6, 5, 5, 4, 4],
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
