import React from 'react';

const AdmissionTools = () => {
  return (
    <section className="py-16 bg-gray-100 overflow-hidden ">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap lg:items-center -m-8">
      <div className="w-full md:w-1/2 p-8">
        <div className="md:max-w-md">
          <span className="inline-block mb-4 text-sm text-blue-500 font-bold uppercase tracking-widest">Admission Process</span>
          <h2 className="font-heading mb-6 text-4xl md:text-5xl text-gray-900 font-black tracking-tight">Streamlined Admissions for a Smooth Experience</h2>
           <p className="mb-5 text-gray-700 font-bold">Gain access to all necessary information and tools for a seamless admissions process. Our platform provides step-by-step guidance to help you through each stage.</p>
          <div className="flex flex-wrap -m-2">
            <div className="w-full md:w-auto p-2"><a className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full" href="/admission/apply">Apply online</a></div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-8">
        <div className="py-16 px-8 bg-white rounded-3xl">
          <div className="max-w-md mx-auto">
            <div className="flex flex-wrap -m-3">
              <div className="w-full p-3">
                <div className="flex flex-wrap -m-4">
                  <div className="flex flex-col items-center w-auto p-4">
                    <div className="flex items-center justify-center mb-6 w-16 h-16 text-xl text-gray-900 font-black bg-gray-100 rounded-full">
                      <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z" fill="#3B82F6"></path>
                        <path d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z" fill="#3B82F6"></path>
                        <path d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z" fill="#3B82F6"></path>
                      </svg>
                    </div>
                    <div className="w-px h-24 bg-gray-200"></div>
                  </div>
                  <div className="flex-1 p-4">
                        <a href="your-link-here" className="font-heading mb-3 text-2xl text-gray-900 font-bold">
                          <h4>Admission Requirements</h4>
                        </a>
                        <p className="text-gray-700 font-bold">Learn about the criteria and documents needed for a successful application. <br /> <a href="your-link-here" className="text-blue-500 hover:text-blue-700">Read More</a></p>
                      </div>
                </div>
              </div>
              <div className="w-full p-3">
                <div className="flex flex-wrap -m-4">
                  <div className="flex flex-col items-center w-auto p-4">
                    <div className="flex items-center justify-center mb-6 w-16 h-16 text-xl text-gray-900 font-black bg-gray-100 rounded-full">
                      <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z" fill="#3B82F6"></path>
                        <path d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z" fill="#3B82F6"></path>
                        <path d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z" fill="#3B82F6"></path>
                      </svg>
                    </div>
                    <div className="w-px h-24 bg-gray-200"></div>
                  </div>
                  <div className="flex-1 p-4">
                        <a href="your-link-here" className="font-heading mb-3 text-2xl text-gray-900 font-bold">
                          <h4>Financial Aid</h4>
                        </a>
                        <p className="text-gray-700 font-bold">Find out about the financial aid options available to support your education. <br />  <a href="your-link-here" className="text-blue-500 hover:text-blue-700">Read More</a></p>
                      </div>
                </div>
              </div>
              <div className="w-full p-3">
                <div className="flex flex-wrap -m-4">
                  <div className="flex flex-col items-center w-auto p-4">
                    <div className="flex items-center justify-center mb-6 w-16 h-16 text-xl text-gray-900 font-black bg-gray-100 rounded-full">
                      <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z" fill="#3B82F6"></path>
                        <path d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z" fill="#3B82F6"></path>
                        <path d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z" fill="#3B82F6"></path>
                      </svg>
                    </div>
                    <div className="md:hidden w-px h-24 bg-gray-200"></div>
                  </div>
                  <div className="flex-1 p-4">
                     <a href="/contact/reservation" className="font-heading mb-3 text-2xl text-gray-900 font-bold">
  <h4>Schedule a Visit</h4>
</a>
                    <p className="text-gray-700 font-bold">Explore the vibrant campus life and extracurricular activities we offer. <br />  <a href="/contact/reservation" className="text-blue-500 hover:text-blue-700">Read More</a></p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default AdmissionTools;
