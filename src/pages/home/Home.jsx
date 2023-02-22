import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseURL, fetchSearchedVids, key2 } from "../../config";
import TagList from "./TagList";
import VideoContainer from "./VideoContainer";

const Home = () => {
  const [searchVideos, setSearchVideos] = useState([]);

  const query = useSelector((store) => store.tags.keyWord);

  useEffect(() => {
    fetchSearchedVids(setSearchVideos, query);
  }, [query]);

  return (
    <div className="p-2 pl-0  min-h-screen">
      <TagList />
      <VideoContainer video={searchVideos} />
    </div>
  );
};

export default Home;
