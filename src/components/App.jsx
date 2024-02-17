import { Routes, Route } from "react-router-dom";
import MoviesPage from "../Pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../Pages/MovieDetailsPage/MovieDetailsPage";
import HomePage from "../Pages/HomePage/HomePage";
import NotFoundPage from "../Pages/NotFoundPage";
import Layout from "./Layout/Layout";
import MovieReviews from "./MovieReviews/MovieReviews";
import MovieCast from "./MovieCast/MovieCast";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/cast" element={<MovieCast/>} />
            <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
