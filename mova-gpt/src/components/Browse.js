import { useSelector } from "react-redux";
import BannerContainer from "./BannerContainer";
import MoviesListContainer from "./MoviesListContainer";
import GPTSearchContainer from "./GPTSearchContainer";

const Browse = () => {
  const showSearch = useSelector((store) => store.search.showSearch);
  return (
    <div>
      {showSearch ? (
        <GPTSearchContainer />
      ) : (
        // <div>This is the movies container, but it can't accessed now</div>
        <div>
          <div>
            <BannerContainer />
          </div>

          <div className="absolute top-[100vh] w-full">
            <MoviesListContainer />
          </div>
        </div>
      )}

      {/*  */}
      <div className="fixed bottom-0 w-full h-40 bg-gradient-to-t from-black"></div>
    </div>
  );
};

export default Browse;
