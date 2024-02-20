import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("../Pages/HomePage/HomePage.jsx"));
const MovieDetailsPage = lazy(() =>
  import("../Pages/MovieDetailsPage/MovieDetailsPage.jsx")
);
const MoviesPage = lazy(() => import("../Pages/MoviesPage/MoviesPage.jsx"));
const NotFoundPage = lazy(() => import("../Pages/NotFoundPage.jsx"));
import MovieCast from "./MovieCast/MovieCast";
import MovieReviews from "./MovieReviews/MovieReviews";
import Loader from "./Loader/Loader.jsx";
const Layout = lazy(() => import("./Layout/Layout.jsx"));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="/movies/:movieId/cast" element={<MovieCast />} />
              <Route
                path="/movies/:movieId/reviews"
                element={<MovieReviews />}
              />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
