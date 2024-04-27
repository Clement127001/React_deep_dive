import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetails } from "../utils/movieSlice";
import { IMAGE_BASE_URL, OPTIONS } from "../utils/constants";
import MovieDetails from "./MovieDetails";

const movieDetail = {
  adult: false,
  backdrop_path: "/lP0G6f00CjOKdRECyGrT0kaMSrL.jpg",
  belongs_to_collection: null,
  budget: 0,
  genres: [
    {
      id: 18,
      name: "Drama",
    },
  ],
  homepage: "",
  id: 383634,
  imdb_id: "tt0202500",
  origin_country: ["JP"],
  original_language: "ja",
  original_title: "肉体の門",
  overview:
    "Prostitutes in burnt out Tokyo ghetto of post-WWII Japan peddle their flesh and save one-third of their money for a proposed dancehall to be named Paradise. The hookers live in a bombed-out building, but they accept the precarious situation with typical resolve.",
  popularity: 345.485,
  poster_path: "/raNbLci95MJ3L3dMnG7L7bD37lY.jpg",
  production_companies: [
    {
      id: 5822,
      logo_path: "/qyTbRgCyU9NLKvKaiQVbadtr7RY.png",
      name: "Toei Company",
      origin_country: "JP",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "JP",
      name: "Japan",
    },
  ],
  release_date: "1988-04-09",
  revenue: 0,
  runtime: 119,
  spoken_languages: [
    {
      english_name: "Japanese",
      iso_639_1: "ja",
      name: "日本語",
    },
  ],
  status: "Released",
  tagline: "",
  title: "Carmen 1945",
  video: false,
  vote_average: 3,
  vote_count: 7,
  casts: {
    cast: [
      {
        adult: false,
        gender: 1,
        id: 975666,
        known_for_department: "Acting",
        name: "Rino Katase",
        original_name: "Rino Katase",
        popularity: 10.403,
        profile_path: "/yC1tS3nUekmwyTIn6YOJrIyfkXE.jpg",
        cast_id: 7,
        character: "",
        credit_id: "56c7142ac3a3680d44006ec9",
        order: 0,
      },
      {
        adult: false,
        gender: 1,
        id: 117464,
        known_for_department: "Acting",
        name: "Yûko Natori",
        original_name: "Yûko Natori",
        popularity: 12.97,
        profile_path: "/2HpVR81BqoZeuz9EJGZyzvnZATy.jpg",
        cast_id: 8,
        character: "",
        credit_id: "56c71435c3a3680d57006051",
        order: 1,
      },
      {
        adult: false,
        gender: 2,
        id: 70133,
        known_for_department: "Acting",
        name: "Jinpachi Nezu",
        original_name: "Jinpachi Nezu",
        popularity: 8.511,
        profile_path: "/wMGQ7RgZ1vf6siHhnnqbb63Yks0.jpg",
        cast_id: 9,
        character: "",
        credit_id: "56c7143fc3a3680d57006053",
        order: 2,
      },
      {
        adult: false,
        gender: 1,
        id: 1580096,
        known_for_department: "Acting",
        name: "Kanô Miyuki",
        original_name: "Kanô Miyuki",
        popularity: 2.408,
        profile_path: "/kGIJXo1ZRLr27KfiRDC56ygCAiw.jpg",
        cast_id: 11,
        character: "",
        credit_id: "56c71453c3a3680d49006a96",
        order: 3,
      },
      {
        adult: false,
        gender: 1,
        id: 554605,
        known_for_department: "Acting",
        name: "Kazuyo Matsui",
        original_name: "Kazuyo Matsui",
        popularity: 4.445,
        profile_path: "/aYIxgSocdVa8YZN9o9yMlUlkwKd.jpg",
        cast_id: 12,
        character: "",
        credit_id: "56c7145cc3a3680d4e006ef7",
        order: 4,
      },
      {
        adult: false,
        gender: 1,
        id: 1249224,
        known_for_department: "Acting",
        name: "Senri Yamazaki",
        original_name: "Senri Yamazaki",
        popularity: 4.767,
        profile_path: "/7le41vMLWpmJfrQECaaGaCKQmeU.jpg",
        cast_id: 13,
        character: "",
        credit_id: "56c714679251411fdd001cf5",
        order: 5,
      },
      {
        adult: false,
        gender: 2,
        id: 82963,
        known_for_department: "Acting",
        name: "Tsunehiko Watase",
        original_name: "Tsunehiko Watase",
        popularity: 6.2,
        profile_path: "/4CAvKNwLWZfQINGBxpTthk6452i.jpg",
        cast_id: 16,
        character: "",
        credit_id: "593e565592514105e202d5d9",
        order: 6,
      },
    ],
    crew: [
      {
        adult: false,
        gender: 2,
        id: 125085,
        known_for_department: "Directing",
        name: "Hideo Gosha",
        original_name: "Hideo Gosha",
        popularity: 5.366,
        profile_path: "/ak9ANRDXGu3gFkAwDsWcmpiyafb.jpg",
        credit_id: "56c713a09251412454006590",
        department: "Directing",
        job: "Director",
      },
      {
        adult: false,
        gender: 2,
        id: 142716,
        known_for_department: "Writing",
        name: "Kazuo Kasahara",
        original_name: "Kazuo Kasahara",
        popularity: 9.26,
        profile_path: "/lZkddOO9EeVTxHYqOpj4EXCXZ61.jpg",
        credit_id: "56c713b3c3a3680d54006a14",
        department: "Writing",
        job: "Writer",
      },
      {
        adult: false,
        gender: 2,
        id: 1363330,
        known_for_department: "Writing",
        name: "Taijirō Tamura",
        original_name: "Taijirō Tamura",
        popularity: 3.446,
        profile_path: "/nRtV1KQ6vGfh3WpIywaB8BhASiF.jpg",
        credit_id: "56c713ca925141245b0067a7",
        department: "Writing",
        job: "Novel",
      },
      {
        adult: false,
        gender: 2,
        id: 230528,
        known_for_department: "Production",
        name: "Shigeru Okada",
        original_name: "Shigeru Okada",
        popularity: 2.286,
        profile_path: "/x5SKg1XWGk5TbTVgjuiag6keOTQ.jpg",
        credit_id: "56c713e0c3a3680d4e006ee9",
        department: "Production",
        job: "Producer",
      },
      {
        adult: false,
        gender: 0,
        id: 95595,
        known_for_department: "Editing",
        name: "Isamu Ichida",
        original_name: "Isamu Ichida",
        popularity: 2.582,
        profile_path: null,
        credit_id: "56c714199251411fdd001ce5",
        department: "Editing",
        job: "Editor",
      },
      {
        adult: false,
        gender: 2,
        id: 554162,
        known_for_department: "Camera",
        name: "Fujio Morita",
        original_name: "Fujio Morita",
        popularity: 0.732,
        profile_path: "/unnqL260aqg0tnVoIVzXyyLenEF.jpg",
        credit_id: "57171e4cc3a3680160000149",
        department: "Camera",
        job: "Director of Photography",
      },
      {
        adult: false,
        gender: 0,
        id: 1580095,
        known_for_department: "Sound",
        name: "Moshifumi Izumimori",
        original_name: "Moshifumi Izumimori",
        popularity: 0.84,
        profile_path: null,
        credit_id: "57171e54c3a3686d30000359",
        department: "Sound",
        job: "Original Music Composer",
      },
    ],
  },
  videos: {
    results: [
      {
        iso_639_1: "en",
        iso_3166_1: "US",
        name: "肉体の門（予告編)",
        key: "c3qw5KSFcRQ",
        published_at: "2012-10-16T00:24:48.000Z",
        site: "YouTube",
        size: 480,
        type: "Trailer",
        official: false,
        id: "5a035a2c9251411201020721",
      },
    ],
  },
  images: {
    backdrops: [],
    logos: [],
    posters: [],
  },
  releases: {
    countries: [
      {
        certification: "",
        descriptors: [],
        iso_3166_1: "JP",
        primary: false,
        release_date: "1988-04-09",
      },
    ],
  },
};

const MovieDetailsContainer = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  // const movieDetail = useSelector(
  //   (store) => store.movie.moviesList.movieDetail
  // );

  // const fetchMovieDetails = async () => {
  //   const response = await fetch(
  //     "https://api.themoviedb.org/3/movie/" +
  //       movieId +
  //       "?append_to_response=casts,videos,images,releases&language=en-US",
  //     OPTIONS
  //   );
  //   const data = await response.json();
  //   console.log(data);
  //   dispatch(addMovieDetails(data));
  // };

  // useEffect(() => {
  //   fetchMovieDetails();

  //   return () => dispatch(addMovieDetails(null));
  // }, []);

  return !movieDetail ? (
    <div>Loading...</div>
  ) : (
    <MovieDetails movieDetail={movieDetail} />
  );
};

export default MovieDetailsContainer;
