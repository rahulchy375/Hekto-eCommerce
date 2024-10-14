import React from 'react'
import HeadingReuse from '../reuse/HeadingReuse'

const AboutPage = () => {
  return (
    <>
    <HeadingReuse
        heading="About Us"
        toLink="/"
        toPage="Home"
        fromPage="About"
      />
    </>
  )
}

export default AboutPage