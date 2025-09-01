import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Media = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the list of images from the gallery folder
    const fetchImages = async () => {
      try {
        // In a real app, you might want to fetch this list from an API
        // For now, we'll manually list the images from the gallery folder
        const galleryImages = [
          "WhatsApp Image 2025-08-30 at 10.23.35_097296c1.jpg",
          "WhatsApp Image 2025-08-30 at 10.23.35_21f0ce5d.jpg",
          "WhatsApp Image 2025-08-30 at 10.23.35_9e1b6a6d.jpg",
          "WhatsApp Image 2025-08-30 at 10.23.36_47d6fc41.jpg",
          "WhatsApp Image 2025-08-30 at 10.23.36_6d10c6fe.jpg",
          "WhatsApp Image 2025-08-30 at 10.23.36_9faaf1f6.jpg",
          "WhatsApp Image 2025-08-30 at 10.23.37_a9e066d4.jpg",
          "WhatsApp Image 2025-08-30 at 10.23.38_1e30f3fb.jpg",
          "WhatsApp Image 2025-08-30 at 10.23.39_74dc71a7.jpg",
          "WhatsApp Image 2025-08-30 at 10.23.39_bcdaab6d.jpg",
          "WhatsApp Image 2025-08-30 at 10.23.39_fb8a195d.jpg",
          "WhatsApp Image 2025-08-30 at 10.23.40_4dd9de4f.jpg",
          "WhatsApp Image 2025-08-30 at 10.23.40_d717d6e9.jpg",
          "WhatsApp Image 2025-08-30 at 10.23.41_50c61716.jpg",
          "WhatsApp Image 2025-08-30 at 10.23.41_6b1b17f8.jpg",
          "WhatsApp Image 2025-08-30 at 10.23.41_86b42b0a.jpg",
        ];

        setImages(galleryImages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

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
              Browse through our project gallery and media collection
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Project Gallery</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Explore our completed projects and installations across various locations
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={`/gallery/${image}`}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video Section - Placeholder for future implementation */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Video Gallery</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Coming soon! We're working on adding video content to showcase our projects in action.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Media;
