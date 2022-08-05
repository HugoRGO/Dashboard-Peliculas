const imprimirGrafica = () => {
    renderModelsChart();
}

const renderModelsChart = () => {
    const data = {
        labels: ['Uno','Dos','Tres'],
        datasets: [{
            data: [10, 20, 30]
        }]
    }

    new Chart('grafica', {type: 'doughnut', data})
}

imprimirGrafica();