import React from "react"
import { Link } from "react-router-dom"
import Movie from "./Movie"
import "./style.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Movies = ({ items, title }) => {
  return (
    <>
    <section class="list-movies">
            <div class="container">
            <div className='heading flexSB'>
            <h1>{title}</h1>
            <Link to='/listmovie'>View All</Link>
            </div>
                <ul class="movies-list">
                    {items.map((item) => {
                    return (
                      <>
                        <Movie key={item.id} item={item} />
                      </>
                    )
                  })}
                </ul>
            </div>
    </section>
    </>
  )
}

export default Movies
