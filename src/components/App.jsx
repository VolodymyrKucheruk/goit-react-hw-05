import css from "./App.module.css";
import "modern-normalize";
import { Toaster } from "react-hot-toast";

import { useState, useEffect, useRef } from "react";
import { fetchImages } from "./api";
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { Loader } from "./Loader/Loader";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";

export const App = () => {
  const [imageElements, setImageElements] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [btnLoadMore, setBtnLoadMore] = useState(false);
  const [error, setError] = useState(false);
  const scrollRef = useRef(null);

  const searchImageElements = async (newQuery) => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setImageElements([]);
  };

  const handleLoadMore = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchImages(query.split("/")[1], page);
        setBtnLoadMore(page <= 1 && fetchedData.length === 0 ? false : true);
        setImageElements((prevImageElements) => [
          ...prevImageElements,
          ...fetchedData,
        ]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  useEffect(() => {
    if (page > 1) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        boundary: "viewport",
      });
    }
  }, [page, imageElements]);

  return (
    <>
      <SearchBar onSubmit={searchImageElements} />
      {error && (
        <ErrorMessage message=" Oops, there was an error, please try reloading 😭" />
      )}
      {imageElements.length > 0 && <ImageGallery items={imageElements} />}
      {loading && <Loader />}
      {imageElements.length >= 30 && !loading && (
        <LoadMoreBtn isLoad={handleLoadMore} />
      )}
      <div className={css.scroll} ref={scrollRef}></div>

      <Toaster position="top-left" />
    </>
  );
};
