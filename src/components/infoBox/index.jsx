import React from 'react'
import {MdClose} from 'react-icons/md'
import {HiMenuAlt2} from 'react-icons/hi'
import useFetch from '../../hooks/useFetch'
import styles from './infobox.module.scss'
import { useEffect } from 'react'
import { useState } from 'react'
import classNames from 'classnames'
import Actor from '../actor'
import { useNavigate } from 'react-router-dom'

const image_url = process.env.REACT_APP_API_IMAGE

function InfoBox({dataId,setDataId}) {
    const navigate = useNavigate()
    const [movieDetails,setMovieDetails] = useState(null)
    const [serieDetails,setSerieDetails] = useState(null)
    const [movieActors,setMovieActors] = useState(null)
    // console.log(dataId);
    // const [movieDetails] = useFetch("movieDetails",`movie/${dataId}`)
    // const [serieDetails] = useFetch("serieDetails",`tv/${dataId}`)
    // console.log(movieDetails);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${dataId}?api_key=6631170ac0507794a62b3c544415862a`)
        .then((res)=>res.json())
        .then(response => setMovieDetails(response))
    },[dataId])
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/tv/${dataId}?api_key=6631170ac0507794a62b3c544415862a`)
        .then((res)=>res.json())
        .then(response => setSerieDetails(response))
    },[dataId])
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${dataId}/casts?api_key=6631170ac0507794a62b3c544415862a`)
        .then((res)=>res.json())
        .then(response => setMovieActors(response))
    },[dataId])
    console.log(movieActors);


  return (
    <div className={dataId ? classNames(styles.info,styles.active) : styles.info}>
        <button className={styles.info__close} onClick={()=>setDataId(null)}>
            <MdClose />
        </button>
        <img 
            src={`${image_url}/original${movieDetails?.backdrop_path || serieDetails?.backdrop_path}`}
            alt={movieDetails?.title || serieDetails?.name} className={styles.info__image}
        />
        <div className={styles.info__box}>
            <h2 className={styles.info__title}>{movieDetails?.title || serieDetails?.name}</h2>
            <p className={styles.info__text}>{movieDetails?.overview || serieDetails?.overview}</p>
            <div className={styles.info__about}>
                <p className={styles.info__year}>{new Date(movieDetails?.release_date || serieDetails?.first_air_date).getFullYear()},</p>
                {
                   movieDetails?.genres?.map((genre)=>(
                    <p key={genre.id}>{genre.name},</p>
                   ))
                }
                {
                   serieDetails?.genres?.map((genre)=>(
                    <p key={genre.id}>{genre.name},</p>
                   )) 
                }
                {
                    movieDetails?.runtime && <p className={styles.info__time}>{Math.floor(movieDetails?.runtime / 60)}h {movieDetails?.runtime % 60}m</p>
                }
            </div>
            <div className={styles.info__actors}>
                {
                    movieActors?.cast?.slice(0,4).map((actor)=>(
                        <Actor key={actor.id} image={actor.profile_path} name={actor.name} />
                    ))
                }
            </div>
            <button className={styles.info__button}  onClick={()=>navigate(`/details/${movieDetails?.id}`)}>
                    <HiMenuAlt2 />
                    <span>Подробнее</span>
            </button>
        </div>

    </div>
  )
}

export default InfoBox