import Twitter from "../assets/Twitter.png"
import Youtube from "../assets/Youtube.png"
import Facebook from "../assets/Facebook.png"
import Instagram from "../assets/Instagram.png"


const Footer = () => {
  return (
    <div className="flex align-middle justify-center bg-gray-50 h-96 ">
        <div className="flex-col my-20">            
            <div className="flex align-middle justify-center ml-12 w-96">
                <img className="h-5 mr-10" src={Facebook} alt="" />
                <img className="h-5 mr-10" src={Instagram} alt="" />
                <img className="h-5 mr-10" src={Twitter} alt="" />
                <img className="h-5 mr-10" src={Youtube} alt="" />
            </div>
            <div className="flex  pt-10 justify-around ml-6  text-base font-semibold ">
                <p>
                    Condition of Use
                </p>
                <p>
                    Privacy & Policy
                </p>
                <p>
                    Press Room
                </p>
            </div>
            <p className="mt-10 ml-24 text-lg font-light text-gray-500">
                &copy; 2023 MovieBox by Abdullahi
            </p>
        </div>
    </div>
  )
}

export default Footer