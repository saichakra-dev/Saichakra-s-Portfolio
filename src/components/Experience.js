import React from "react";
// import freelancer from "../assets/Images/freelancer.jpeg";
// import Kodnest from "../assets/Images/kodNest.jpeg";

const Experience = () => {
  return (
    <section className="py-3 px-3 bg-white mt-4 md:mt-7">
      <div className="mx-auto max-w-xl">
        <div id="experience" className="flex flex-col text-center mb-4 w-full">
          <h1 className="text-3xl sm:text-4xl font-medium title-font mb-2">
            Experience
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg mx-auto leading-relaxed font-medium text-dark-orange text-center"
          >
            Professional Experience
          </p>
        </div>

        {/* Freelancer Experience */}
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          data-aos-once="false"
          className="max-w-xl mx-auto p-4 rounded-xl shadow-md bg-slate-100"
        >
          <div className="flex flex-col font-medium gap-1 w-full">
            <h1 className="text-xl md:text-2xl font-semibold">
              Full Stack Developer - Freelancer
            </h1>
            <div className="flex items-center justify-center gap-3 text-lg text-gray-700 md:text-xl">
              Freelancing Projects
            </div>
            <p className="text-base md:text-base text-gray-500">
              January 2024 - Present
            </p>
          </div>
          <div className="flex w-fit mx-auto">
            <ul
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="false"
              className="pl-3 md:pl-7 list-disc leading-loose max-w-max text-base text-justify md:text-start md:text-lg font-medium"
            >
              <li className="py-2 md:py-3">
                Designed and developed a patient management system for Srujana
                Nursing Home using the MERN stack and Supabase, enabling
                streamlined record-keeping and billing processes.
              </li>
              <li className="py-2 md:py-3">
                Built "Cytilitics," an AI-powered image processing application
                to analyze vehicle details using Google Generative AI and
                Cloudinary.
              </li>
              <li className="py-2 md:py-3">
                Delivered a hackathon platform leveraging Next.js and Tailwind
                CSS, featuring user registration, challenge creation, and image
                storage via AWS S3.
              </li>
              <li className="py-2 md:py-3">
                Created a real-time image processing app, enabling image
                adjustments and conversions, with a 25% improvement in
                processing speed using Sharp.
              </li>
            </ul>
          </div>
        </div>

        {/* KodNest Experience */}
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          data-aos-once="false"
          className="max-w-xl mx-auto p-4 rounded-xl shadow-md bg-slate-100 mt-6"
        >
          <div className="flex flex-col font-medium gap-1 w-full">
            <h1 className="text-xl md:text-2xl font-semibold">
              Full Stack Developer - KodNest
            </h1>
            <div className="flex items-center justify-center gap-3 text-lg text-gray-700 md:text-xl">
              Full-Time Role
            </div>
            <p className="text-base md:text-base text-gray-500">
              June 2023 - December 2023
            </p>
          </div>
          <div className="flex w-fit mx-auto">
            <ul
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="false"
              className="pl-3 md:pl-7 list-disc leading-loose max-w-max text-base text-justify md:text-start md:text-lg font-medium"
            >
              <li className="py-2 md:py-3">
                Worked on end-to-end web application development using the MERN
                stack.
              </li>
              <li className="py-2 md:py-3">
                Collaborated with a team to create a dynamic dashboard for
                internal tools.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
