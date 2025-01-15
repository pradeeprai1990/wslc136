import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  let [movieTitle,setmovieTitle]=useState('')  //welcome

  // let getTitle=(e)=>{
  //   setmovieTitle(e.target.value) //welcome
  // }

  let [movielist,setMovieLsit]=useState([])

  let getAllMovie=()=>{
      let apiUrl;
      if(movieTitle===''){
        apiUrl=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`
      }
      else{
        apiUrl=`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${movieTitle}`
      }
   
      axios.get(apiUrl)
      .then((res)=>res.data)
      .then((finalRes)=>{
        setMovieLsit(finalRes.results)
      })


  }

  useEffect(()=>{
    getAllMovie()
  },[movieTitle])

  return (
    <>
        <h1 className='text-center py-9 font-bold text-[35px]'>Movie App</h1>

        <div className='max-w-[1000px] mx-auto'>
            
            {/* <input value={movieTitle} onChange={getTitle} type="text" className='h-14 border-2 w-[100%] rounded-[25px] pl-3' placeholder='Enter Movie App' /> */}


            <input value={movieTitle} onChange={(event)=>setmovieTitle(event.target.value)} type="text" className='h-14 border-2 w-[100%] rounded-[25px] pl-3 ' placeholder='Enter Movie App' />

            <div className='py-8 grid grid-cols-4 gap-5'>
                 { movielist.length>=1 
                    ?
                    movielist.map((items)=>{
                      return(
                        <MovieItems data={items}/>
                      )
                    })
                  
                    :
                    "No Movie Found"

                 
                 
                 }
                
            </div>
        </div>
    </>
  )
}

export default App


function MovieItems({data}){
  return(
   
      <div className='shadow-lg'>
        <img src={`https://image.tmdb.org/t/p/w1280/${data.poster_path}`} alt="" />
        <h6 className='py-2 text-[15px] text-center font-bold'>
          {data.title}
        </h6>
      </div>
 
  )
}