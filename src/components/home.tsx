import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import AnimatedText from "./AnimatedText";
import ProjectsGrid from "./ProjectsGrid";
import ContactForm from "./ContactForm";
import ThemeToggle from "./ThemeToggle";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold"
          >
            <span className="text-primary">Deepak</span>Portfolio
          </motion.div>

          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["home", "about", "projects", "contact"].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-foreground/80 hover:text-primary transition-colors capitalize"
                onClick={() => scrollToSection(item)}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Controls */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-foreground"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-b py-4"
          >
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              {["home", "about", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  className="text-foreground/80 hover:text-primary transition-colors py-2 text-left capitalize"
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-primary">Hello, I'm</span>
              </h1>
              <AnimatedText
                text="MERN Stack Developer"
                className="text-3xl md:text-5xl font-bold mb-6"
              />
              <p className="text-foreground/80 text-lg mb-8">
                I build modern web applications with MongoDB, Express, React,
                and Node.js.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button onClick={() => scrollToSection("contact")} size="lg">
                    Contact Me
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => scrollToSection("projects")}
                    variant="outline"
                    size="lg"
                  >
                    View Projects
                  </Button>
                </motion.div>
              </div>
              <div className="flex gap-4 mt-8">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="mailto:example@example.com"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur-lg opacity-75"></div>
                <Card className="relative bg-background/90 backdrop-blur-sm border-2 border-primary/20 overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center justify-center gap-8">
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-primary text-5xl"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                      >
                        <path d="M682 856h144c-46.3-66.9-79.6-140.3-96-217.9-7.1.6-14.3.9-21.6.9-35.2 0-68.4-7.8-98.2-21.5C637.8 718.2 658 798.5 682 856zM683.1 360c-40.7-82.1-132.4-134-227.8-134-94.1 0-185.7 51.8-227.2 132.6-41.4-14.9-72.7-48.6-87.7-90.5-14.9-41.9-8.4-88.9 17.3-124.7 25.7-35.8 66.2-57.3 108.8-57.3h500c42.6 0 83 21.4 108.8 57.3 25.7 35.8 32.2 82.7 17.3 124.7-15 41.9-46.4 75.6-87.7 90.5a227.9 227.9 0 00-121.8 1.4zM448 360c-8.8 0-16 7.2-16 16v48H320c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h112v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h112c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16H496v-48c0-8.8-7.2-16-16-16h-32z" />
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                      </svg>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-blue-500 text-5xl"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                      >
                        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z" />
                      </svg>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-purple-500 text-5xl"
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                      >
                        <path d="M12 16.5c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6h-2c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4v2zm-1 3v-3h2v3h3v2h-8v-2h3z" />
                      </svg>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="text-green-500 text-5xl"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                      >
                        <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 01-.11-.22V7.71c0-.09.04-.18.11-.22l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.13.11.22v8.57c0 .09-.04.18-.11.22l-7.44 4.29c-.06.04-.16.04-.23 0L10 19.14c-.08-.03-.16-.04-.21-.01-.53.3-.63.36-1.12.51-.12.04-.31.11.07.32l2.48 1.47c.24.14.5.21.78.21s.54-.07.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2M14 8c-1.66 0-2.75 1.34-2.75 2.98 0 1.66 1.13 2.97 2.75 2.97s2.75-1.37 2.75-2.97S15.66 8 14 8m0 4.44c-.61 0-1.12-.49-1.12-1.21 0-.72.51-1.23 1.12-1.23.61 0 1.12.49 1.12 1.23 0 .72-.51 1.21-1.12 1.21z" />
                      </svg>
                    </motion.div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <img
                src="https://i.imgur.com/2oZHujD.jpeg"
                alt="Working Developer"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-foreground/80 mb-4">
                I'm a passionate MERN stack developer with expertise in building
                modern web applications. With a strong foundation in MongoDB,
                Express.js, React, and Node.js, I create seamless user
                experiences and robust backend solutions.
              </p>
              <p className="text-foreground/80 mb-6">
                My journey in web development started 5 years ago, and I've
                since worked on various projects ranging from e-commerce
                platforms to social media applications. I'm constantly learning
                and adapting to new technologies to stay at the forefront of web
                development.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">Frontend</h4>
                  <ul className="space-y-1 text-foreground/80">
                    <li>React.js</li>
                    <li>ReactNative (basic)</li>
                    <li>Next.js</li>
                    <li>Tailwind CSS</li>
                    <li>JavaScript/TypeScript</li>
                    <li>Html</li>
                    <li>css</li>
                    <li>Bootstarp/jQuery</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Backend</h4>
                  <ul className="space-y-1 text-foreground/80">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>RESTful APIs</li>
                    <li>Socket.io</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Here are some of my recent projects. Each one represents a unique
              challenge and solution.
            </p>
          </motion.div>

          <ProjectsGrid />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => (window.location.href = "/projects")}
              variant="outline"
              size="lg"
            >
              View All Projects
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out!
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-foreground/80">example@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Github className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <p className="text-foreground/80">github.com/username</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Linkedin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <p className="text-foreground/80">
                      linkedin.com/in/username
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-foreground/80">
                &copy; {new Date().getFullYear()} Developer Portfolio. All
                rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              {["home", "about", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  className="text-foreground/80 hover:text-primary transition-colors capitalize text-sm"
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
