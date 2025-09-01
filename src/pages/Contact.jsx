import { useState } from "react";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "What types of road signs do you manufacture?",
      answer:
        "We manufacture a comprehensive range of road signs including regulatory signs, warning signs, guide signs, informational signs, and custom signage for specific requirements. All our signs comply with national and international standards for visibility, durability, and safety.",
    },
    {
      question:
        "Do you offer installation services for your products?",
      answer:
        "Yes, we provide professional installation services for all our products. Our experienced team ensures proper installation according to safety standards and specifications, guaranteeing optimal performance and longevity of the products.",
    },
    {
      question: "What is the typical lead time for orders?",
      answer:
        "Lead times vary depending on the product type, quantity, and customization requirements. Standard products typically have a lead time of 1-2 weeks, while custom orders may take 2-4 weeks. For large projects, we recommend contacting us in advance to discuss timelines.",
    },
    {
      question: "Do you provide warranties for your products?",
      answer:
        "Yes, all our products come with warranties. Standard road signs have a 5-year warranty against manufacturing defects, while crash barriers and highway furniture typically have warranties ranging from 2-7 years depending on the specific product. Please contact us for detailed warranty information.",
    },
    {
      question:
        "Can you handle large-scale highway infrastructure projects?",
      answer:
        "Absolutely. We have extensive experience managing large-scale highway infrastructure projects. Our team can handle everything from initial consultation and design to manufacturing, installation, and maintenance, ensuring a comprehensive solution for your project needs.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="card border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden animate-fadeIn"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <button
            className="w-full flex justify-between items-center p-5 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
            onClick={() => toggleAccordion(index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-content-${index}`}
          >
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
              {faq.question}
            </h3>
            <span 
              className="text-primary-500 transition-transform duration-300" 
              style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          <div 
            id={`faq-content-${index}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
          >
            <div className="p-5 pt-0 border-t border-neutral-200 dark:border-neutral-700">
              <p className="text-neutral-600 dark:text-neutral-300">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: "Road Sign Boards",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Reset form after showing success message
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          service: "Road Sign Boards",
        });
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-10 bg-neutral-900">
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-3xl mx-auto text-center animate-fadeIn">
            <p className="text-lg text-neutral-300">
              Get in touch with our team for inquiries, quotes, or any
              information about our products and services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section bg-white dark:bg-neutral-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fadeIn">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">
                  Get In Touch
                </h2>
                <p className="text-neutral-600 dark:text-neutral-300 mb-8">
                  Have questions about our products or services? Need a quote
                  for your project? Our team is ready to assist you. Reach out
                  to us using the contact information below or fill out the
                  form, and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-primary-600 dark:text-primary-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-neutral-900 dark:text-white">
                      Our Location
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                    SIGNEX SAFETY SOLUTIONS LLP,Mundra Ki Badi, Meera Munch Ke Pass, Bundi Road, Delhi Gate, Chittorgarh, Rajasthan, 312001, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-primary-600 dark:text-primary-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-neutral-900 dark:text-white">
                      Phone Number
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      +91 80589 46520
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      +91 79768 95037
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-primary-600 dark:text-primary-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-neutral-900 dark:text-white">
                      Email Address
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      contact@signexsafety.com
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      sales@signexsafety.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-primary-600 dark:text-primary-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-neutral-900 dark:text-white">
                      Business Hours
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Monday - Friday: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Saturday: 9:00 AM - 1:00 PM
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-lg font-bold mb-4 text-neutral-900 dark:text-white">
                  Connect With Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-neutral-100 dark:bg-neutral-700 hover:bg-primary-100 dark:hover:bg-primary-900/30 p-3 rounded-full transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-neutral-700 dark:text-neutral-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-neutral-100 dark:bg-neutral-700 hover:bg-primary-100 dark:hover:bg-primary-900/30 p-3 rounded-full transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-neutral-700 dark:text-neutral-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-neutral-100 dark:bg-neutral-700 hover:bg-primary-100 dark:hover:bg-primary-900/30 p-3 rounded-full transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-neutral-700 dark:text-neutral-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-neutral-100 dark:bg-neutral-700 hover:bg-primary-100 dark:hover:bg-primary-900/30 p-3 rounded-full transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-neutral-700 dark:text-neutral-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.599-.1-.899a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fadeIn">
              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

                {submitted ? (
                  <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 p-4 rounded-lg mb-6 animate-fadeIn">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2"
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
                      <span className="font-medium">
                        Thank you for your message! We'll get back to you
                        shortly.
                      </span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white transition-colors"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                      >
                        Service of Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white transition-colors"
                      >
                        <option value="Road Sign Boards">
                          Road Sign Boards
                        </option>
                        <option value="Highway Furniture">
                          Highway Furniture
                        </option>
                        <option value="Metal Beam Crash Barriers">
                          Metal Beam Crash Barriers
                        </option>
                        <option value="Installation Services">
                          Installation Services
                        </option>
                        <option value="Maintenance & Repair">
                          Maintenance & Repair
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white transition-colors"
                        placeholder="Please provide details about your inquiry..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn btn-primary w-full flex justify-center items-center ${
                        isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-neutral-50 dark:bg-neutral-800">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
              Our Location
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Visit our manufacturing facility and office headquarters
            </p>
          </div>
          {!loading ? (
            <div className="mt-8">
              <div className="w-full h-[550px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.004521999497!2d77.7150945!3d12.9736616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae118a0a2c45c9%3A0x559e02d7f4663cdc!2sCapgemini%20Technology%20Services%20India%20Limited!5e0!3m2!1sen!2sin!4v1718021234567!5m2!1sen!2sin"
                  width="100%"
                  height="500"
                  style={{
                    border: 0,
                    borderRadius: "4px",
                    marginTop: "2px",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          ) : (
            <div className="rounded-xl overflow-hidden shadow-medium h-96 animate-fadeIn">
              {/* Placeholder for an actual map */}
              <div className="bg-neutral-200 dark:bg-neutral-700 w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 text-neutral-400 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    Interactive Map Would Be Displayed Here
                  </p>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-2">
                    123 Business Avenue, Industrial Zone, City
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white dark:bg-neutral-900">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Quick answers to common questions about our products and services
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>
    </div>
  );
};

export default Contact;
