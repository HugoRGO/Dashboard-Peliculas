let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
    if (pagina < 1000) {
        pagina += 1;
        cargarPelis();
    }
});

btnAnterior.addEventListener('click', () => {
    if (pagina > 1) {
        pagina -= 1;
        cargarPelis();
    }
});

const cargarPelis = async () => {
    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=26f709e6e4af83dacd385717505003ba&language=es-MX&page=${pagina}`);
        console.log(respuesta);

        if (respuesta.status === 200) {
            const datosRes = await respuesta.json();

            let peliculasTitulo = '';
            datosRes.results.forEach(pelicula => {
                peliculasTitulo += `
                <div class="pelicula"> 
                    <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path} " 
                    <h3 class="titulo">${pelicula.title}</h3>
                    <h3 class="titulo">${pelicula.vote_average}</h3>
                </div>
                `
            });

            document.getElementById('contenedor').innerHTML = peliculasTitulo

        } else if (respuesta.status === 401) {
            console.log('Introdusca una llave valida');
        } else if (respuesta.status === 404) {
            console.log('El elemento que buscas no existe');
        } else {
            console.log('Lo sentimos, hubo un error inesperado');
        }

    } catch(error) {

        console.log(error);

    }
}

cargarPelis ();