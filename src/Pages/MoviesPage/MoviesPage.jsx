import { useEffect, useState } from "react";
import { Search } from "../../components/Search/Search";
import { MovieList } from "../../components/MovieList/MovieList";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { searchMovies } from "../../api";

const MoviesPage = () => {
  const [searchMoviesResult, setSearchMoviesResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterByName = searchParams.get("filter") ?? "";

  const changeFilter = (newFilter) => {
    searchParams.set("filter", newFilter);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const fetchedMovies = await searchMovies(filterByName);

        setSearchMoviesResult(fetchedMovies);
      } catch {
        toast.error("Something was wrong", {
          position: "top-right",
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [filterByName]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : searchMoviesResult.length === 0 && filterByName ? (
        <h2>Oops, nothing found for this query.</h2>
      ) : (
        <div>
          <Search onSubmit={changeFilter} />
          <MovieList items={searchMoviesResult} />
        </div>
      )}
    </>
  );
};
export default MoviesPage;
