import VideoShimmer from "../components/loading/VideoShimmer";
import BackToHome from "../components/BackToHome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchSearchedVids } from "../config";
import { Link } from "react-router-dom";
import VideoCard from "./home/VideoCard";

const SearchPage = () => {
  const [searchVideos, setSearchVideos] = useState([]);
  console.log("searchVideos :", searchVideos);

  const searchText = useSelector((store) => store.search.searchQuery);

  useEffect(() => {
    fetchSearchedVids(setSearchVideos, searchText);
  }, [searchText]);

  return (
    <div className="min-h-screen">
      <BackToHome />
      <div className="p-2 pt-1 pl-0 flex flex-wrap  h-[90%]  justify-center">
        {searchVideos.length === 0 ? (
          <VideoShimmer />
        ) : (
          <>
            {searchVideos.items.map((vid) => (
              <Link to={`/watch/${vid.id}`}>
                <VideoCard key={vid.id} videoData={vid} />
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
