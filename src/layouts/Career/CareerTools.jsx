import React from 'react';

const CareerTools = () => {
  return (
    <div style={{ marginTop: '4rem' }} className="relative bg-gray-900 text-white h-[44rem] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute   top-0 left-0 right-0 bottom-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/5212348/pexels-photo-5212348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-10"></div>

      {/* Content Wrapper */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center p-8">
        {/* Hero Content */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-extrabold leading-tight mb-4">Together, all the way</h1>
          <p className="text-lg mb-1">
            We're a global leader in container trade and logistics. And we're embarking on an industry-defining transformation that will change the way the world moves. It's a big moment for all of us – and we all have our part to play. Are you ready?
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4  w-full max-w-screen-lg mx-auto">
          <a
            href="/careers/work-with-us"
            className="text-white overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <div className="relative p-8">
              {/* Working with us Icon */}
              <img
                src="https://www.maersk.com/~/media_sc9/maersk/shared-files/icons/negative/working-with-us_pictogram_v4.svg"
                alt="Working with us"
                className="w-24 h-24 object-contain mx-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <span className="text-white font-semibold">Working with us</span>
              </div>
            </div>
          </a>
          <a
            href="/careers/our-teams"
            className="text-white overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <div className="relative p-8">
              {/* Our teams Icon */}
              <img
                src="https://www.maersk.com/~/media_sc9/maersk/shared-files/icons/negative/our_teams_pictogram_v2.svg"
                alt="Our teams"
                className="w-24 h-24 object-contain mx-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <span className="text-white font-semibold">Our teams</span>
              </div>
            </div>
          </a>
          <a
            href="/careers/recruitment-process"
            className="text-white overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <div className="relative p-8">
              {/* Applying with us Icon */}
              <img
                src="https://www.maersk.com/~/media_sc9/maersk/shared-files/icons/negative/applying-with-us_pictogram_v5.svg"
                alt="Applying with us"
                className="w-24 h-24 object-contain mx-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <span className="text-white font-semibold">Applying with us</span>
              </div>
            </div>
          </a>
          <a
            href="https://www.maersk.com/careers/vacancies"
            className="text-white overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <div className="relative p-8">
              {/* Vacancies Icon */}
              <img
                src="https://www.maersk.com/~/media_sc9/maersk/shared-files/icons/negative/vacancies-career-landing-page_pictogram.svg"
                alt="Vacancies"
                className="w-24 h-24 object-contain mx-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <span className="text-white font-semibold">Vacancies</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareerTools;
