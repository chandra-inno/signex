import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveAs } from "file-saver";

const Services = () => {
  const [hoveredCert, setHoveredCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "ISO 9001:2015",
      description: "Quality Management System Certification",
      filename: "signex safety solutions llp - iso 9001-2015.pdf",
      icon: "🏆",
    },
    {
      id: 2,
      title: "ISO 14001:2015",
      description: "Environmental Management System Certification",
      filename: "signex safety solutions llp - iso 14001-2015.pdf",
      icon: "🌿",
    },
    {
      id: 3,
      title: "ISO 45001:2018",
      description: "Occupational Health and Safety Management System",
      filename: "signex safety solutions llp - iso 45001-2018.pdf",
      icon: "🛡️",
    },
    {
      id: 4,
      title: "Udyam Registration",
      description: "Official Business Registration Certificate",
      filename: "Print - Udyam Registration Certificate.pdf",
      icon: "📜",
    },
  ];

  const handleDownload = (certificate) => {
    try {
      saveAs(`/certifications/${certificate.filename}`, certificate.filename);
      toast.success(
        `${certificate.title} certificate downloaded successfully!`,
        {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    } catch (error) {
      toast.error(`Failed to download certificate: ${error.message}`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
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
              Comprehensive road safety infrastructure solutions designed to
              meet the highest standards
            </p>
          </motion.div>
        </div>
      </section>
      {/* Certifications Section */}
      <section className="section bg-white dark:bg-neutral-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">Our Certifications</h2>
            <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              We are proud to maintain the highest industry standards through
              these certifications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificates.map((cert) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: cert.id * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
                onMouseEnter={() => setHoveredCert(cert.id)}
                onMouseLeave={() => setHoveredCert(null)}
              >
                <div className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-neutral-200 dark:border-neutral-700 h-full flex flex-col">
                  <div className="p-6 flex-grow">
                    <div className="text-4xl mb-4">{cert.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">{cert.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-4">{cert.description}</p>
                  </div>
                  <div className="p-4 bg-neutral-50 dark:bg-neutral-700 border-t border-neutral-200 dark:border-neutral-600">
                    <button
                      onClick={() => handleDownload(cert)}
                      className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        ></path>
                      </svg>
                      Download Certificate
                    </button>
                  </div>
                  {hoveredCert === cert.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -top-2 -right-2 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-xs font-bold px-2 py-1 rounded-full z-10"
                    >
                      Click to download
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Main Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Premium Road Safety Solutions
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We offer a comprehensive range of high-quality products and
              services to enhance road safety
            </p>
          </motion.div>

          {/* Road Sign Boards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-lg font-medium mb-4">
              Premium Quality
            </div>
            <h3 className="text-2xl font-bold mb-4">Road Sign Boards</h3>
            <p className="text-neutral-600 mb-6">
              Our road sign boards are manufactured using high-grade materials
              that ensure durability, visibility, and weather resistance. We
              produce a wide range of signage including regulatory signs,
              warning signs, guide signs, and informational signs that comply
              with all national and international standards.
            </p>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <ul className="space-y-3 md:w-1/2">
                {[
                  "Reflective and non-reflective options",
                  "Custom sizes and designs available",
                  "Weather-resistant and UV-protected",
                  "High visibility in all lighting conditions",
                  "Compliant with regulatory standards",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 mt-1 text-primary-600 mr-3"
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
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="overflow-hidden rounded-xl shadow-medium">
                  <img
                    src="/images/choose-right-way-realistic-concept_1284-5715.jpg"
                    alt="Height Limit Road Sign"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-xl shadow-medium">
                  <img
                    src="/images/png-road-signs-isolated-white-background_185193-162801.jpg"
                    alt="Recently Built Highway"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
            </div>
            </div>
          </motion.div>

          {/* Highway Furniture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-lg font-medium">
                Comprehensive Solutions
              </div>
              <h3 className="text-2xl font-bold">Highway Furniture</h3>
              <p className="text-neutral-600">
                Our highway furniture range includes all the essential elements
                needed for effective traffic management and road safety. From
                delineators and barriers to traffic cones and road studs, we
                provide a complete suite of products designed to guide traffic
                and enhance safety on roads and highways.
              </p>
              <ul className="space-y-3">
                {[
                  "Traffic cones and delineators",
                  "Road studs and markers",
                  "Bollards and channelizers",
                  "Safety barricades and barriers",
                  "Traffic management equipment",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 mt-1 text-primary-600 mr-3"
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
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {/* add images  */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="overflow-hidden rounded-xl shadow-medium">
                  <img
                     src="/images/road signs.jpg"
                    alt="Height Limit Road Sign"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-xl shadow-medium">
                  <img
                    src="/images/traffic-signs-road_1139-255.jpg"
                    alt="Recently Built Highway"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
             </div>
            </div>
          </motion.div>

          {/* Metal Beam Crash Barriers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-lg font-medium">
                Maximum Safety
              </div>
              <h3 className="text-2xl font-bold">Metal Beam Crash Barriers</h3>
              <p className="text-neutral-600">
                Our metal beam crash barriers are designed to absorb impact
                energy and redirect vehicles back onto the road, minimizing
                damage and preventing serious accidents. Made from high-strength
                steel, these barriers provide reliable protection on highways,
                bridges, and other high-risk areas.
              </p>
              <ul className="space-y-3">
                {[
                  "W-beam and thrie-beam guardrails",
                  "End treatments and terminals",
                  "Bridge railings and transitions",
                  "Median barriers and crash cushions",
                  "Custom barrier solutions for specific needs",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 mt-1 text-primary-600 mr-3"
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
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="overflow-hidden rounded-xl shadow-medium">
                  <img
                    src="/images/height-limit-road-sign-highway-road-slovenia_250132-14082.jpg"
                    alt="Height Limit Road Sign"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-xl shadow-medium">
                  <img
                    src="/images/new-recently-built-highway-brcko-district-bosnia-herzegovina_181624-3247(1).jpg"
                    alt="Recently Built Highway"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Beyond manufacturing, we offer comprehensive services to ensure
              complete road safety solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Installation Services",
                description:
                  "Professional installation of all our products by experienced technicians, ensuring optimal performance and safety.",
                icon: (
                  <svg
                    className="w-12 h-12 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                ),
              },
              {
                title: "Maintenance & Repair",
                description:
                  "Regular maintenance and prompt repair services to ensure the longevity and effectiveness of installed safety infrastructure.",
                icon: (
                  <svg
                    className="w-12 h-12 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    ></path>
                  </svg>
                ),
              },
              {
                title: "Consultation & Design",
                description:
                  "Expert consultation and custom design services to develop tailored road safety solutions for specific project requirements.",
                icon: (
                  <svg
                    className="w-12 h-12 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                ),
              },
              {
                title: "Safety Audits",
                description:
                  "Comprehensive safety audits to identify potential hazards and recommend appropriate safety measures for roads and highways.",
                icon: (
                  <svg
                    className="w-12 h-12 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    ></path>
                  </svg>
                ),
              },
              {
                title: "Project Management",
                description:
                  "End-to-end project management for large-scale road safety infrastructure implementation projects.",
                icon: (
                  <svg
                    className="w-12 h-12 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    ></path>
                  </svg>
                ),
              },
              {
                title: "Training Programs",
                description:
                  "Training programs for maintenance crews and safety personnel on proper installation and maintenance of road safety equipment.",
                icon: (
                  <svg
                    className="w-12 h-12 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    ></path>
                  </svg>
                ),
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 flex flex-col items-center text-center"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Combined Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="md:w-1/2">
              <div className="overflow-hidden rounded-xl shadow-medium">
                <img
                  src="/images/image.png"
                  alt="Comprehensive Highway Safety Solutions"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-lg font-medium">
                One-Stop Solution
              </div>
              <h3 className="text-2xl font-bold">Complete Highway & Road Safety Solutions</h3>
              <p className="text-neutral-600 text-lg">
                We are capable of handling all highway and road safety solutions under one roof. As your one-stop solution provider, we deliver comprehensive safety infrastructure that meets the highest industry standards and regulatory requirements.
              </p>
              <Link
                to="/contact"
                className="btn bg-primary-600 text-white hover:bg-primary-700 inline-flex items-center"
              >
                <span>Get Started</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
            </div>
          </motion.div>
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
              Need a Customized Solution?
            </h2>
            <p className="text-xl text-primary-100">
              Contact our team to discuss your specific road safety
              requirements.
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-primary-700 hover:bg-primary-50 inline-block"
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </section>

      <ToastContainer />
    </div>
  );
};

export default Services;
