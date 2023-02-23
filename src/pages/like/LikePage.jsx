import BackToHome from "../../components/BackToHome";
import { useSelector } from "react-redux";
import LikedVideoContainer from "./LikedVideoContainer";

const LikePage = () => {
  const likedList = useSelector((store) => store.like.likedPage);
  console.log("likedList :", likedList);
  return (
    <div className="min-h-screen">
      <BackToHome />
      <LikedVideoContainer video={likedList} />
    </div>
  );
};

export default LikePage;
