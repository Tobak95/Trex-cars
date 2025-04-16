import './App.css'
import Nav from './Component/Nav'
import Hero from './Component/Hero'
import Experience from './Component/Experience'
import Featured from './Component/Featured'
import HowItWorks from './Component/HowItWorks'
import Reviews from './Component/Reviews'
import Rent from './Component/Rent'
import Foooter from './Component/Foooter'
import HowisWorks2 from './Component/HowisWorks2'


function App() {
  

  return (
    <div>
      <div className="hero h-screen max-h-[689px] bg-no-repeat bg-cover ">
        <Nav />
        <Hero />
      </div>

      <Experience />
      <Featured />
      <HowItWorks /> 

      {/* <HowisWorks2 /> */}

      <Reviews />
      <div className='rent layout h-screen max-h-[359px] bg-no-repeat bg-cover '>
      <Rent />
      </div >

      <div className='my-3'>
       <Foooter />
      </div>
    </div>
  );
}

export default App
