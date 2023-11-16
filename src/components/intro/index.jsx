import React, { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import styles from "./intro.module.scss";
import { useNavigate } from "react-router-dom";

const image_url = process.env.REACT_APP_API_IMAGE;

function Intro({ data }) {
  const navigate = useNavigate();
  const [num, setNum] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const interval = setInterval(() => {
      if (data.length - 2 >= num) {
        setNum((prev) => prev + 1);
      } else {
        setNum(0);
      }
      setAnimate(false);
    }, 10000);
    return () => clearInterval(interval);
  }, [num, animate, data.length]);

  function handleNext() {
    setAnimate(false);
    if (data.length - 2 >= num) {
      setNum((prev) => prev + 1);
    } else {
      setNum(0);
    }
  }
  return animate ? (
    <section className={styles.intro}>
      <img
        src={`${image_url}/original${data[num].backdrop_path}`}
        alt="background"
        className={styles.intro__bg}
      />
      <div className={styles.intro__info}>
        <h1 className={styles.intro__title}>{data[num].title}</h1>
        <p className={styles.intro__text}>{data[num].overview}</p>
        <button
          className={styles.intro__button}
          onClick={() => navigate(`/details/${data[num].id}`)}
        >
          <HiMenuAlt2 />
          <span>Подробнее</span>
        </button>
      </div>
      <div className={styles.intro__next} onClick={handleNext}>
        <div className={styles.intro__next_info}>
          <img
            src={`${image_url}/w300${
              data.length <= num + 1
                ? data[0].backdrop_path
                : data[num + 1].backdrop_path
            }`}
            alt="next movie"
            className={styles.intro__next_bg}
          />
          <p className={styles.intro__next_text}>Следующий</p>
          <h3 className={styles.intro__next_title}>
            {data.length <= num + 1 ? data[0].title : data[num + 1].title}
          </h3>
          <div className={styles.intro__next_bottom}>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <section className={styles.intro}></section>
  );
}

export default Intro;
