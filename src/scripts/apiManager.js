function getMovies() {
    const movieUrl = "http://localhost:8088/movies";
    fetch(movieUrl)
      .then(resp => resp.json())
      .then(moviesFromApi => {
        renderMovies(moviesFromApi);
      });
  }
