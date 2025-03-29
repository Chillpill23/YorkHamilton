import Contact from "../../components/section/Contact/Contact"
import Hero from "../../components/section/Hero/Hero"
import Partners from "../../components/section/Partners/Partners"
import Services from "../../components/section/Services/Services"
import Solutions from "../../components/section/Solutions/Solutions"
import Stats from "../../components/section/Stats/Stats"

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Partners />
      <Solutions />
      <Stats />
      <Contact />
    </>
  )
}

export default Home