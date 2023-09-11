import Logo from "./assets/tv.png"
import SearchIcon from "./assets/Icon.png"
import Menu from "./assets/Menu.png"

const Navbar = () => {
  return (
    <div className="absolute -top-0 flex justify-between text-white w-screen mt-7">
        <div className="flex ml-5 justify-center align-middle lg:ml-20">
            <img className="h-9 " src={Logo} alt="logo" />
            <h3 className="ml-5 text-xl">MovieBox</h3>
        </div>
        <div>
            <div className="">
                <div className="flex justify-end lg:justify-center align-middle mr-10 rounded-full border-solid bottom-4 border-white-500 circle"> 
                                          
                        <input type="text" className="bg-transparent w-100 lg:w-96 p-3 h-8 placeholder-gray-500 lg:placeholder-white placeholder-opacity-0 lg:placeholder-opacity-50 focus:outline-none" placeholder="what do you want to watch"/>
                              
                        <img className="h-4 mt-2 -ml-5 " src={SearchIcon} alt="" />
                    
                
                </div>
            </div>
        </div>
        <div className="flex mr-5 lg:mr-20">
            <p className="mr-3">sign in</p>
            <img className="h-7" src={Menu} alt="" />
        </div>
    </div>
  )
}

export default Navbar

// className="w-60 bg-inherit peer block min-h-[auto] w-full rounded" placeholder="what do you want to search"