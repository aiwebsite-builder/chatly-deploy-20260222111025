import { motion } from 'framer-motion';

const footerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  const year = new Date().getFullYear();
  const navLinks = [
    { title: 'Products', href: '#' },
    { title: 'Solutions', href: '#' },
    { title: 'Pricing', href: '#' },
    { title: 'About Us', href: '#' },
    { title: 'Careers', href: '#' },
    { title: 'Blog', href: '#' },
    { title: 'Contact', href: '#' },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={footerItemVariants}
          className="col-span-full md:col-span-1"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Lumina</h3>
          <p className="text-gray-400 leading-relaxed max-w-xs">
            Unlocking potential through innovative solutions and seamless experiences.
          </p>
        </motion.div>

        <div className="col-span-full md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={footerItemVariants}
            className="md:col-span-1"
          >
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {navLinks.slice(0, 3).map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={footerItemVariants}
            className="md:col-span-1"
          >
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {navLinks.slice(3, 6).map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={footerItemVariants}
            className="md:col-span-1"
          >
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a></li>
            </ul>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="mt-16 pt-8 border-t border-gray-700 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={footerItemVariants}
      >
        <p className="text-gray-400 text-sm">
          &copy; {year} Lumina. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
