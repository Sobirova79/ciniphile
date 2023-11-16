import { useState } from 'react'
import Container from '../layout/Container'
import useFetch from '../hooks/useFetch'
import styles from './pages.module.scss'
import { useNavigate } from 'react-router-dom'
import Card from '../components/card'

function Search() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [data] = useFetch("search", `/search/movie?query=${search}`)
  return (
    <div className={styles.page}>
      <Container className={styles.page__container}>
        <input
          type="text"
          placeholder='Найти фильм, сериал...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.page__input}
        />
        <div className={styles.page__block}>
          {
            data?.map((movie) => (
              <Card key={movie.id} image={movie.poster_path} title={movie.title} click={()=>navigate(`/details/${movie.id}`)} />
            ))
          }
        </div>
      </Container>
    </div>
  )
}

export default Search