import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='min-h-full w-full bg-white'>
      <Header />
      <Featured />
      <Footer />
    </div>
  )
}

export default Home