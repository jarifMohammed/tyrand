import React from 'react'
import OurWorksHero from './_components/hero'
import OurWorks from './_components/OurWorks'
import CTA from '../_components/CTA'

export default function page() {
  return (
    <div>
        <OurWorksHero />
        <OurWorks/>
        <CTA/>
    </div>
  )
}
