import React from 'react'
import styles from './loader.module.scss'

function Loader() {
  return (
    <div className={styles.loader}>
        <span className={styles.loader__spinner}></span>
    </div>
  )
}

export default Loader