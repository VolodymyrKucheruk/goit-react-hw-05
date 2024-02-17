import { useState, useEffect } from "react";
import { getCasts } from "../../api";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import noPicture from "../image/unnamed.png";
import Loader from "../Loader/Loader";

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    
    const fetchCastsData = async () => {
      try {
        setIsLoading(true);
        const fetchedCasts = await getCasts({ movieId });
        console.log(fetchedCasts);
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
        <div>
          {casts.length !== 0 ? (
            <ul>
              {casts.map((cast) => (
                <li key={cast.id}>
                  <img
                    src={
                      cast.profile_path
                        ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                        : `${noPicture}`
                    }
                    alt={cast.name}
                  />
                  <p>{cast.name}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Sorry, we dont have any casts for this movie.</p>
          )}
        </div>
      )}
    </>
  );
};

export default MovieCast;
