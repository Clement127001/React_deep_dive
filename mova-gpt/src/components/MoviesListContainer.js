import { useSelector } from "react-redux";
import { useFetchMainMovies } from "../utils/Hooks/useFetchMainMovies";
import MoviesList from "./MoviesList";
import { movieListTitle } from "../utils/constants";

const MoviesListContainer = () => {
  const mainMovies = useSelector((store) => store.movie.moviesList.mainMovies);

  useFetchMainMovies();

  if (mainMovies & (mainMovies.length == 0)) return;

  return (
    <div className="py-10 px-8 bg-[#121418] max-w-[100vw]">
      {mainMovies.map((item, index) => (
        <MoviesList
          key={("movie", index)}
          title={movieListTitle[index]}
          movies={item}
        />
      ))}
    </div>
  );
};

export default MoviesListContainer;
