import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import NotFound from '../../pages/NotFound'
import YouTube from 'react-youtube'
import Loader from '../loader'
import styles from './thriller.module.scss'
import Container from '../../layout/Container'


function Thriller() {
    const {id} = useParams()
    const [thriller,loading,error] = useFetch("thriller",`/movie/${id}/videos`)
    if (loading || error) {
        return <Loader />
        
    }
  return (
    <div className={styles.thriller}>
        <Container>
          {thriller && <YouTube videoId={thriller?.results[0]?.key} opts={{width:"100%", height:"700px"}} />}
        </Container>
    </div>
  )
}

export default Thriller