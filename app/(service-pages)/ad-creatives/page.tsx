import AdCalendly from '@/components/service-page-ui/Ad-Calendly'
import AdHero from '@/components/service-page-ui/Ad-hero'
import Adportfolio from '@/components/service-page-ui/Ad-portfolio'
import AdPricing from '@/components/service-page-ui/Ad-Pricing'
import AdProcess from '@/components/service-page-ui/Ad-Process'
import AdResults from '@/components/service-page-ui/Ad-results'
import Adsolutionproblem from '@/components/service-page-ui/Ad-solution-problem'
import React from 'react'

const page = () => {
  return (
    <>
      <AdHero />
      <Adportfolio />
      <Adsolutionproblem />
      <AdResults />
      <AdProcess />
      <AdPricing />
      <AdCalendly />
    </>
  )
}

export default page