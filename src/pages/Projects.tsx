import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';

const Projects = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const projects = [
    {
      title: "Job Portal – Full-Stack Web Application",
      description: "Developed a scalable microservices-based job portal with role-based authentication. Built secure RESTful APIs with JWT for user login, job posting, and application tracking. Designed admin dashboards for managing users, jobs, and applications. Optimized database queries and modularized services for high performance.",
      image: "/placeholder.svg",
      technologies: ["Spring Boot", "React.js", "MySQL", "JWT"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Billing Application",
      description: "Developed a full-stack billing application using React.js (frontend) and Spring Boot (backend). Implemented PostgreSQL for persistent data storage and secure role-based access control. Deployed backend on AWS EC2, hosted frontend with Nginx, and stored images using AWS S3. Delivered a responsive, cloud-ready invoicing system with RESTful APIs.",
      image: "/placeholder.svg",
      technologies: ["Spring Boot", "React.js", "PostgreSQL", "AWS"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "AI Fashion Stylist Chatbot",
      description: "Built a chatbot that suggests outfits using image recognition and NLP. Integrated fashion product links via Cloudinary and third-party APIs. Designed a real-time chat UI for personalized recommendations.",
      image: "/placeholder.svg",
      technologies: ["Python", "Flask", "React.js", "TensorFlow", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my latest work, featuring full-stack applications, creative designs, and innovative solutions.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Projects</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="glass-morphism overflow-hidden h-full hover:neon-glow transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-cyan-500/20 relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white">
                          Featured
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 gradient-text">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map(tech => (
                          <Badge 
                            key={tech} 
                            className="text-cyan-400 border-cyan-400/50 border"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button 
                          size="sm" 
                          className="glass-morphism hover:neon-glow"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <span className="mr-2">🔗</span>
                            Live Demo
                          </a>
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="glass-morphism border-white/10"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <span className="mr-2">💻</span>
                            Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
