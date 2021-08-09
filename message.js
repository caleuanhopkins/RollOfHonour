const data = {
    labels: [
        'DMMacdonald',
        'Harold',
        'Dany',
        'Maks',
        'Cal',
        'IrnBruh',
        'Rosco',        
        'Gurne',
        'Morgan',
        'HYB',
        'Aidan',
        'Mags',
        'Stu',
        'Rotary',
        'Heel',
        'Dylan',
        'Aaron',
        'Peek',
        'Sweaty',
        'Eazy',
        'Sunny',
        'Xainarc',
        'Jaay',
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
      data: [8.5, 8.1, 8, 7.7, 7.6, 7.5, 7.2, 7, 6.9, 6.9, 6.8, 6.7, 6.6, 6.4, 6.2, 6, 5.9, 5.8, 5.8, 5.6, 5.5, 5.3, 5.3, 5, 5, 4.5, 4.5, 4.5, 4, 4, 3.5],
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
