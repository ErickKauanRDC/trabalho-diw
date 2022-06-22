//make a request function to the movie db api
const fetchApi = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

window.onload = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=37aa9a1d15fe78108fc3457da35e78c2`;
    const data = await fetchApi(url);
    console.log(data);
    const movieList = document.querySelector('.movie-list');
    data.results.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.addEventListener('click', () => {
            window.location.href = `https://www.themoviedb.org/movie/${movie.id}`;
        }
        );
        movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p>${movie.overview}</p>
        `;
        movieList.appendChild(movieElement);
    }
    );
}

