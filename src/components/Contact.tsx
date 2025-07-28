import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Define types for form data and event handlers
interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes with proper typing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission with proper typing
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Form submission logic
    try {
      // Simulated API call or form submission
      console.log('Form submitted:', formData);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      alert('Message sent successfully! We\'ll get back to you soon.');
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#0A192F] text-white">
      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center text-[#CCD6F6]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h2>
          
          <div className="max-w-2xl mx-auto">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-[#233554]/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#64FFDA] transform transition-all duration-300 focus:scale-[1.02] border border-[#64FFDA]/20 hover:border-[#64FFDA]/40 placeholder-gray-400"
                  required
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-[#233554]/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#64FFDA] transform transition-all duration-300 focus:scale-[1.02] border border-[#64FFDA]/20 hover:border-[#64FFDA]/40 placeholder-gray-400"
                  required
                />
              </motion.div>

              {/* Message Textarea */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-[#233554]/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#64FFDA] transform transition-all duration-300 focus:scale-[1.02] border border-[#64FFDA]/20 hover:border-[#64FFDA]/40 placeholder-gray-400 resize-none"
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#64FFDA]/10 text-[#64FFDA] py-3 rounded-lg font-semibold border-2 border-[#64FFDA] hover:bg-[#64FFDA]/20 transition-all duration-300 hover:shadow-lg"
                >
                  Send Message
                </motion.button>
              </motion.div>
            </motion.form>

            {/* Additional Contact Info */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-[#8892B0] mb-4">
                Or reach out to me directly
              </p>
              <div className="flex justify-center space-x-8">
                <motion.a
                  href="mailto:arunpandimca@gmail.com"
                  className="text-[#64FFDA] hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  arunpandimca@gmail.com
                </motion.a>
                <motion.a
                  href="tel:+916380657905"
                  className="text-[#64FFDA] hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  +91 6380657905
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;