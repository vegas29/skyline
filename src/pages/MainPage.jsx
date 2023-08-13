import { AboutUs } from "../components/AboutUs";
import BottomMenu from "../components/BottomMenu";
import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Footer } from "../components/Footer";




export const MainPage = () => {
  return (
    <>    
      <Hero/>
      <AboutUs/>
      <Features/>
      <Services/>
      {/* <BottomMenu/> */}
      <Footer/>
    </>
  )
}
