import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import Container from '../layout/Container'
import Loader from '../components/loader'
import styles from './pages.module.scss'
import { useNavigate } from 'react-router-dom'
import Card from '../components/card'

function Movies() {
  const navigate = useNavigate()
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/movie/upcoming?page=${page}&api_key=${process.env.REACT_APP_API_KEY}`)
      const data = await res.json()
      setMovies(data)
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
  console.log(movies);
  return (
    <div className={styles.page}>
      <Container className={styles.page__container}>
        <h2 className={styles.page__title}>Все фильмы</h2>
        <div className={styles.page__block}>
          {
            movies?.results?.map((movie) => (
              <Card key={movie.id} image={movie.poster_path} title={movie.title} click={() => navigate(`/details/${movie.id}`)} />
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

export default Movies