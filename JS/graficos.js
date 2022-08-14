import { urlAPI } from "./urlAPI.js";

let calificacion = [];
let nombrePeli = [];

const apiData = async () => {
    const response = await fetch(urlAPI)
    const datapoints = await response.json()
    console.log(datapoints);

    const califProm = datapoints.results.map((amount) => amount.vote_average)
    calificacion = califProm

    const Nombre = datapoints.results.map((NombreP) => NombreP.title)
    nombrePeli = Nombre
}


const drawChart = async() => {
    await apiData()

    console.log(nombrePeli);
    console.log(calificacion);

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nombrePeli,
            datasets: [{
                label: 'Promedio de Calificación',
                data: calificacion,
                backgroundColor:[
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor:[
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
            plugins: {
                legend: {
                position: 'top',
                },
                title: {
                display: true,
                text: ''
                }
            }
        },
    });

}

drawChart();