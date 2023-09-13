import Details from "../components/Movie"
import Sidebar from "../components/Sidebar"


const Movie = () => {
  return (
    <div className="flex">
        <Sidebar />
        <Details />
    </div>
  )
}

export default Movie