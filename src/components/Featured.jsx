import Card from "./MovieCard"
import Arrow from "../assets/Arrow.png"



const Featured = () => {
  return (
    <div className="bg-gray-50  w-full py-16  h-full">
        <div className="flex align-middle justify-between mr-5">
          <h3 className="ml-5 md:ml-10 lg:ml-20 text-2xl font-semibold tracking-wide">Featured Movies</h3>
          <a href="#" className="flex align-middle mr-3 lg:mr-20 md:ml-10">
            <p className="text-red-700 font-semibold mr-3">See more</p>
            <img className="h-4 mt-1" src={Arrow} alt="arrow" />
          </a>
        </div>
        <Card />
    </div>
  )
}

export default Featured