import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Homepage = () => {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="../../public/videobg.mp4" type="video/mp4" />
        </video>

        {/* Black Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
 
        </div>
      </div>
    </>
  )
}

export default Homepage
