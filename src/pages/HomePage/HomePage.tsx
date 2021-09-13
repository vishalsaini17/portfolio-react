import React from 'react'
import { Hello, Resume, Education, Employment, Projects, Contact } from '../../sections'
import MySkils from '../../sections/MySkills/MySkills'
import Testimonials from '../../sections/Testimonials/testimonials'

type props = {}

const Homepage: React.FC<props> = () => {
  return (
    <>
      <Hello />
      <Resume />
      <Education />
      <Employment />
      <MySkils />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  )
}
export default Homepage