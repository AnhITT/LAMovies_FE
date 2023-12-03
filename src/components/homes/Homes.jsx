import React, { useEffect, useState } from "react"
import "./home.css"
import { homeData } from "~/dummyData"
import Home from "./Home"
import { getMovieAPI } from "~/api/homes/home"

const Homes = () => {
  const [items] = useState(homeData)
  useEffect(()=>{
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = getMovieAPI();
  }
  return (
    <>
      <section className='home'>
        <Home items={items} />
      </section>
      <div className='mragin'></div>
    </>
  )
}

export default Homes
