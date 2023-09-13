import Banner from "../assets/Banner.png"
import Star from "../assets/Star.png"
import Tickets from "../assets/Tickets.png"
import List from "../assets/List.png"
import Image from "../assets/Image.png"

const Movie = () => {
  return (
    <div>
        <div className="container mx-auto mt-8 px-10">
            <div>
                <img src={Banner} alt="" />
            </div>
            <div>
                <div className="flex justify-between mt-4 bg-gray-50">
                    <div className="flex text-xs text-gray-500 font-bold sm:text-base sm:ml-3">
                        <p className="mr-1">Top Gun : Moverick </p>
                        <p className="mr-1 -mt-2 font-extrabold text-base">.</p>
                        <p className="mr-1">2022</p>
                        <p className="mr-1 -mt-2 font-extrabold text-base">.</p>
                        <p className="mr-1">PG-13</p>
                        <p className="mr-1 -mt-2 font-extrabold text-base">.</p>
                        <p className="mr-1">2h 10m</p>
                        <p className="mr-1 text-red-700 sm:ml-7">Action</p>
                        <p className="mr-1 text-red-700 sm:ml-7">Drama</p>
                    </div>
                    <div>
                        <div className="flex text-xs text-gray-500 font-bold">
                            <img className="h-4 mr-1" src={Star} alt="" />
                            <span className="text-gray-300 mr-1 ">8.5</span><span className="mr-1 ">|</span>350%
                        </div>
                    </div>
                </div>
                <div className="mt-5 md:flex w-full">
                    <div className="text-gray-500 font-medium  sm:flex w-full sm:flex-2 md:w-3/5 px-5">
                        <p className="">
                        After thirty years, Maverick is still pushing the envelope as a top naval aviator,
but must confront ghosts of his past when he leads TOP GUNs elite graduates
on a mission that demands the ultimate sacrifice from those chosen to fly it.
                        </p>
                    </div>
                    <div className="block w-full md:w-92 flex-1 my-7 md:my-0  mr-2">
                        <a className="focus:bg-red-300 flex h-12 align-middle rounded-lg shadow-lg tracking-wider font-semibold text-white text-sm bg-red-700 px-2 py-3 mb-3" href="">
                            <img className="h-5  mr-2" src={Tickets} alt="" />
                            <p>See Showtimes</p>
                        </a>
                        <a className="focus:bg-red-300 text-red-700 flex h-12 align-middle rounded-lg shadow-lg tracking-wider font-semibold text-sm  px-6 py-3" href="">
                            <img className="h-5  mr-2" src={List} alt="" />
                            <p>More watch options</p>
                        </a>
                        </div>
                    </div>
                <div className="my-7 md:flex ">
                    <div className="text-gray-500 md:w-3/5 font-medium   w-full px-5">
                        <p>Director <span>: Joseph Kosinski</span></p>
                        <p>Writers <span>: Jim Cash, Jack EPPs Jr, Peter Craig</span></p>
                        <p>Stars <span>: Tom Cruise, Jennifer Conneily, Miles Teller</span></p>
                        <div className="flex mt-5">                            
                        <a className="focus:bg-red-300 flex h-12 align-middle rounded-lg shadow-lg tracking-wider font-semibold text-white text-sm bg-red-700 px-2 py-3 " href="">
                            <img className="h-5  mr-2" src={Tickets} alt="" />
                            <p>See Showtimes</p>
                        </a>
                        <p className="ml-4 mt-5">5 Award 9 nominations </p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 ">
                        <img className="h-56 w-full md:w-92 flex-1" src={Image} alt="" />
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Movie