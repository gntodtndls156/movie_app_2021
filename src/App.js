import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    this.setState({ movies: movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className={"movies"}>
        {isLoading ? (
          <div className={"loader"}>
            <span className={"loader_text"}>Loading...</span>
          </div>
        ) : (
          movies.map((movie) => {
            console.log(movie);
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                poster={movie.medium_cover_image}
                summary={movie.summary}
                title={movie.title}
                year={movie.year}
                genres={movie.genres}
              />
            );
          })
        )}
      </section>
    );
  }
}

export default App;
