import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { loginReducer } from "./app/features/userSlice";
import Footer from "./components/Footer";
import Nav from "./components/nav/Nav";
import Panel from "./components/Panel";
import { auth } from "./firebase";
import Login from "./pages/LoginPage";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    navigate("/watch/:id");
  }, []);

  const user = useSelector((store) => store.user.user);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          loginReducer({
            displayName: user.displayName,
            email: user.email,
            photo: user.photoURL,
            userID: user.uid,
          })
        );
      }
    });
  }, []);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className=" bg-white text-black dark:bg-gray-900 dark:text-gray-200 w-full h-full">
          <Nav />
          <div className="flex">
            <Panel />
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
      {/* <div className=" bg-white text-black dark:bg-gray-900 dark:text-gray-200 w-full h-full">
        <Nav />
        <div className="flex">
          <Panel />
          <Outlet />
        </div>
        <Footer />
      </div> */}
    </>
  );
}

export default App;
