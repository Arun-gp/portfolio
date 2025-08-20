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
    name: "Node.js", 
    icon: React.createElement(Database, { className: "w-8 h-8" }), 
    color: "text-green-500" 
  },
  { 
    name: "TypeScript", 
    icon: React.createElement(Code2, { className: "w-8 h-8" }), 
    color: "text-blue-500" 
  },
  { 
    name: "Python", 
    icon: React.createElement(Code2, { className: "w-8 h-8" }), 
    color: "text-yellow-500" 
  },
  { 
    name: "AWS", 
    icon: React.createElement(Database, { className: "w-8 h-8" }), 
    color: "text-orange-500" 
  },
  { 
    name: "Docker", 
    icon: React.createElement(Database, { className: "w-8 h-8" }), 
    color: "text-blue-400" 
  },
  { 
    name: "GraphQL", 
    icon: React.createElement(Database, { className: "w-8 h-8" }), 
    color: "text-pink-500" 
  },
  { 
    name: "PostgreSQL", 
    icon: React.createElement(Database, { className: "w-8 h-8" }), 
    color: "text-blue-600" 
  }
];