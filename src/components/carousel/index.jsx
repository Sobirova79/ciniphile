import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import noImage from "../../images/noImage.png";
import "swiper/css";
import "swiper/css/navigation";
import './carousel.scss'
import styles from './carousel.module.scss'
import InfoBox from '../infoBox';
import { useState } from 'react';

const image_url = process.env.REACT_APP_API_IMAGE
function Carousel({ data, title, all, top }) {
    const [dataId, setDataId] = useState(null)


    const perView = {
        slides1: {
            375: {
                slidesPerView: 1
            },
            800: {
                slidesPerView: 2
            },
            1100: {
                slidesPerView: 3
            },
            1300: {
                slidesPerView: 4
            },
            1450: {
                slidesPerView: 5
            }
        },
        slides2: {
            800: {
                slidesPerView: 1
            },
            1300: {
                slidesPerView: 2
            },
            1450: {
                slidesPerView: 3
            }
        }
    }

    return (
        <div className={styles.carousel}>
            {
                title === 'top'
                    ? <h2 className={styles.carousel__top_title}>ТОП <span>10</span></h2>
                    : <h2 className={styles.carousel__title}>{title} <FiChevronRight /></h2>
            }
            {
                top
                    ? (
                        <div className={styles.carousel__top}>
                            <Swiper
                                spaceBetween={25}
                                navigation={true}
                                modules={[Navigation]}
                                breakpoints={perView.slides2}
                                className={styles.carousel__swiper}
                            >
                                {top?.map((slide,i) => (
                                    <SwiperSlide key={slide.id} className={styles.carousel__top_slide} onClick={() => setDataId(slide.id)}>
                                        <h2 className={styles.carousel__top_num}>{i + 1}</h2>
                                        <img
                                            src={slide.backdrop_path
                                                ? `${image_url}/original/${slide.backdrop_path}`
                                                : noImage
                                            }
                                            alt={slide.title}
                                            className={styles.carousel__top_image} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    )
                    : (
                        <Swiper
                            spaceBetween={25}
                            navigation={true}
                            modules={[Navigation]}
                            breakpoints={perView.slides1}
                            className={styles.carousel__swiper}
                        >
                            {data?.map((slide) => (
                                <SwiperSlide key={slide.id} className={styles.carousel__slide} onClick={() => setDataId(slide.id)}>
                                    <img
                                        src={slide.backdrop_path
                                            ? `${image_url}/original/${slide.backdrop_path}`
                                            : noImage
                                        }
                                        alt={slide.title}
                                        className={styles.carousel__image} />
                                </SwiperSlide>
                            ))}
                            <SwiperSlide className={styles.carousel__slide}>
                                <FiChevronRight />
                                <h3>{all}</h3>
                            </SwiperSlide>
                        </Swiper>
                    )
            }

            <InfoBox dataId={dataId} setDataId={setDataId} />
        </div>
    )
}

export default Carousel