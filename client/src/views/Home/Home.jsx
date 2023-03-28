
import {useDispatch} from "react-redux"
import {useEffect} from "react"
import { get_VideoGames } from '../../redux/action';

const Home = () => {
  
  const disptach = useDispatch();
  useEffect(() => {
    
    disptach(get_VideoGames())

  }, [disptach])
  
  
  return (
    <div>Welcome to Home</div>


  )
}

export default Home