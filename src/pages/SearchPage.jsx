import VideoShimmer from "../components/loading/VideoShimmer";
import BackToHome from "../components/BackToHome";

const SearchPage = () => {
  return (
    <div className="min-h-screen">
      {" "}
      <BackToHome />
      <div>
        <VideoShimmer />
      </div>
    </div>
  );
};

export default SearchPage;
