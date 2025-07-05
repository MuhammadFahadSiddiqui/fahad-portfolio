import Contact from "./component/contact";
import Footer from "./component/footer";
import Gallery from "./component/Gallery";
import Navbar from "./component/navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  )
}