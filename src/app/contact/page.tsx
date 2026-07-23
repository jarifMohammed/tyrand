import React from 'react'
import ContactUs from './_components/hero'
import ContactInfo from './_components/ContactInfo'
import ContactForm from './_components/ContactForm'
import FAQ from '../_components/FAQ'
import AboutCTA from './_components/AboutCTA'

export default function page() {
  return (
    <div>
      <ContactUs />
      <ContactInfo/>
      <ContactForm/>
      <FAQ/>
      <AboutCTA/>
    </div>
  )
}
