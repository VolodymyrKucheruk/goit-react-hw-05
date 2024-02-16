import { useEffect, useState } from "react";
import css from "./MovieDetailsPage.module.css";
import toast from "react-hot-toast";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../../api";

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const { location } = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const fetchedMoviesDetails = await getMovieDetails(movieId, {
          abortController: controller.signal,
        });
        setMovieDetails(fetchedMoviesDetails.results);
      } catch {
        toast.error("Something was wrong", {
          position: "top-right",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
    return () => controller.abort();
  }, [movieId]);

  return (
    <>
      <NavLink to="/">Go Back</NavLink>
      <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} />
    </>
  );
};
export default MovieDetailsPage;
