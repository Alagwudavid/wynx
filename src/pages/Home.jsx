import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Languages from "../components/Languages"
import Contact from "../components/Contact"
export default function Home() {
  return (
    <section>
  <div>
      <Navbar />
  </div>
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
      <Contact />
  </section>
  <section>
      <Footer />
  </section>
  </section>
  )
}