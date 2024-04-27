

var ctx = document.getElementById('lineChartFishTemp').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['12:00P', '12:30P', '1:00P', '1:30P', '2:00P', '2:30P', '3:00P', '3:30P', '4:00P', '4:30P', '5:00P', '5:30P'],
        datasets: [{
            label: 'Temperature in C',
            data: [28, 28, 28, 29, 28, 29, 29, 30, 28, 27, 28, 29],
            backgroundColor: [
                'rgba(85,85,85, 1)'
            ],
            borderColor: 'rgb(41, 155, 99)',

            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});