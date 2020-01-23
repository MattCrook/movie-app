const movieFactory = (movie) => {
    return `
       <section class="movie">
       <div>${movie.title}</div>
       <div>${movie.releaseDate}</div>
       </section>
       `;
  };
const renderMovies = movie => {
  const container = document.querySelector("#movie_container");
  movie.forEach(movie => {
    const movieHtml = movieFactory(movie);
    container.innerHTML += movieHtml;
  });
};
