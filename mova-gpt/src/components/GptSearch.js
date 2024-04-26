import { useRef } from "react";
import { useSelector } from "react-redux";
import { languageRes } from "../utils/langConstants";

const GptSearch = () => {
  const searchRef = useRef(null);
  const currentLang = useSelector((store) => store.lang.currentLang);

  return (
    <div className="flex w-full min-h-screen justify-center pt-24 bg-[#121418]">
      <form className="flex h-fit gap-2">
        <input
          ref={searchRef.current}
          placeholder={languageRes[currentLang].searchPlaceholder}
          className="h-[2.5rem] bg-[#333333] text-white placeholder:text-[#8C8C8C] text-lg sm:w-[500px]  p-6 font-sm rounded-md"
          type="text"
        />
        <button className="font-sans text-lg font-semibold text-white py-2 px-4 rounded-lg cursor-pointer bg-red-600">
          {languageRes[currentLang].searchText}
        </button>
      </form>
    </div>
  );
};

export default GptSearch;
