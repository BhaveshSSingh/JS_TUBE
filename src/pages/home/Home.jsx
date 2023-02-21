import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseURL, key2 } from "../../config";
import TagList from "./TagList";
import VideoContainer from "./VideoContainer";

const Home = () => {
  // const [keyWord, setKeyWord] = useState("Javascript");

  // const keyWord = useSelector((store) => store.tags.keyWord);
  // console.log("keyWord :", keyWord);

  // const [video, setVideo] = useState([]);

  // useEffect(() => {
  //   fetchHomePageVids();
  // }, [keyWord]);

  // const fetchHomePageVids = async (keyWord) => {
  //   const result = await fetch(
  //     `${baseURL}/search?part=snippet&maxResults=25&q=${keyWord}&key=${key2}`
  //   );
  //   setVideo(result.json());
  //   return result.json();

  //   // return data;
  // };

  return (
    <div className="p-2 pl-0  min-h-screen">
      <TagList />
      <VideoContainer />
    </div>
  );
};

export default Home;
