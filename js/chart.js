var ctx = document.getElementById('tempChart').getContext('2d');
var tempChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['11/02/2021', '12/02/2021', '13/02/2021', '14/02/2021', '15/02/2021', '16/02/2021'],
    datasets: [{
      fill: false,
      label: '°C',
      data: [12, 19, 3, 5, 2, 3],
      borderColor: 'rgb(255, 204, 0)',
      borderWidth: 2
    }]
  },
  options: {
    animation: {
      duration: 0
    },
    hover: {
      animationDuration: 0
    },
    responsiveAnimationDuration: 0,
    legend: {
      display: false,
    }
  }
});
