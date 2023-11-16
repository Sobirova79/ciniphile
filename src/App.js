import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Series from './pages/Series'
import Search from './pages/Search'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Details from './components/details'
import NotFound from './pages/NotFound'
import Thriller from './components/thriller'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/series' element={<Series />} />
          <Route path='/search' element={<Search />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/thriller/:id' element={<Thriller />} />
          <Route path='/notfound' element={<NotFound />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position='top-right' />
    </QueryClientProvider>
  )
}

export default App