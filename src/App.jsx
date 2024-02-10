import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Row from './Project8Netflix/Row'
import Navbar from './Project8Netflix/Navbar'
import requests from './Project8Netflix/Request'
import Banner from './Project8Netflix/Banner'
import Movie from './Project8Netflix/Movie'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
            <Banner/>
            <Navbar/>      
                <Row isLargeRow title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
                <Row title="Trending" fetchUrl={requests.fetchTrending} />
                <Row title="TopRated Movies" fetchUrl={requests.fetchTopRated}/>
                <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
                <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
                <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
                <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
                <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
            </>
          }/>
          <Route path='/movie' element={<Movie/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App