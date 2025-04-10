import './App.css'
import Nav from './Component/Nav'
import Hero from './Component/Hero'
import Experience from './Component/Experience'
import Featured from './Component/Featured'
import HowItWorks from './Component/HowItWorks'
import Reviews from './Component/Reviews'
import Rent from './Component/Rent'
import Foooter from './Component/Foooter'

function App() {
  

  return (
    <div>
      <div className='hero h-screen max-h-[689px] bg-no-repeat bg-cover '>
        <Nav />
        <Hero />
      </div>
{/* 
      <Experience /> */}
      <Featured />
      {/* <HowItWorks />
      <Reviews />
      <Rent />
      <Foooter /> */}
    </div>
  );
}

export default App
