import YtHero from '@/components/service-page-ui/Yt-Hero'
import YtHowitworks from '@/components/service-page-ui/Yt-Howitworks'
import YtPortfolio from '@/components/service-page-ui/Yt-Portfolio'
import YtPricing from '@/components/service-page-ui/Yt-Pricing'
import YtResults from '@/components/service-page-ui/Yt-Results'
import YtCalendly from '@/components/service-page-ui/YtCalendly'
import YtTestimonials from '@/components/service-page-ui/YtTestimonials'
import React from 'react'

const page = () => {
    return (
        <>
            <YtHero />
            <YtPortfolio />
            <YtHowitworks />
            <YtTestimonials />
            <YtPricing />
            <YtCalendly />
        </>
    )
}

export default page