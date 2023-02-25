import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomePageCache } from "../../app/features/appSlice";
import { baseURL, key2, key3, key } from "../../config";
import TagList from "./TagList";
import VideoContainer from "./VideoContainer";

const Home = () => {
  const dispatch = useDispatch();

  const query = useSelector((store) => store.tags.keyWord);
  const videoList = useSelector((store) => store.app.homePageVids);

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchData = async () => {
    const result = await fetch(
      `${baseURL}/search?part=snippet&maxResults=25&q=${query}&key=${key}`
    );
    const data = await result.json();
    dispatch(HomePageCache(data));
  };

  return (
    <div className="p-2 pl-0  min-h-screen">
      <TagList />
      <VideoContainer video={videoList} />
    </div>
  );
};

export default Home;
