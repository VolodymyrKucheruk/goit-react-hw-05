import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { getReviews } from "../../api";
import noPicture from "../image/unnamed.png";
import Loader from "../Loader/Loader";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedReviews = await getReviews({ movieId });
        setReviews(fetchedReviews);
      } catch {
        toast.error("Something was wrong", {
          position: "top-right",
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {reviews.length !== 0 && (
            <>
              <h1 className={css.title}>Movie Reviews</h1>
              <ul className={css.list}>
                {reviews.map((item) => (
                  <li className={css.item} key={item.id}>
                    <div className={css.wrapperImage}>
                      <img
                        className={css.image}
                        src={
                          item.author_details.avatar_path
                            ? `https://image.tmdb.org/t/p/w500${item.author_details.avatar_path}`
                            : `${noPicture}`
                        }
                        alt={item.author_details.name}
                      />
                      <h2 className={css.authorName}>{item.author}</h2>
                    </div>
                    <p className={css.contentText}>{item.content}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
          {reviews.length === 0 && (
            <p className={css.error}>
              Sorry, we don&apos;t have any reviews for this movie.
            </p>
          )}
        </>
      )}
    </>
  );
};

export default MovieReviews;
