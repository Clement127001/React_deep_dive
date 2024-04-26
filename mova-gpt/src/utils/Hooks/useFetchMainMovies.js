import { useEffect } from "react";
import { addMainMovies } from "../movieSlice";
import { OPTIONS, fetchURLs } from "../constants";
import { useDispatch, useSelector } from "react-redux";

export const useFetchMainMovies = () => {
  const mainMovies = useSelector((store) => store.movie.moviesList.mainMovies);
  const dispatch = useDispatch();
  const fetchMovies = async (url) => {
    const response = await fetch(url, OPTIONS);
    const data = await response.json();
    return data.results;
  };

  const fetchMutipleMovies = async () => {
    if (mainMovies.length > 0) return;

    let promises = fetchURLs.map((item) => fetchMovies(item));
    const result = await Promise.all(promises);

    dispatch(addMainMovies(result));
  };

  useEffect(() => {
    fetchMutipleMovies();
  }, []);
};
