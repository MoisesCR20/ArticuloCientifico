// script.js
var ctx = document.getElementById('graficoPsicologos').getContext('2d');
var grafico = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Carga laboral", "Introspección", "Creencias filosóficas", "Otras razones"],
        datasets: [{
            label: 'Porcentaje de Psicólogos (%)',
            data: [45, 32, 15, 8],
            backgroundColor: ['blue', 'green', 'orange', 'red']
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 50
            }
        }
    }
});