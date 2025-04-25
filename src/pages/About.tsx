
import { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Github, Linkedin, Mail } from 'lucide-react';

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
                    src="/lovable-uploads/8365085c-7701-49d5-a149-1796acd10c8a.png"
                    alt="Mussie Alemayehu"
                    className="w-full max-w-[300px] rounded-lg mx-auto md:mx-0 mb-6 shadow-md"
                  />
                  
                  <div className="flex justify-center md:justify-start space-x-4 mb-6">
                    <a 
                      href="https://github.com/mussie-alemayehu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/mussie-alemayehu/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="mailto:mussiea2020@gmail.com" 
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                  
                  <div className="text-sm">
                    <h2 className="font-medium mb-2">Tech Stack</h2>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>Lovable.dev</li>
                      <li>Flutter & Dart</li>
                      <li>Git & GitHub</li>
                      <li>Firebase</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-8 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4">Hello, I'm Mussie Alemayehu</h2>
                  <p className="text-lg mb-4">
                    I'm a passionate developer with 2 years of experience in building beautiful, functional, and user-centered applications. My journey in software development has been focused on creating impactful solutions using modern technologies.
                  </p>
                  <p className="text-lg mb-4">
                    I specialize in mobile development with Flutter and Dart, while also leveraging the power of Firebase for backend solutions. Recently, I've been exploring web development with Lovable.dev to expand my skill set and create full-stack applications.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4">My Journey</h2>
                  <p className="text-lg mb-4">
                    Throughout my two years in software development, I've had the opportunity to work with various technologies and frameworks. I'm particularly passionate about creating intuitive user interfaces and ensuring smooth user experiences across different platforms.
                  </p>
                  <p className="text-lg mb-4">
                    I believe in writing clean, maintainable code and staying up-to-date with the latest developments in technology. Version control with Git and GitHub has been an essential part of my workflow, helping me collaborate effectively and manage code efficiently.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4">When I'm Not Coding</h2>
                  <p className="text-lg">
                    Outside of development, I'm an avid reader who enjoys books across all genres. You'll often find me immersed in a good book, watching interesting movies, or listening to music. These activities help me maintain a healthy work-life balance and often inspire creative solutions in my development work.
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
