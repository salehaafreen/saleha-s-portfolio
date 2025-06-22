import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { Award, Calendar, Download, GraduationCap, Mail, MapPin, Phone } from 'lucide-react';

const Resume = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Lead development of scalable web applications using React, Node.js, and AWS. Managed a team of 5 developers and improved system performance by 40%.",
      achievements: [
        "Architected microservices infrastructure reducing deployment time by 60%",
        "Implemented CI/CD pipelines improving development workflow",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      location: "San Francisco, CA",
      description: "Developed MVP for fintech startup, built RESTful APIs, and created responsive user interfaces. Contributed to product strategy and technical decisions.",
      achievements: [
        "Built core platform features serving 10,000+ users",
        "Reduced API response time by 50% through optimization",
        "Collaborated with design team to improve UX/UI"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      location: "Remote",
      description: "Created responsive websites and web applications for various clients. Specialized in React.js and modern CSS frameworks.",
      achievements: [
        "Delivered 15+ client projects on time and within budget",
        "Improved website performance scores by average of 30%",
        "Implemented accessibility standards (WCAG 2.1)"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      period: "2015 - 2019",
      gpa: "3.8/4.0",
      relevant: ["Data Structures", "Algorithms", "Web Development", "Database Systems"]
    }
  ];

  const skills = {
    "Frontend": ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion"],
    "Backend": ["Node.js", "Python", "Express", "GraphQL", "REST APIs", "Microservices"],
    "Database": ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
    "DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Vercel"],
    "Tools": ["Git", "Figma", "Postman", "Jest", "Cypress", "Webpack"]
  };

  const certifications = [
    "Google Cloud Computing Foundations and Generative AI (2024)",
    "UI/UX Design Certificate – Coursera (2024)"
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Resume
            </h1>
            <Button 
              size="lg" 
              className="glass-morphism hover:neon-glow transition-all duration-300"
            >
              <Download size={18} className="mr-2" />
              Download PDF
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="mb-12">
            <Card className="glass-morphism">
              <CardContent className="p-6">
                <div className="w-full max-w-full overflow-x-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 w-full">
                    <div className="flex items-center space-x-3">
                      <Mail className="text-cyan-400 relative top-0.5" size={18} />
                      <span className="text-sm break-all">salehaafreen788@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="text-cyan-400" size={18} />
                      <span className="text-sm">80180 19886</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-cyan-400" size={18} />
                      <span className="text-sm">Rourkela, Odisha</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="text-cyan-400" size={18} />
                      <span className="text-sm">B.Tech CSE Student</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center mb-6">
              <GraduationCap className="text-cyan-400 mr-3" size={24} />
              <h2 className="text-2xl font-bold gradient-text">Education</h2>
            </div>
            {education.map((edu, index) => (
              <Card key={index} className="glass-morphism">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold gradient-text">{edu.degree}</h3>
                      <p className="text-lg text-muted-foreground">{edu.school}</p>
                    </div>
                    <div className="text-sm text-muted-foreground md:text-right">
                      <div className="flex items-center justify-start md:justify-end mb-1">
                        <Calendar size={14} className="mr-1" />
                        {edu.period}
                      </div>
                      <div className="text-cyan-400">GPA: {edu.gpa}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevant.map(course => (
                      <Badge 
                        key={course} 
                        variant="outline" 
                        className="text-cyan-400 border-cyan-400/50"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold gradient-text mb-6">Certifications</h2>
            <Card className="glass-morphism">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <Award className="text-cyan-400 mr-3" size={18} />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
