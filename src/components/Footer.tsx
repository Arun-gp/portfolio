import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-slate-400 text-xl text-center py-6"
    >
      © {new Date().getFullYear()} Arun Pandi GP. All rights reserved.
    </motion.div>
  );
};

export default Footer;