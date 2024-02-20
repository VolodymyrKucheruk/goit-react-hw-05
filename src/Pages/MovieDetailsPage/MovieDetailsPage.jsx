import { useEffect, useState, useRef } from "react";
import css from "./MovieDetailsPage.module.css";
import toast from "react-hot-toast";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../../api";
import Loader from "../../components/Loader/Loader";
import { BackLink } from "../../components/LinkGoBack/LinkGoBack";
import { FcBullish } from "react-icons/fc";

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/");

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
        <div className={css.wrapper}>
          <div className={css.imageContentWrapper}>
            <BackLink className={css.button} href={backLink.current}>
              <span>Go Back</span>
            </BackLink>
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            />
            <div className={css.buttonWrapper}>
              <Link className={css.button} to="cast">
                Cast
              </Link>
              <Link className={css.button} to="reviews">
                Reviews
              </Link>
            </div>
          </div>

          <div className={css.wrapperText}>
            <h1 className={css.title}>{movieDetails.original_title}</h1>
            <p className={css.score}>
              {" "}
              <FcBullish/>
              User score:{Math.floor(movieDetails.vote_average * 10)}%
            </p>
            <h2 className={css.subtitle}>Overview</h2>
            <p className={css.textOwerview}>{movieDetails.overview}</p>
            <h3 className={css.geners}>Geners</h3>
            <div className={css.wrapperGenres}>
              {movieDetails.genres &&
                movieDetails.genres.map((genre) => (
                  <span className={css.genresItem} key={genre.id}>
                    {genre.name}
                  </span>
                ))}
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
