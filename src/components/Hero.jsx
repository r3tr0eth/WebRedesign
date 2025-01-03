import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Gaizka Jimenez
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8 text-gray-600">
          Software Developer
        </h2>
        <div className="flex gap-4 justify-center">
          <a 
            href="mailto:tuemail@ejemplo.com"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contacto
          </a>
          <a 
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
          >
            Ver CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;