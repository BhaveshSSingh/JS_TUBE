import { createBrowserRouter } from "react-router-dom";
import App from "./App";
// import Body from "./components/Body";
import ErrorMsg from "./components/Error";
import Home from "./pages/home/Home";
import LikePage from "./pages/LikePage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import Subscription from "./pages/Subscription";
import WatchPage from "./pages/watch/WatchPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    baseName: "js-tube.vercel.app/home",

    errorElement: <ErrorMsg />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/search", element: <SearchPage /> },
      { path: "/watch/:id", element: <WatchPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/subscriptions", element: <Subscription /> },
      { path: "/liked", element: <LikePage /> },
    ],
  },
]);
