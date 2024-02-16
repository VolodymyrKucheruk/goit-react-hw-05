import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getTrendingMovies } from "../../api";
import { MovieList } from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const fetchedMovies = await getTrendingMovies({
          abortController: controller,
        });
        setTrendingMovies(fetchedMovies.results);
      } catch {
        toast.error("Something was wrong", {
          position: "top-right",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, []);

  return (
    <>
      <h1 className={css.title}>Trnding today</h1>
      {isLoading ? <p>Loading...</p> : <MovieList items={trendingMovies} />}
    </>
  );
};
export default HomePage;
