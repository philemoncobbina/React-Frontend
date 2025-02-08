import React from 'react'
import Navbar from '@/Templates/Navbar';
import CareerTools from '@/layouts/Career/CareerTools'
import WorkforceSection from '@/layouts/Career/WorkforceSection';
import CoreValuesSection from '@/layouts/Career/CoreValuesSection';
import JobOpeningsSection from '@/layouts/Career/JobOpeningsSection';

const CareerPage = () => {
    return (
        <>
          <Navbar />
          <CareerTools />
          <CoreValuesSection />
          <WorkforceSection />
          <JobOpeningsSection />
        </>
      )
}

export default CareerPage
