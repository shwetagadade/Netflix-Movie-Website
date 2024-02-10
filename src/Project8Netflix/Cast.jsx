import { useEffect, useState } from 'react'
import { useLocation,useNavigate} from 'react-router-dom'
const Cast = () => {
    const location = useLocation()
    const specificCast = location.state.movie
    const [castm,setCastm]=useState([])
    const navigate=useNavigate()
    const baseUrl = "https://image.tmdb.org/t/p/original/"
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/person/${specificCast.id}/combined_credits?api_key=c82a3107cbd4f7ec815259b181e95569&language=en-US`)
        .then(res=>res.json())
        .then(d=>setCastm(d.cast))
    })

  return (
    <div className='Cast'>
        <div className="left">

   
<img  style={{margin:'10px',borderRadius:'50%'}} height={'100px'}width={'100px'} src={`${baseUrl}${specificCast.profile_path}`} />
</div>
<div className="right">
    <h1 className="cast__name">{specificCast.name}</h1>
    <p className="Cast__details">{specificCast.known_for_department}</p>
</div>
<div className="cast__movie">
    {castm.map((movie)=>{
        return(
            <main key={movie.id}>
                <img onClick={()=>{navigate('/movie',{state:{movie}})}}   src={`${baseUrl}${movie.poster_path}`}height={'300px'}width={'200px'} />

            </main>
        )
    })}
    </div>
    </div>
  )
}

export default Cast
