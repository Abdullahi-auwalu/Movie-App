import IMDB from "./assets/IMDB.png"
import Apple from "./assets/apple.png"
import play from "./assets/play.png"

const Description = () => {
  return (
    <div className="h-20">        
        <div className="absolute top-20 text-white ml-5 md:ml-10 lg:ml-20 w-1/2 lg:w-1/4 mt-20 ">
            <h1 className="text-4xl font-bold mt-4">John Wick 3 :<br /> Parabellum</h1>
            <div className="flex justify-start mt-5 mb-5">
                <div className="flex mr-6">
                    <img className="h-4 " src={IMDB} alt="imdb" />
                    <p className="text-sm ml-2">86.0 / 100</p>
                </div>
                <div className="flex mr-10 sm:mr-30">
                    <img className="h-4 " src={Apple} alt="apple" />
                    <p className="text-sm ml-2">97%</p>
                </div>
            </div>
            <p className="w-50 text-sm ">
            John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
            </p>
            <div className="mt-4 w-48">                
            <a className="flex h-12 align-middle rounded-lg shadow-lg tracking-wider font-semibold text-sm bg-red-700 px-4 py-3" href="">
                <img className="h-5  mr-2" src={play} alt="" />
                <p>WATCH TRAILER</p>
            </a>
            </div>
        </div>
    </div>
  )
}

export default Description