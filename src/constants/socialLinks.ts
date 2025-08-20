import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { SocialLink } from '../types/index';

export const socialLinks: SocialLink[] = [
  { 
    icon: React.createElement(Github, { className: "w-6 h-6" }), 
    href: "https://github.com/Arun-gp" 
  },
  { 
    icon: React.createElement(Linkedin, { className: "w-6 h-6" }), 
    href: "https://www.linkedin.com/in/arun-pandi-gp-510b34379" 
  },
  { 
    icon: React.createElement(Twitter, { className: "w-6 h-6" }), 
    href: "#" 
  },
  { 
    icon: React.createElement(Mail, { className: "w-6 h-6" }), 
    href: "mailto:arunpandimca@gmail.com" 
  }
];