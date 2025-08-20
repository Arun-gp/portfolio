import { motion } from 'framer-motion';
import { skills } from '../constants/skills';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-slate-100">About Me</h2>
        <div className="max-w-3xl mx-auto text-slate-300">
          <p className="text-lg mb-12 text-center">
            I'm a passionate and motivated Full-Stack Developer with a strong foundation in web development and software engineering.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, rotateX: 90 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="bg-slate-700/50 rounded-lg p-6 text-center border border-cyan-400/20 hover:border-cyan-400/40 transition-colors"
              >
                <div className={`mb-3 ${skill.color} flex justify-center`}>
                  {skill.icon}
                </div>
                <span className="text-slate-100">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;