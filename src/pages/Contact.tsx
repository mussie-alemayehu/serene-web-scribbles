
import { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { ContactForm } from '@/components/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

function Contact() {
  const [visible, setVisible] = useState(false);

  // Set the page title
  useEffect(() => {
    document.title = "Contact | MindfulBlog";
    setVisible(true);
  }, []);

  return (
    <Layout>
      <section className={`py-16 md:py-24 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have a question or just want to say hi? I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
            <div className="space-y-8 animate-fade-in">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/80 p-3 rounded-lg">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email</h3>
                    <a href="mailto:mussiea2020@gmail.com" className="text-muted-foreground hover:text-accent">
                      mussiea2020@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/80 p-3 rounded-lg">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Location</h3>
                    <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/80 p-3 rounded-lg">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">(123) 456-7890</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-medium text-lg mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/mussie-alemayehu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-secondary/80 p-3 rounded-lg text-muted-foreground hover:text-accent transition-colors"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/mussie-alemayehu/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-secondary/80 p-3 rounded-lg text-muted-foreground hover:text-accent transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a 
                    href="mailto:mussiea2020@gmail.com" 
                    className="bg-secondary/80 p-3 rounded-lg text-muted-foreground hover:text-accent transition-colors"
                    aria-label="Email"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm animate-fade-in">
              <h2 className="text-2xl font-serif font-bold mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
