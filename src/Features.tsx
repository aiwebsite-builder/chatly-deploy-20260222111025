import { motion } from 'framer-motion';
import { Layers, Zap, Cloud, Globe, Shield, BarChart3 } from 'lucide-react';

const featureCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function Features() {
  const features = [
    {
      icon: Layers,
      title: 'Modular Design',
      description: 'Build complex systems with ease using our flexible and modular architecture.',
    },
    {
      icon: Zap,
      title: 'Blazing Fast',
      description: 'Experience lightning-fast performance and unparalleled responsiveness.',
    },
    {
      icon: Cloud,
      title: 'Cloud Scalability',
      description: 'Scale your operations effortlessly with our robust cloud-native infrastructure.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Expand your presence across the globe with multi-region deployment options.',
    },
    {
      icon: Shield,
      title: 'Secure by Design',
      description: 'Protect your data with industry-leading security protocols and practices.',
    },
    {
      icon: BarChart3,
      title: 'Actionable Insights',
      description: 'Gain deep understanding of your data with advanced analytics and reporting.',
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 tracking-tight text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Empower Your Workflow with Core Features
        </motion.h2>
        <motion.p
          className="mt-6 text-xl text-gray-600 text-center max-w-3xl mx-auto text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover how Lumina's cutting-edge capabilities can transform your productivity and innovation.
        </motion.p>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              variants={featureCardVariants}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
