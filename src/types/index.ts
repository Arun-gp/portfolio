export type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  category: string;
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean;
  year: string;
};

export type Service = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export type Skill = {
  name: string;
  icon: React.ReactNode;
  color: string;
};

export type SocialLink = {
  icon: JSX.Element;
  href: string;
};