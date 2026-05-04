import React from 'react'
import { Minus } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'

function Services() {
  return (
    <div className='flex justify-center'>
      <section className="w-[80vw]  flex flex-col mt-20 mb-20">
            <div className='space-y-3 mb-10'>
                <h4 className='flex font-bold text-amber-300'> <Minus /> What We Offer</h4>
                <h1 className='font-bold font-serif text-5xl'>Built for <span className='text-amber-300'>Every</span>  Family Need</h1>
                <p className=' tracking-1'>From everyday support to life's biggest moments — we have a service that fits.</p>
            </div>
            <div className='grid justify-items-center gap-x-10 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'>
                <ServiceCard
                icons="🏡"
                headtitle='Home Management'
                description='Keep your household running smoothly with our curated home services, from cleaning to repairs and maintenance.'
                />

                <ServiceCard
                icons="🏡"
                headtitle='Education Hub'
                description="Support your children's learning journey with tutoring, resources, and an enriching community of parents"
                />

                <ServiceCard
                icons="🏡"
                headtitle='Education Hub'
                description="Support your children's learning journey with tutoring, resources, and an enriching community of parents"
                />

                <ServiceCard
                icons="🏡"
                headtitle='Education Hub'
                description="Support your children's learning journey with tutoring, resources, and an enriching community of parents"
                />

                <ServiceCard
                icons="🏡"
                headtitle='Education Hub'
                description="Support your children's learning journey with tutoring, resources, and an enriching community of parents"
                />

                <ServiceCard
                icons="🏡"
                headtitle='Education Hub'
                description="Support your children's learning journey with tutoring, resources, and an enriching community of parents"
                />
            </div>

      </section>
    </div>
  )
}

export default Services
