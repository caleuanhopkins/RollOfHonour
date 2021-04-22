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
        'Sulk'
      ],
    datasets: [{
      label: 'Share of Stars',
      data: [13.48, 10.12, 8.35, 8.12, 7.64, 7.25, 6.15, 4.89, 4.33, 3.78, 3.47, 3.31, 3.31, 2.92, 2.21, 1.81, 1.73, 1.5, 1.12, 0.87],
      backgroundColor: [
        "rgb(102, 209, 110)",
        "rgb(201, 203, 207)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
  };

  var myChart = new Chart(document.getElementById("myChart"), config);