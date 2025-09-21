import React from 'react';
import { Code2, Smartphone, Database } from 'lucide-react';
import { Service } from '../types/index';

export const services: Service[] = [
  {
    icon: React.createElement(Code2, { className: "w-8 h-8" }),
    title: "Web Development",
    description: "Creating responsive and performant web applications"
  },
  {
    icon: React.createElement(Smartphone, { className: "w-8 h-8" }),
    title: "Mobile App Development",
    description: "Native and cross-platform mobile solutions"
  },
  {
    icon: React.createElement(Database, { className: "w-8 h-8" }),
    title: "API Development",
    description: "RESTful and GraphQL API architectures"
  },
  {
    icon: React.createElement(Code2, { className: "w-8 h-8" }),
    title: "Vibe Coding",
    description: "v0.dev,loveable and bolt.new"
  }
];