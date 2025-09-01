import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const teamMembers = [
    {
      id: 1,
      name: "Pradeep Modi",
      position: "Director",
      image: '/images/director.jpg',
      bio: "Pradeep Modi has over 20 years of experience in the road safety industry. Under his leadership, our company has expanded operations to 15 states and achieved consistent year-over-year growth. He holds an MBA from Harvard Business School and is passionate about implementing innovative safety solutions that save lives.",
      expertise: [
        "Strategic Planning",
        "Business Development",
        "Industry Relations",
        "Safety Standards Implementation",
      ],
      imagePosition: "left", // Image will appear on the left
    },
    {
      id: 2,
      name: "Varsha Chauhan",
      position: "Director",
      image:"/images/director2.jpg",
      bio: "With a background in civil engineering and 15 years of experience in operations management, Varsha oversees all production processes and ensures our products meet the highest quality standards. She has successfully led the implementation of lean manufacturing principles, reducing waste by 30% while improving product quality.",
      expertise: [
        "Operations Management",
        "Quality Control",
        "Supply Chain Optimization",
        "Process Improvement",
      ],
      imagePosition: "left", // Image will appear on the right
    },
    
  ];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  }, [teamMembers.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  }, [teamMembers.length]);

  // Auto-advance the carousel every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 20 * 1000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  const currentMember = teamMembers[currentIndex];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0.5,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0.5,
    }),
  };

  return (
    <div className="relative overflow-hidden max-w-5xl mx-auto">
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-2 md:left-4 z-10 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-neutral-700 shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-neutral-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-primary-600 dark:text-primary-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
      </div>

      <div className="absolute top-1/2 right-2 md:right-4 z-10 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-neutral-700 shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-neutral-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-primary-600 dark:text-primary-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Carousel Content */}
      <div className="relative h-[550px] md:h-[450px] overflow-hidden rounded-xl shadow-xl bg-white dark:bg-neutral-800">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="w-full h-full bg-white dark:bg-neutral-800 flex flex-row md:flex-row absolute inset-0"
          >
            {/* Left Section - Photo, Name, and Designation */}
            <div className="w-full md:w-1/3 flex flex-col p-4 md:p-6">
              <div className="text-center">
                <div className="w-full h-[200px] md:h-[280px] rounded-lg overflow-hidden shadow-md mb-4">
                  <img
                    src={currentMember.image}
                    alt={currentMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mt-3">
                  {currentMember.name}
                </h3>
                <p className="text-base md:text-lg text-primary-600 dark:text-primary-400 font-medium">
                  {currentMember.position}
                </p>
              </div>
            </div>

            {/* Right Section - Bio and Expertise */}
            <div className="w-full md:w-2/3 p-4 md:p-6 flex flex-col border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700">
              <div className="md:pl-4 overflow-y-auto max-h-[300px] md:max-h-[350px] pr-2">
                <div className="w-12 md:w-16 h-1 bg-primary-600 dark:bg-primary-400 mb-4"></div>

                <div className="mb-6">
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    About:
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                    {currentMember.bio}
                  </p>
                </div>

                <div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Areas of Expertise:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {currentMember.expertise.map((skill, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 mt-0.5 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4 md:mt-6 space-x-3">
        {teamMembers.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary-600 dark:bg-primary-400 scale-125"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-10 bg-neutral-900">
        <div className="container-custom relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-neutral-300">
              Leading manufacturer of high-quality road sign solutions, highway
              furniture, and metal beam crash barriers since 2008.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-white dark:bg-neutral-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
              About SignEx
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300">
              Signex Safety Solutions LLP has emerged as a trusted single-window
              supplier and service provider for roads and highway furniture
              across Central India. With a strong focus on quality, safety, and
              performance, we have steadily grown over the past decade,
              delivering exceptional engineering, construction, and value-added
              services. As a 3M Authorized Convertor, we offer end-to-end
              highway safety solutions including retro-reflective signage,
              thermoplastic road marking, metal crash barriers, and customize
              steel fabrication for gantries and canopy structures. All our
              products are manufactured to meet MORTH and IRC standards,
              ensuring compliance, reliability, and long-term performance. Our
              in-house capabilities and customer-first approach have helped us
              build a solid reputation for efficiency, safety, and timely
              project execution. We take pride in our track record of successful
              ventures and the trust we have earned from clients across
              expressways, national highways, and other major road
              infrastructure projects. At Signex, safety is not just a goal - it
              is a commitment.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="overflow-hidden rounded-xl shadow-medium">
                <img
                  src="/images/happy-diverse-people-holding-road-signs_53876-139626.jpg"
                  alt="Diverse team at Signex Safety Solutions"
                  className="h-[200px] md:h-[400px] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-xl shadow-medium">
                <img
                  src="/images/safety-first-sign-nature_23-2149919552.jpg"
                  alt="Safety First - Our Core Value"
                  className="h-[200px] md:h-[400px] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="section bg-white dark:bg-neutral-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
                Our Story
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                Founded in 2025, SignEx began as a small workshop dedicated to
                manufacturing high-quality road signs. With a commitment to
                excellence and safety, we quickly expanded our operations to
                become a leading provider of road safety infrastructure.
              </p>
              <p className="text-neutral-600 dark:text-neutral-300">
                Today, we operate a state-of-the-art manufacturing facility
                spanning over 50,000 square feet, equipped with the latest
                technology to produce premium road safety products that meet
                international standards.
              </p>
              <p className="text-neutral-600 dark:text-neutral-300">
                Our journey has been driven by a singular mission: to enhance
                road safety through innovative, durable, and reliable products
                that protect lives on highways and roads across the nation.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="overflow-hidden rounded-xl shadow-medium">
                <img
                  src="/images/smiling-confidently-pointing-own-broad-smile_1194-413973.jpg"
                  alt="Confident Signex Team Member"
                  className="h-[200px] md:h-[400px] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-xl shadow-medium">
                <img
                  src="/images/looking-excited-surprised-pointing-side_1194-413889.jpg"
                  alt="Excited Signex Team Member"
                  className="h-[200px] md:h-[400px] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-neutral-50 dark:bg-neutral-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
              Our Mission & Vision
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Guided by clear principles and forward-thinking goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-8 bg-white dark:bg-neutral-700 shadow-soft dark:shadow-none"
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg mr-4">
                  <svg
                    className="w-8 h-8 text-primary-600 dark:text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                  Our Mission
                </h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-200">
                To enhance road safety through innovative, durable, and reliable
                products that protect lives. We are committed to manufacturing
                high-quality road safety infrastructure that meets the highest
                standards of performance and reliability, contributing to safer
                roads for all.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8 bg-white dark:bg-neutral-700 shadow-soft dark:shadow-none"
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg mr-4">
                  <svg
                    className="w-8 h-8 text-primary-600 dark:text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                  Our Vision
                </h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-200">
                To be the leading provider of road safety infrastructure in the
                region, recognized for innovation, quality, and commitment to
                safety. We envision a future where our products contribute
                significantly to reducing road accidents and creating safer
                transportation networks globally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-white dark:bg-neutral-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
              Our Core Values
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              The principles that guide our operations and define our corporate
              culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Quality",
                description:
                  "We are committed to manufacturing products of the highest quality that exceed industry standards.",
                icon: (
                  <svg
                    className="w-10 h-10 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                ),
              },
              {
                title: "Safety",
                description:
                  "Safety is at the core of everything we do, from product design to manufacturing processes.",
                icon: (
                  <svg
                    className="w-10 h-10 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                ),
              },
              {
                title: "Innovation",
                description:
                  "We continuously innovate to improve our products and manufacturing processes.",
                icon: (
                  <svg
                    className="w-10 h-10 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                ),
              },
              {
                title: "Integrity",
                description:
                  "We conduct our business with honesty, transparency, and ethical practices.",
                icon: (
                  <svg
                    className="w-10 h-10 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    ></path>
                  </svg>
                ),
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center bg-white dark:bg-neutral-700 shadow-soft dark:shadow-none"
              >
                <div className="flex justify-center mb-4">
                  <div className="text-primary-600 dark:text-primary-400">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-200">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-neutral-50 dark:bg-neutral-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
              Our Leadership Team
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Meet the experienced professionals guiding our company to
              excellence
            </p>
          </motion.div>

          <TeamCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Join Us in Making Roads Safer
            </h2>
            <p className="text-xl text-primary-100">
              Partner with SignEx for high-quality road safety infrastructure
              solutions.
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-primary-700 hover:bg-primary-50 inline-block"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
