import { useState, useEffect } from "react";
import { getCasts } from "../../api";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import noPicture from "../image/unnamed.png";
import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css"

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    
    const fetchCastsData = async () => {
      try {
        setIsLoading(true);
        const fetchedCasts = await getCasts({ movieId });
        setCasts(fetchedCasts);
      } catch {
        toast.error("Something was wrong", {
          position: "top-right",
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchCastsData();
  }, [movieId]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        
        <div className={css.wrapper}>
        <h1 className={css.title}>Movie Cast</h1>
          {casts.length !== 0 ? (
            <ul className={css.list}>
              {casts.map((cast) => (
                <li className={css.item} key={cast.id}>
                  <img className={css.image}
                    src={
                      cast.profile_path
                        ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                        : `${noPicture}`
                    }
                    alt={cast.name}
                  />
                  <p className={css.actorNameText}>{cast.name}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className={css.error}>Sorry, we dont have any casts for this movie.</p>
          )}
        </div>
      )}
    </>
  );
};

export default MovieCast;
