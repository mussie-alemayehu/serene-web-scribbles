
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with React Hooks",
    slug: "getting-started-with-react-hooks",
    excerpt: "React Hooks are a powerful feature that allows you to use state and other React features without writing a class. Let's explore the basics and how they can simplify your code.",
    content: "# Getting Started with React Hooks\n\nReact Hooks were introduced in React 16.8 and have revolutionized how we write React components. They allow you to use state and other React features without writing a class component.\n\n## Why Hooks?\n\nBefore Hooks, if you needed state in a component, you had to use a class component. This led to complex component hierarchies and difficulty in reusing stateful logic between components.",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2023-05-10",
    tags: ["React", "JavaScript", "Web Development"],
    author: {
      name: "John Smith",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  },
  {
    id: "2",
    title: "Building Responsive Layouts with Tailwind CSS",
    slug: "building-responsive-layouts-with-tailwind-css",
    excerpt: "Tailwind CSS offers a utility-first approach to building responsive designs. Learn how to create beautiful layouts that work across all device sizes.",
    content: "# Building Responsive Layouts with Tailwind CSS\n\nTailwind CSS has gained massive popularity due to its utility-first approach, which allows developers to build complex designs directly in their markup without writing custom CSS. One of its strengths is how easily it handles responsive design.",
    coverImage: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2023-06-15",
    tags: ["CSS", "Tailwind", "Responsive Design"],
    author: {
      name: "John Smith",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  },
  {
    id: "3",
    title: "Understanding TypeScript Generics",
    slug: "understanding-typescript-generics",
    excerpt: "TypeScript generics provide a way to create reusable components that work with a variety of types rather than a single one. Learn how to leverage this powerful feature in your code.",
    content: "# Understanding TypeScript Generics\n\nTypeScript generics are one of the most powerful features of the language, allowing you to create flexible and reusable components. In this post, we'll explore what generics are, why they're useful, and how to use them effectively.",
    coverImage: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2023-07-20",
    tags: ["TypeScript", "JavaScript", "Programming"],
    author: {
      name: "John Smith",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  },
  {
    id: "4",
    title: "Mastering CSS Grid Layout",
    slug: "mastering-css-grid-layout",
    excerpt: "CSS Grid Layout is a powerful tool for creating complex web layouts. This post covers everything from the basics to advanced techniques.",
    content: "# Mastering CSS Grid Layout\n\nCSS Grid Layout has revolutionized the way we create layouts on the web. It provides a two-dimensional grid-based layout system that makes it much easier to design complex web layouts. In this post, we'll explore CSS Grid from basic concepts to advanced techniques.",
    coverImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2023-08-05",
    tags: ["CSS", "Web Design", "Layout"],
    author: {
      name: "John Smith",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  },
  {
    id: "5",
    title: "Introduction to React Server Components",
    slug: "introduction-to-react-server-components",
    excerpt: "React Server Components bring a new paradigm to React applications by allowing developers to render components on the server. Learn the basics and benefits of this exciting new feature.",
    content: "# Introduction to React Server Components\n\nReact Server Components (RSC) represent a new paradigm in how we build React applications, allowing components to render on the server while maintaining React's component model. Let's explore what they are, their benefits, and how to start using them.",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2023-09-12",
    tags: ["React", "Web Development", "JavaScript"],
    author: {
      name: "John Smith",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  }
];
