import Navbar from './Navbar'
import Poster from './assets/Poster.png'

const Header = () => {
  return (
    <div className='relative'>
        <img src={Poster} alt="" />
        <Navbar />
    </div>
  )
}

export default Header