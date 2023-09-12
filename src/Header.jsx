import Description from './Description'
import Navbar from './Navbar'
import Poster from './assets/Poster.png'

const Header = () => {
  return (
        <div className=' min-h-screen'>
          <img className='absolute inset-0 w-screen h-full object-cover object-center ' src={Poster} alt="" />
          <Navbar />
          <Description />
        </div>
  )
}

export default Header