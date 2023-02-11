// import Pagination from "./Pagination";
import TagList from "./TagList";
import VideoContainer from "./VideoContainer";

const Body = () => {
  return (
    <div className="p-2 h-screen">
      <TagList />
      <VideoContainer />
      {/* <Pagination /> */}
    </div>
  );
};

export default Body;
