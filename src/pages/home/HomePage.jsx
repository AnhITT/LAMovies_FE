import React, { useState , useEffect} from "react"
import Homes from "~/components/homes/Homes"
import Trending from "~/components/trending/Trending"
import Upcomming from "~/components/upcoming/Upcomming"
import Movies from "~/components/movie/Movies"
import { GetMovieAPI, GetTop6MovieView } from "~/api/homes/home"

const HomePage = () => {
  const [movie, setMovie] = useState([]);
  const [top6Movie, setTop6Movie] = useState([]);
  useEffect(()=>{
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      setMovie(await GetMovieAPI());
      setTop6Movie(await GetTop6MovieView());
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error, e.g., show an error message to the user
    }
  }
  return (
    <>
      <Homes />
      <Movies items={top6Movie} title='List Movie' />
      <Upcomming items={movie} title='Upcomming Movies' />
      <Upcomming items={movie} title='Latest Movies' />
      <Trending />
      <Upcomming items={movie} title='Recommended Movies' />
    </>
  )
}

export default HomePage
