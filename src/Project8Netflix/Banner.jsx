import axios from './axios'
import requests from "./Request"
import { useState, useEffect } from "react"
import './Banner.css'


const Banner = () => {
    const baseUrl = "https://image.tmdb.org/t/p/original/"

    const[movie,setMovie]= useState([])

    useEffect(()=>{
        async function fetch(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
            console.log(request);
            return request
        }
        fetch()
    },[])
    
  return (
    <div className='banner'
    style={{
        backgroundImage: `Url(${baseUrl}${movie.backdrop_path})`,
        height:'80vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center-center'
    }}>
        
        <div className='banner__contents'>
        <h1 className='banner__title'>
            {movie.name || movie.original_title || movie.original_name }
        </h1>
        <div className='banner__buttons'>
            <button className='banner__button'>Play</button>
            <button className='banner__button'>Cast</button>
        </div>
        <h1 className='banner__description'>{movie.overview}</h1>
        </div>
    
    </div>
  )
}

export default Banner