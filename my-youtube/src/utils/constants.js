import {
  cricket,
  home,
  movie,
  music,
  shop,
  trending,
  watchLater,
} from "../assets";

export const sidebarItemMain = [
  {
    name: "Home",
    to: "/",
    src: home,
  },
  {
    name: "Watch Later",
    to: "/",
    src: watchLater,
  },
];

export const sidebarItemExplore = [
  {
    name: "Trending",
    to: "/",
    src: trending,
  },
  {
    name: "Shopping",
    to: "/",
    src: shop,
  },
  { name: "Cricket", to: "/", src: cricket },
  {
    name: "Movie",
    to: "/",
    src: movie,
  },
  {
    name: "Music",
    to: "/",
    src: music,
  },
];
