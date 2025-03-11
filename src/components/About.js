import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section className="body-font">
      <div className="p-5 mt-3 mx-auto md:mt-5 md:mx-10 lg:mx-16">
        <div id="about" className="flex flex-col text-center w-full mb-3">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">
            About Me
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg mx-auto leading-relaxed font-medium text-dark-orange text-center"
          >
            Why hire me ?
          </p>
        </div>
        <div className="mx-auto flex lg:flex-row flex-col items-center justify-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="lg:max-w-lg sm:w-2/3 lg:w-1/2 w-full mb-10 md:mb-0"
          >
            <img
              className="object-cover object-center pointer-events-none rounded backdrop-contrast-200 backdrop-brightness-200"
              alt="hero"
              src={require("../assets/Images/about.png")}
            />
          </div>
          <div className="lg:w-1/2 justify-center lg:p-5 xl:p-7 md:p-5 flex flex-col items-center text-justify">
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="false"
              className="font-medium text-gray-700 text-lg lg:text-base xl:text-xl leading-loose xl:leading-8"
            >
              I’m a passionate and dedicated full-stack web developer with over
              2 years of experience in designing and building dynamic, scalable,
              and highly functional applications.
              <br />
              <br />
              My technical expertise spans a wide range of modern technologies,
              including HTML5, CSS3, JavaScript, React, Next.js, and Tailwind
              CSS for frontend development. On the backend, I excel in Java,
              Node.js, Express.js and Spring Boot, leveraging these tools to
              create robust APIs, microservices, and secure,
              performance-oriented applications.
              <br />
              <br />
              With hands-on experience in AWS tools such as EC2, S3, and RDS, I
              ensure seamless deployment and scalability of web applications. My
              skill set also includes implementing authentication mechanisms
              (JWT, OAuth), optimizing database performance (MySQL,
              MongoDB),Docker, Kubernetes and deploying CI/CD pipelines for
              streamlined development workflows.
              <br />
              <br />I am deeply committed to tackling new challenges and
              contributing to innovative projects that combine technical
              excellence with user-centric design. Let’s connect and build
              exceptional solutions together!
            </p>

            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="false"
              className="mt-7 flex gap-x-4 md:gap-x-5 justify-center md:justify-between"
            >
              <button className="inline-flex font-medium text-white bg-black border-2 border-black py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Hire Me
                </Link>
              </button>
              <a
                href={process.env.REACT_APP_RESUME_URL}
                target="_blank"
                rel="noreferrer"
              >
                <button className="inline-flex font-medium text-white bg-dark-orange border-2 border-dark-orange py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
                  Get Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
