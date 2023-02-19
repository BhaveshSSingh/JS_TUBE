// import Pagination from "./Pagination";
import TagList from "./TagList";
import VideoContainer from "./VideoContainer";

const Home = () => {
  return (
    <div className="p-2 pl-0  min-h-screen">
      <TagList />
      <VideoContainer />
      {/* <Pagination /> */}
    </div>
  );
};

export default Home;
