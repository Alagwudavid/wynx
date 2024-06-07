import AlertBox from "../components/AlertBox"
import Navbar from "../components/Navbar"
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"
export const ContactPage = () => {
    return ( 
    <section>
    <section className=" mb-[45px]">
    <AlertBox />
  </section>
  <section>
      <Navbar />
  </section>
  <section>
      <ContactUs />
  </section>
  <section>
      <Footer />
  </section>
  </section>
  )
}