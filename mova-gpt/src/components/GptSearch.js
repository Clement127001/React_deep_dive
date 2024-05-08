import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchResults, toggleCompleteStatus } from "../utils/gptSlice";
import { languageRes } from "../utils/langConstants";
import { OPTIONS } from "../utils/constants";

const results = [
  "Avengers",
  "Justice league",
  "Harry Potter",
  "Spider man",
  "Guardians of the galaxy",
];

const GptSearch = () => {
  const searchRef = useRef(null);
  const currentLang = useSelector((store) => store.lang.currentLang);
  const dispatch = useDispatch();

  const fetchMovies = async (movie) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",

      OPTIONS
    );
    const data = await response.json();

    return data.results;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(toggleCompleteStatus(true));

    // console.log(searchRef.current.value);

    let moviePromiseArr = results.map((movie) => {
      return fetchMovies(movie);
    });
    const movieResults = await Promise.all(moviePromiseArr);

    dispatch(
      addSearchResults({ movieNames: results, movieLists: movieResults })
    );
  };

  const inputChangeHandler = () => {
    dispatch(toggleCompleteStatus(false));
  };

  return (
    <form className="flex h-fit gap-2" onSubmit={submitHandler}>
      <input
        ref={searchRef}
        placeholder={languageRes[currentLang].searchPlaceholder}
        className="h-[2.5rem] bg-[#333333] text-white placeholder:text-[#8C8C8C] text-lg sm:w-[500px]  p-6 font-sm rounded-md"
        type="text"
        onChange={inputChangeHandler}
      />
      <button className="font-sans text-lg font-semibold text-white py-2 px-4 rounded-lg cursor-pointer bg-red-600">
        {languageRes[currentLang].searchText}
      </button>
    </form>
  );
};

export default GptSearch;
