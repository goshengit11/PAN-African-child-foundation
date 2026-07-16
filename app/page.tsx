import Navbar from "./components/navbar";
import Hero from "./hero";
import Mission from "./mission";
import Vision from "./vision"
import Impact from "./impact";
import Footer from "./components/footer"

export default function (){
  return(
     <div className="bg-white ">
        <Navbar/>
        <Hero/>
        <Mission/>
       <Vision/>
       <Impact/>
       <Footer/>
     </div>
      
  )
}