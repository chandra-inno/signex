// Using motion components for animations
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/traffic-cone-city-street-night-with-blurred-lights_68708-29347.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        className="relative z-10 text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-5xl font-bold mb-4 text-[#FFFDD0] font-serif tracking-wide">
          <TypeAnimation
            sequence={[
              'Welcome to Signex',
              1000,
              'We create beautiful Roads .',
              1000,
              'And road safety solutions.',
              1000,
            ]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
          />
        </h1>
      </motion.div>
    </div>
      {/* Services Preview */}
      <section className="section bg-neutral-50 dark:bg-neutral-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">Our Premium Services</h2>
            <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              We offer a comprehensive range of road safety solutions designed to meet the highest industry standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Road Sign Boards',
                description: 'High-quality, durable road sign boards that meet all regulatory standards.',
                icon: (
                  <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                ),
              },
              {
                title: 'Highway Furniture',
                description: 'Complete range of highway furniture for safe and efficient traffic management.',
                icon: (
                  <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                  </svg>
                ),
              },
              {
                title: 'Crash Barriers',
                description: 'Metal beam crash barriers designed for maximum safety and impact absorption.',
                icon: (
                  <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
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
                className="card p-8 flex flex-col items-center text-center bg-white dark:bg-neutral-700 shadow-soft dark:shadow-none"
              >
                <div className="mb-4 text-primary-600 dark:text-primary-400">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">{service.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-200 mb-6">{service.description}</p>
                <Link to="/services" className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors mt-auto">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section bg-white dark:bg-neutral-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" 
                alt="About SignEx" 
                className="rounded-xl shadow-medium h-[400px] w-full object-cover"
               
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">Committed to Road Safety Excellence</h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                For over 15 years, SignEx has been at the forefront of road safety infrastructure, 
                providing high-quality signage and safety solutions for highways and roads across the country.
              </p>
              <ul className="space-y-3">
                {[
                  'ISO 9001:2015 certified manufacturing',
                  'Compliance with all national safety standards',
                  'Experienced team of engineers and designers',
                  'Commitment to sustainable manufacturing practices',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 mt-1 text-primary-600 dark:text-primary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-neutral-800 dark:text-neutral-200">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn btn-primary inline-block">
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Enhance Road Safety?</h2>
            <p className="text-xl text-primary-100">
              Contact us today for a consultation and quote on your road safety infrastructure needs.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50 inline-block">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
