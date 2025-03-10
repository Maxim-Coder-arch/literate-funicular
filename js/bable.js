const ctx = document.getElementById('popularityChart').getContext('2d');
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(0, 183, 255, 1)");
gradient.addColorStop(1, "rgba(0, 183, 255, 0.2)");
const neonChart = new Chart(ctx, {
    type: 'bar', 
    data: {
        labels: [
            'Разработка мобильных приложений',
            'Искусственный интеллект',
            'Веб-разработка и дизайн',
            'Разработка на Python и Data Science',
            'Кибербезопасность и защита данных',
            'Игровая разработка'
        ],
        datasets: [{
            label: 'Что выбирают чаще? (%)',
            data: [35, 50, 60, 55, 40, 45], 
            borderColor: '#00b7ff',
            borderWidth: 3,
            backgroundColor: gradient, // используем градиентный фон для столбцов
            barThickness: 100, // толщина столбцов
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { labels: { color: "white" } },
            tooltip: { enabled: true, backgroundColor: "rgba(0, 183, 255, 0.8)" }
        },
        scales: {
            x: {
                ticks: { color: "#00b7ff" },
                grid: { color: "rgba(0, 183, 255, 0.2)" }
            },
            y: {
                ticks: { 
                    color: "#00b7ff", 
                    callback: value => value + "%"  
                },
                grid: { color: "rgba(0, 183, 255, 0.2)" },
                beginAtZero: true,
                max: 70 
            }
        },
        animation: {
            duration: 2500,
            easing: 'easeInOutQuad',
        }
    }
});
// function updateChart() {
//     neonChart.update();
// }

// ScrollReveal().reveal('#popularityChart', {
//     // viewFactor: 0.7, 
//     origin:'top',
//     distance:'50px',
//     opacity:0,
//     afterReveal: function () {
//         updateChart(); 
//     }
// });
