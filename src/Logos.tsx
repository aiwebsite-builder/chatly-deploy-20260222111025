import { motion } from 'framer-motion';

const logoVariants = {
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

export default function Logos() {
  const logos = [
    'Acme Corp', 'GlobalSync', 'InnovateX', 'Apex Solutions', 'Quantum Innovations', 'Echo Systems'
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          className="text-center text-sm font-semibold uppercase tracking-wide text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Trusted by leading companies worldwide
        </motion.p>
        <motion.div
          className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {logos.map((logo, index) => (
            <motion.span
              key={logo}
              className="text-3xl font-bold tracking-tight text-gray-800 opacity-60 hover:opacity-100 transition-opacity duration-300"
              variants={logoVariants}
            >
              {logo}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
