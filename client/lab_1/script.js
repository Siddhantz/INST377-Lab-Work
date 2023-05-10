window.onload = function() {
    fetch('https://data.princegeorgescountymd.gov/resource/bzf2-94qx.json')
    .then(response => response.json())
    .then(data => {
        let typeCounts = {};
        data.forEach(item => {
            if (item.type in typeCounts) {
                typeCounts[item.type]++;
            } else {
                typeCounts[item.type] = 1;
            }
        });

        let types = Object.keys(typeCounts);
        let counts = Object.values(typeCounts);

        var ctx = document.getElementById('chart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: types,
                datasets: [{
                    data: counts,
                    backgroundColor: [
                        // You can add more colors if there are more types
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        });
    })
    .catch(error => console.error('Error:', error));
}
