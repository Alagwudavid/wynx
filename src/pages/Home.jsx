import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Languages from "../components/Languages"
import ContactUs from "../components/ContactUs"
import AlertBox from "../components/AlertBox"
export default function Home() {
  return (
    <section>
  <section>
    <AlertBox />
  </section>
  <section>
      <Navbar />
  </section>
  <section>
      <Hero />
  </section>
  <section>
      <Languages />
  </section>
  <section>
      <Services />
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