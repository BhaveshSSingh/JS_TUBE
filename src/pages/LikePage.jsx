import { Link } from "react-router-dom";
import VideoContainer from "./home/VideoContainer";
import BackToHome from "../components/BackToHome";

const LikePage = () => {
  return (
    <div className="min-h-screen">
      <BackToHome />
      <VideoContainer />
    </div>
  );
};

export default LikePage;
