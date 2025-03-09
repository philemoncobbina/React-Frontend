import React from 'react'
import Navbar from '@/Templates/Navbar';
import CareerTools from '@/layouts/Career/CareerTools'
import WorkforceSection from '@/layouts/Career/WorkforceSection';
import CoreValuesSection from '@/layouts/Career/CoreValuesSection';
import WhyWorkWithUs from '@/layouts/Career/WhyWorkWithUs';
import Footer from '@/Templates/Footer';

const CareerPage = () => {
    return (
        <>
          <Navbar />
          <CareerTools />
          <CoreValuesSection />
          <WorkforceSection />
          <WhyWorkWithUs />
          <Footer />
        </>
      )
}

export default CareerPage
