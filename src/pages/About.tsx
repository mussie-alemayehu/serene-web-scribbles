
import { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <Layout>
      <section className={`py-16 md:py-24 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">
              About Me
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              <div className="md:col-span-1 animate-fade-in">
                <div className="sticky top-24">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="John Smith"
                    className="w-full max-w-[300px] rounded-lg mx-auto md:mx-0 mb-6 shadow-md"
                  />
                  
                  <div className="flex justify-center md:justify-start space-x-4 mb-6">
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="mailto:john@example.com" 
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                  
                  <div className="text-sm">
                    <h2 className="font-medium mb-2">Tech Stack</h2>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>React & React Native</li>
                      <li>TypeScript & JavaScript</li>
                      <li>Node.js & Express</li>
                      <li>TailwindCSS & Styled Components</li>
                      <li>Next.js & Gatsby</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-8 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4">Hello, I'm John Smith</h2>
                  <p className="text-lg mb-4">
                    I'm a passionate web developer and designer with over 8 years of experience building beautiful, functional, and user-centered digital experiences.
                  </p>
                  <p className="text-lg mb-4">
                    I specialize in modern JavaScript frameworks like React and love to explore the intersection of technology and design. My goal is to create digital products that not only look great but also solve real problems for users.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4">My Journey</h2>
                  <p className="text-lg mb-4">
                    My journey in web development began when I was in college studying Computer Science. What started as a hobby quickly evolved into a passion and career. I've worked with startups, agencies, and large organizations, building everything from marketing websites to complex web applications.
                  </p>
                  <p className="text-lg mb-4">
                    Beyond coding, I enjoy writing about web development, sharing my knowledge, and contributing to open-source projects. This blog is my platform to document my learnings and hopefully help others along the way.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4">When I'm Not Coding</h2>
                  <p className="text-lg mb-4">
                    Outside of work, I enjoy hiking, reading science fiction, photography, and exploring new coffee shops. I believe in continuous learning and am currently diving deeper into design systems and web accessibility.
                  </p>
                  <p className="text-lg">
                    Feel free to connect with me on social media or drop me an email if you'd like to chat!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;
