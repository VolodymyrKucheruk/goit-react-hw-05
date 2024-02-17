import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
        
    }
    return () => {};
  }, []);

  return <></>;
};

export default MovieReviews;
