import { createBrowserRouter } from "react-router-dom";
import App from "./App";
// import Body from "./components/Body";
import ErrorMsg from "./components/Error";
// import ProfilePage from "./pages/ProfilePage";
// import WatchPage from "./pages/WatchPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorMsg />,
    // children: [
    //   {
    //     // path: "/home",
    //     // element: <Body />,
    //   },
    //   { path: "/watch", element: <WatchPage /> },
    //   { path: "/profile", element: <ProfilePage /> },
    // ],
  },
]);
