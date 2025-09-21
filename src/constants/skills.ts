import React from 'react';
import { Code2, Database } from 'lucide-react';
import { Skill } from '../types/index';

export const skills: Skill[] = [
  { 
    name: "React", 
    icon: React.createElement(Code2, { className: "w-8 h-8" }), 
    color: "text-cyan-400" 
  },
  { 
    name: "Express.js", 
    icon: React.createElement(Code2, { className: "w-8 h-8" }), 
    color: "text-green-500" 
  },
  { 
    name: "CSS", 
    icon: React.createElement(Code2, { className: "w-8 h-8" }), 
    color: "text-blue-500" 
  },
  // { 
  //   name: "HTML", 
  //   icon: React.createElement(Code2, { className: "w-8 h-8" }), 
  //   color: "text-yellow-500" 
  // },
  { 
    name: "Firebase", 
    icon: React.createElement(Database, { className: "w-8 h-8" }), 
    color: "text-orange-500" 
  },
  { 
    name: "MongoDB", 
    icon: React.createElement(Database, { className: "w-8 h-8" }), 
    color: "text-blue-400" 
  },
  { 
    name: "JavaScript", 
    icon: React.createElement(Code2, { className: "w-8 h-8" }), 
    color: "text-pink-500" 
  },
  { 
    name: "Tailwind CSS", 
    icon: React.createElement(Code2, { className: "w-8 h-8" }), 
    color: "text-blue-600" 
  }
];