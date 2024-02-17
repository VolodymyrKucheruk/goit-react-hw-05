import { useEffect, useState } from "react";
import css from "./MovieDetailsPage.module.css";
import toast from "react-hot-toast";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../../api";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const { location } = useLocation();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const fetchedMoviesDetails = await getMovieDetails({ movieId });
        setMovieDetails(fetchedMoviesDetails);
      } catch {
        toast.error("Something was wrong", {
          position: "top-right",
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <NavLink to="/">Go Back</NavLink>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          />
          <div>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </div>
        </div>
      )}
      
    </>
  );
};

export default MovieDetailsPage;
