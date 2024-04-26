import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_BASE_URL, OPTIONS } from "../utils/constants";
import { addMoviesList } from "../utils/movieSlice";
import BannerCard from "./BannerCard";

const BannerContainer = () => {
  const [currentMovie, setCurrentMovie] = useState(null);

  const moviesList = useSelector(
    (store) => store.movie.moviesList.bannerMovies
  );

  const dispatch = useDispatch();
  async function fetchMovieDetails() {
    try {
      const moviesData = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2",
        OPTIONS
      );
      const movies = await moviesData.json();
      dispatch(addMoviesList(movies.results));

      const { id, backdrop_path, original_title, overview } = movies.results[0];
      setCurrentMovie({ id, backdrop_path, original_title, overview });
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const handleUpdate = (currId) => {
    const result = moviesList.filter((item) => item.id === currId);
    const { id, backdrop_path, original_title, overview } = result[0];
    setCurrentMovie({ id, backdrop_path, original_title, overview });
  };

  return moviesList == null && currentMovie == null ? (
    <p className="text-center">Loading</p>
  ) : (
    <div className="static max-h-[92vh] w-full outline-neutral-300">
      <div className="h-full">
        <img
          alt="banner"
          src={IMAGE_BASE_URL + "w1280" + currentMovie?.backdrop_path}
          className="absolute  top-0 w-full h-full object-cover"
        />
      </div>

      <div className="absolute h-[92vh] bg-gradient-to-br from-black  w-full"></div>

      {currentMovie && (
        <div className="absolute top-[20%] left-[5%] max-w-[80%] sm:max-w-[40%]">
          <h1 className="text-white font-sans font-bold sm:text-6xl text-3xl">
            {currentMovie.original_title}
          </h1>
          <p className="font-sans text-lg line-clamp-3 mt-4 text-gray-200 ">
            {currentMovie.overview}
          </p>

          <div className="mt-4 flex gap-4">
            <button className="font-sans font-semibold text-md text-white py-2 px-4 rounded-lg cursor-pointer bg-red-600">
              Play Now
            </button>
            <button className="font-sans font-semibold bg-gray-400 bg-opacity-70 text-white py-2 px-4 rounded-lg">
              More Info
            </button>
          </div>
        </div>
      )}

      <div className="absolute bottom-2 left-[28%] flex  flex-nowrap gap-4 w-[72%]  bg-black bg-opacity-40 p-4 overflow-x-auto rounded-lg">
        {moviesList &&
          currentMovie !== null &&
          moviesList.map((movie, index) => (
            <BannerCard
              key={movie.id + "" + index}
              movie={movie}
              active={currentMovie.id}
              onUpdate={handleUpdate}
            />
          ))}
      </div>
    </div>
  );
};

export default BannerContainer;
