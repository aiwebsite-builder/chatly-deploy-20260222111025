import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-tight text-balance">
            Ignite Innovation, <span className="text-indigo-600">Amplify Your Impact.</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-xl md:mx-0 mx-auto text-balance">
            Lumina is the all-in-one platform designed to streamline your workflows, boost collaboration, and unlock your team's full potential.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(79, 70, 229, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300"
            >
              Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="relative mt-12 md:mt-0 flex justify-center items-center"
        >
          <div className="relative w-full max-w-lg aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/5 rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out group">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
              alt="Lumina dashboard"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
            style={{ animationDelay: '1s' }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
            className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
            style={{ animationDelay: '1.2s' }}
          ></motion.div>
        </motion.div>
      </div>

      {/* Subtle background glow/gradient */}
      <div className="absolute inset-0 z-0 opacity-40 gradient-bg"></div>

      {/* Animation for blob elements */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.01, -0.05, 0.9);
        }
      `}</style>
    </section>
  );
}
