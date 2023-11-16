import React from 'react'
import notfound from '../images/notfound.jpg'
import { FaHome } from 'react-icons/fa'
import styles from './pages.module.scss'
import Container from '../layout/Container'
import {useNavigate} from 'react-router-dom'

function NotFound() { 
  const navigate = useNavigate()
  return (
    <div className={styles.page}>
      <Container>
      <img src={notfound} alt="not found" className={styles.page__notfound}/>
      <button className={styles.page__back} onClick={()=>navigate(`/`)}>
                    <FaHome />
                    <span>back</span>
                </button>
        
      </Container>
        
    </div>
  )
}

export default NotFound