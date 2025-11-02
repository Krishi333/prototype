new Chart( document.getElementById('taskStatusPieChart'), {
    type: 'pie',
    data: {
        labels: ['Completed', 'Ongoing', 'Overdue'],
        datasets: [{
            label: '# of Tasks',
            data: [76, 45, 12],
            borderWidth: 1
        }]
    }
 });


new Chart(document.getElementById('taskDistributionNumber'), {
    type: 'bar',
    data: {
        labels: ['Rachel Green', 'Phoebe Buffay', 'Ross Geller', 'Chandler Bing', 'Monica Geller', 'Joey Tribbiani'],
        datasets: [{
            label: '# of Ongoing Tasks',
            data: [16,5,8,5,8,3],
      }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Employee"
                }
            },
            y: {
            beginAtZero: true,
            title: {
                display: true,
                text: "Number of Tasks Assigned"
            }
            }
        }
    }
});
