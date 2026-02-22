import { motion } from 'framer-motion';
import Hero from './Hero';
import Logos from './Logos';
import Features from './Features';
import Showcase from './Showcase';
import CTA from './CTA';
import Footer from './Footer';

// Define a simple page transition for the root App component
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function App() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageVariants}
      className="font-sans antialiased text-gray-800"
    >
      <Hero />
      <Logos />
      <Features />
      <Showcase />
      <CTA />
      <Footer />
    </motion.div>
  );
}
