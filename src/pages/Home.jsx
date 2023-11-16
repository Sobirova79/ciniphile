import React from "react";
import Intro from "../components/intro";
import useFetch from "../hooks/useFetch";
import Carousel from "../components/carousel";
import styles from "./pages.module.scss";
import Loader from "../components/loader";

function Home() {
  const [movies] = useFetch("movies", "/movie/upcoming");
  const [popular] = useFetch("movies", "/movie/popular");
  const [series] = useFetch("series", "/tv/popular");
  const [top] = useFetch("top", "/movie/top_rated");
  if (!movies?.results || !series || !top || !popular) {
    return <Loader />;
  }
  console.log(top);
  return (
    <div>
      <Intro data={movies?.results} />
      <Carousel data={popular?.results} title={"Фильмы"} all={"Все фильмы"} />
      <Carousel data={series?.results} title={"Сереалы"} all={"Все сереалы"} />
      <div className={styles.rating}>
        <Carousel top={top?.results.slice(0, 10)} title={"top"} />
      </div>
    </div>
  );
}

export default Home;
