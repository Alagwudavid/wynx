import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProfilePage from "../components/ProfilePage"
export default function Profile() {
  return (
  <section className="relative">
    <section>
      <ProfilePage/>
    </section>
  <section>
      <Footer />
  </section>
  </section>
  )
}