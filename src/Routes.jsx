import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorMsg from "./components/Error";
import Home from "./pages/home/Home";
import { lazy, Suspense } from "react";
import Spinner from "./components/loading/Spinner";

const LikePage = lazy(() => import("./pages/like/LikePage"));
const Subscription = lazy(() => import("./pages/Subscription"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const WatchPage = lazy(() => import("./pages/watch/WatchPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    baseName: "js-tube.vercel.app/home",
    errorElement: <ErrorMsg />,
    children: [
      { path: "/home", element: <Home /> },

      {
        path: "/search",
        element: (
          <Suspense fallback={<Spinner />}>
            <SearchPage />
          </Suspense>
        ),
      },
      {
        path: "/watch/:id",
        element: (
          <Suspense fallback={<Spinner />}>
            <WatchPage />
          </Suspense>
        ),
      },
      {
        path: "/profile",
        element: (
          <Suspense fallback={<Spinner />}>
            <ProfilePage />
          </Suspense>
        ),
      },
      {
        path: "/subscriptions",
        element: (
          <Suspense fallback={<Spinner />}>
            <Subscription />
          </Suspense>
        ),
      },
      {
        path: "/liked",
        element: (
          <Suspense fallback={<Spinner />}>
            <LikePage />
          </Suspense>
        ),
      },
    ],
  },
]);
