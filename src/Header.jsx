import Description from './Description'
import Navbar from './Navbar'
import Poster from './assets/Poster.png'

const Header = () => {
  return (
    <div className='relative bg-red-500 min-h-full  '>
        <div className=' min-h-screen '>
        <img className='absolute inset-0 w-full h-full object-cover object-center ' src={Poster} alt="" />
        <Navbar />
        <Description />
        </div>
    </div>
  )
}

export default Header