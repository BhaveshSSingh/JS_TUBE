import { Outlet } from "react-router-dom";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className=" bg-white text-black dark:bg-gray-900 dark:text-white">
      {/* <LoginPage /> */}

      <Nav />
      <div className="flex">
        {/* <Panel /> */}
        <Outlet />
        {/* <Body /> */}
        {/* <WatchPage /> */}

        {/* <ProfilePage /> */}

        {/* Make this later  */}
        {/* <DataPage
          pageName={"Saved Videos"}
          noOfVideos={3}
          videos={"video data"}
        /> */}
      </div>
    </div>
  );
}

export default App;
