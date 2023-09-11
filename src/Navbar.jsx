import Logo from "./assets/tv.png"

const Navbar = () => {
  return (
    <div className="absolute t-0">
        <div>
            <img src={Logo} alt="" />
            Logo
        </div>
        <div>
            <div>
                search
            </div>
        </div>
        <div>
            <p>sign in</p>

        </div>
    </div>
  )
}

export default Navbar