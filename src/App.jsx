import About from "./components/About"
import Banner from "./components/Banner"
import Blog from "./components/Blog"
import Choose from "./components/Choose"
import Faq from "./components/Faq"
import Feedback from "./components/Feedback"
import Footer from "./components/Footer"
import Header from "./components/Header"
// import Photo from "./components/Photo"
import ProductSection from "./components/ProductSection"
import Service from "./components/Service"
import Work from "./components/Work"

function App() {

  return (
    <>
    <Header />
      <About />
      <Banner />
      <Service />
      <ProductSection />
      <Choose />
      <Work />
      <Faq />
      {/* <Photo /> */}
      <Feedback />
      <Blog />
      <Footer />
    </>
  )
}

export default App
