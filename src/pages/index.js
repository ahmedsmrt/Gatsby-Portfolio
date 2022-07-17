import * as React from "react"
import Layouts from "../components/Layout"
import About from "../components/Sections/About"
import Contact from "../components/Sections/Contact"
import Hero from "../components/Sections/Hero"
import Projects from "../components/Sections/Projects"
import Skills from "../components/Sections/Skills"


// markup
const IndexPage = () => {
  return (
    <Layouts>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layouts>
  )
}

export default IndexPage
