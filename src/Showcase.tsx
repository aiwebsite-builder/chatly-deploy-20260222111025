import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Showcase() {
  return (
    <section className="bg-gray-50 py-20 md:py-28 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group perspective-1000"
        >
          <motion.div
            whileHover={{ rotateY: 10, rotateX: 5, scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-full aspect-[16/10] bg-white rounded-3xl p-6 shadow-2xl ring-1 ring-gray-900/5 transform-gpu preserve-3d"
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
              alt="Lumina product showcase"
              className="object-cover w-full h-full rounded-2xl"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10"></div>
          </motion.div>
          <div className="absolute inset-0 -z-10 bg-indigo-400/30 rounded-full blur-3xl opacity-50 translate-x-1/4 translate-y-1/4 animate-blob -rotate-12 transition-all duration-500 ease-in-out group-hover:blur-4xl group-hover:translate-x-1/2"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight text-balance">
            Designed for Clarity, Built for Performance
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed text-balance">
            Lumina offers an intuitive interface combined with powerful backend capabilities, ensuring that your team can focus on what truly matters: innovation. Streamline complex processes and deliver results faster.
          </p>
          <ul className="mt-8 space-y-4 text-gray-700">
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-1" />
              <span>Beautifully crafted user experiences.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-1" />
              <span>Real-time data synchronization.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-1" />
              <span>Customizable dashboards and reports.</span>
            </li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(79, 70, 229, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300"
          >
            Explore the Platform <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
