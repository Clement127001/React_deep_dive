import { useSelector } from "react-redux";
import Suggestion from "./Suggestion";

const SuggestionList = () => {
  const { videosList: suggestedVideos } = useSelector((store) => store.video);

  return (
    <div className="flex flex-col flex-wrap gap-4">
      {suggestedVideos.map((item) => (
        <Suggestion data={item} key={item.id} />
      ))}
    </div>
  );
};

export default SuggestionList;
