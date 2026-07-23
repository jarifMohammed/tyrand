import React from 'react'
import Hero from './_components/Hero'
import TrustedCompanies from './_components/Tag'
import Services from './_components/Services'
import WhyChoose from './_components/WhyChoose'
import Testimonials from './_components/Testimonials'
import FAQ from './_components/FAQ'
import CTA from './_components/CTA'


export default function page() {
  return (
    <div>
      <Hero/>
      <TrustedCompanies/>
      <Services/>
      <WhyChoose/>
      <Testimonials/>
      <FAQ/>
      <CTA/>
    </div>
  )
}
