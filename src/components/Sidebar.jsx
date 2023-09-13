import Home from "../assets/Home.png"
import Movie from "../assets/Movie.png"
import TVS from "../assets/TVS.png"
import Calendar from "../assets/Calendar.png"
import Logout from "../assets/Logout.png"
import tv from "../assets/tv.png"


export default function Sidebar() {
    return (
        <div className="hidden lg:flex ">
            <div className="flex flex-col h-screen p-3 bg-gray-50 shadow w-52">
                <div className="space-y-3">
                <div className="flex items-center mt-5">
                        <img className="h-10 mr-5" src={tv} alt="" />
                        <h2 className="text-xl font-bold">MovieBox</h2>
                    </div>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center py-4">
                            
                        </span>
                        
                    </div>
                    
                     <div className="flex-1 ">
                        <ul className="pt-2 pb-4 space-y-1 -ml-3 mt-16">
                            <li className="rounded-sm w-52 py-3 ">
                                <a
                                    href="#"
                                    className="flex items-center space-x-3 rounded-md focus:bg-red-200 w-52 -5 py-3 px-5 "
                                >
                                                                                           <img className="h-8" src={Home} alt="" />              
                                    <span className="font-semibold text-lg">Home</span>
                                </a>
                            </li>
                            <li className="rounded-sm py-3">
                                <a
                                    href="#"
                                    className="flex items-center  space-x-3 rounded-md focus:bg-red-200 w-52 -5 py-3 px-5 bg-red-200"
                                >
                                    <img className="h-8"  src={Movie} alt="" />
                                    <span className="font-semibold text-lg">Movie</span>
                                </a>
                            </li>
                            <li className="rounded-sm  py-3">
                                <a
                                    href="#"
                                    className="flex items-center focus:bg-red-200 w-52 -5 py-3 px-5 space-x-3 rounded-md "
                                >
                                    <img className="h-8"  src={TVS} alt="" />
                                    <span className="font-semibold text-lg">TV Series</span>
                                </a>
                            </li>
                            <li className="rounded-sm py-3">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md focus:bg-red-200 w-52 -5 py-3 px-5"
                                >
                                    <img className="h-8"  src={Calendar} alt="" />
                                    <span className="font-semibold text-lg">Upcoming</span>
                                </a>
                            </li>
                            
                            <li className="rounded-sm py-3 ">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md focus:bg-red-200 w-52 -5 py-3 px-5"
                                >
                                    <img className="h-8"  src={Logout} alt="" />        
                                    <span className="font-semibold text-lg">Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            {/*  */}
        </div>
    )
}

