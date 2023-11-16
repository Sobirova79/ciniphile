import React, { useEffect, useState } from 'react'
import Loader from '../components/loader'
import styles from './pages.module.scss'
import Container from '../layout/Container'
import Card from '../components/card'
import ReactPaginate from 'react-paginate'

function Series() {
  const [series, setSeries] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/tv/popular?page=${page}&api_key=${process.env.REACT_APP_API_KEY}`)
      const data = await res.json()
      setSeries(data)
    }
    getData()
  }, [page])

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  }
  if (loading) {
    return <Loader />
  }
  if (error) {
    return <h1>{error?.message}</h1>
  }
  console.log(series);
  return (
    <div className={styles.page}>
      <Container className={styles.page__container}>
        <h2 className={styles.page__title}>Все сереалы</h2>
        <div className={styles.page__block}>
          {
            series?.results?.map((movie) => (
              <Card key={movie.id} image={movie.poster_path} title={movie.name} />
            ))
          }
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={20}
          previousLabel="<"
          // renderOnZeroPageCount={null}
          className={styles.page__paginate}
          activeClassName={styles.page__active}
          marginPagesDisplayed={3}
        // onClick={handlePageClick}
        />
      </Container>
    </div>
  )
}

export default Series