import SaasCalendly from '@/components/service-page-ui/Saas-Calendly'
import SaasHero from '@/components/service-page-ui/Saas-Hero'
import SaasPortfolio from '@/components/service-page-ui/Saas-Portfolio'
import SaasPricing from '@/components/service-page-ui/Saas-Pricing'
import SaasProcess from '@/components/service-page-ui/Saas-Process'
import SaasResults from '@/components/service-page-ui/Saas-Results'
import React from 'react'

const page = () => {
    return (
        <>
            <SaasHero />
            <SaasPortfolio />
            <SaasResults />
            <SaasProcess />
            <SaasPricing />
            <SaasCalendly />
        </>
    )
}

export default page