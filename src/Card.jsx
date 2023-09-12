import Apple from "./assets/apple.png"
import IMDB from "./assets/IMDB.png"
import Poster from "./assets/Poster.png"

const Card = () => {
  return (
    <div className="ml-5 md:ml-10 lg:ml-20 mr-5 md:mr-10 lg:mr-20 flex flex-wrap justify-center  mt-16 h-screen">
        <div className="w-80 px-4 py-3 mb-7 h-full sm:w-64 sm:mr-10">
            <div className="h-96">
                <img className="inset-0 w-screen h-full object-cover object-center" src={Poster} alt="poster" />
            </div>
            <p className="my-4 text-gray-400">USA 2018</p>
            <h3 className="text-2xl font-semibold">Batman Begins</h3>
            <div className="my-4 flex justify-between">
                <div className="flex">
                    <img className="h-5 mr-3 mt-1" src={IMDB} alt="logo" />
                    <p>840/100</p>
                </div>
                <div className="flex mr-5">
                    <img className="h-5 mr-3 mt-1" src={Apple} alt="logo" />
                    <p>70%</p>
                </div>                
            </div>
            <p className="text-gray-500">Action Adventure</p>
        </div>
    </div>
  )
}

export default Card