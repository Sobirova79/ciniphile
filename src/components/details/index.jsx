import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import Actor from "../actor";
import Container from "../../layout/Container";
import styles from "./details.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../card";
import useFetch from "../../hooks/useFetch";

const image_url = process.env.REACT_APP_API_IMAGE;
function Details() {
  const params = useParams();
  const navigate = useNavigate();
  const [details] = useFetch("details", `movie/${params.id}`);
  const [actors] = useFetch("actors", `movie/${params.id}/casts`);
  const [recommend] = useFetch(
    "recommend",
    `movie/${params.id}/recommendations`
  );
  return (
    <div className={styles.details}>
      <div className={styles.details__box}>
        <div className={styles.details__about}>
          <h2 className={styles.details__title}>{details?.title}</h2>
          <p className={styles.details__text}>{details?.overview}</p>
          <div className={styles.details__info}>
            <p className={styles.details__year}>
              {new Date(details?.release_date).getFullYear()},
            </p>
            {details?.genres?.map((genre) => (
              <p key={genre.id} className={styles.details__genre}>
                {genre.name},
              </p>
            ))}
            <p className={styles.details__time}>{`${Math.floor(
              details?.runtime / 60
            )}h ${details?.runtime % 60}m`}</p>
          </div>
          <button
            className={styles.details__button}
            onClick={() => navigate(`/thriller/${details?.id}`)}
          >
            <FaPlay />
            <span>Смотреть трейлер</span>
          </button>
        </div>
        <div className={styles.details__image}>
          <img
            src={`${image_url}/original${details?.backdrop_path}`}
            alt={details?.title}
          />
        </div>
        <div className={styles.details__actors}>
          <p className={styles.details__actors_title}>В главных ролях</p>
          <div className={styles.details__actors_box}>
            {actors?.cast?.slice(0, 6).map((actor) => (
              <Actor
                key={actor.id}
                image={actor.profile_path}
                name={actor.name}
              />
            ))}
          </div>
        </div>
        <img
          src={`${image_url}/original${details?.backdrop_path}`}
          alt={details?.title}
          className={styles.details__bg}
        />
      </div>
      <Container>
        <div className={styles.details__block}>
          <div className={styles.details__block_box}>
            <h4 className={styles.details__block_title}>Бюджет</h4>
            <p className={styles.details__block_text}>
              ${details?.budget?.toLocaleString()}
            </p>
          </div>
          <div className={styles.details__block_box}>
            <h4 className={styles.details__block_title}>Сборы</h4>
            <p className={styles.details__block_text}>
              ${details?.revenue?.toLocaleString()}
            </p>
          </div>
          <div className={styles.details__block_box}>
            <h4 className={styles.details__block_title}>Статус</h4>
            <p className={styles.details__block_text}>{details?.status}</p>
          </div>
          <div className={styles.details__block_box}>
            <h4 className={styles.details__block_title}>Исходное название</h4>
            <p className={styles.details__block_text}>{details?.tagline}</p>
          </div>
        </div>
        <div className={styles.details__recommend}>
          <h3 className={styles.details__recommend_title}>Рекомендации</h3>
          <div className={styles.details__recommend_box}>
            {recommend?.results?.slice(0, 4).map((el) => (
              <Card
                key={el.id}
                image={el.poster_path}
                title={el.title}
                click={() => navigate(`/details/${el.id}`)}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Details;
