import { motion } from 'framer-motion';
import { services } from '../constants/services';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-100">Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="bg-slate-700/50 p-6 rounded-xl text-center hover:shadow-xl hover:shadow-cyan-400/20 transition-all border border-cyan-400/20"
            >
              <motion.div
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
                className="mb-4 text-cyan-400 flex justify-center"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-slate-100">{service.title}</h3>
              <p className="text-slate-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;