import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetails } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constants";
import MovieDetails from "./MovieDetails";
import MovieMetaDetails from "./MovieMetaDetails";

const MovieDetailsContainer = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const movieDetail = useSelector(
    (store) => store.movie.moviesList.movieDetail
  );

  const fetchMovieDetails = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "?append_to_response=casts,videos,images,releases&language=en-US",
      OPTIONS
    );
    const data = await response.json();
    console.log(data);
    dispatch(addMovieDetails(data));
  };

  useEffect(() => {
    fetchMovieDetails();

    return () => dispatch(addMovieDetails(null));
  }, []);

  return !movieDetail ? (
    <div className="bg-[#121418] w-full h-screen flex items-center justify-center">
      <p className="w-[130px] h-fit  font-sans text-xl text-white py-2 px-4 rounded-lg cursor-pointer bg-red-600 mt-6 ">
        Loading ...
      </p>
    </div>
  ) : (
    <div className="bg-[#121418]">
      <MovieDetails movieDetail={movieDetail} />
      <MovieMetaDetails detail={movieDetail} />
    </div>
  );
};

export default MovieDetailsContainer;
