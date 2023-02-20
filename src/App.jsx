import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { fetchHomePageVids } from "./app/features/appSlice";
import Nav from "./components/nav/Nav";
import Panel from "./components/Panel";
// import Login from "./pages/LoginPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomePageVids());
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <>
      {/* <Login /> */}
      <div className=" bg-white text-black dark:bg-gray-900 dark:text-gray-200 w-full h-full">
        <Nav />
        <div className="flex">
          <Panel />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
