import React from 'react'
import noImage from '../../images/noImage.png'
import styles from './card.module.scss'

const image_url = process.env.REACT_APP_API_IMAGE
function Card({image,title,click}) {
  return (
    <div className={styles.card} onClick={click}>
        <img src={image ? `${image_url}/original${image}` : noImage} alt={title} />
    </div>
  )
}

export default Card