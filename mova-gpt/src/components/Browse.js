import BannerContainer from "./BannerContainer";
import MoviesListContainer from "./MoviesListContainer";

const Browse = () => {
  return (
    <div>
      <div>
        <BannerContainer />
      </div>

      <div className="absolute top-[100vh] w-full">
        <MoviesListContainer />
      </div>

      <div className="fixed bottom-0 w-full h-40 bg-gradient-to-t from-black"></div>
    </div>
  );
};

export default Browse;
