import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="bg-indigo-700 py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Elevate Your Business?
        </motion.h2>
        <motion.p
          className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join thousands of successful businesses who trust Lumina to power their growth. Get started today and see the difference.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(255,255,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-indigo-700 bg-white rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border border-indigo-300 rounded-xl hover:bg-indigo-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Contact Sales
          </motion.button>
        </motion.div>
      </div>

      {/* Subtle background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 to-purple-800 opacity-20"></div>
    </section>
  );
}
