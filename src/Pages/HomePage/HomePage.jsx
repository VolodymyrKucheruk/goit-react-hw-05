import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getTrendingMovies } from "../../api";
import { MovieList } from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";
import Loader from "../../components/Loader/Loader";

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
        setTrendingMovies(fetchedMovies);
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
      <h1 className={css.title}>Trending today</h1>
      {isLoading ? <Loader /> : <MovieList items={trendingMovies} />}
    </>
  );
};
export default HomePage;
