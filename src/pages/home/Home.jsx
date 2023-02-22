import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseURL, fetchSearchedVids, key2 } from "../../config";
import TagList from "./TagList";
import VideoContainer from "./VideoContainer";

const Home = () => {
  const [searchVideos, setSearchVideos] = useState([]);
  console.log("searchVideos :", searchVideos);

  const selectedTag = useSelector((store) => store.tags.keyWord);
  console.log("selectedTag :", selectedTag);

  // useEffect(() => {
  //   fetchSearchedVids(setSearchVideos, selectedTag);
  // }, [selectedTag]);

  console.log(" in tags:", searchVideos);
  return (
    <div className="p-2 pl-0  min-h-screen">
      <TagList />
      <VideoContainer video={searchVideos} />
    </div>
  );
};

export default Home;
