import AlertBox from "../components/AlertBox"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ErrorLayout from "../components/404"
export const ErrorPage = () => {
    return ( 
    <section>
    <section>
        <AlertBox />
    </section>
  <section>
      <Navbar />
  </section>
  <section>
    <ErrorLayout />
  </section>
  <section>
      <Footer />
  </section>
  </section>
  )
}