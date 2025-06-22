import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';

const About = () => {
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

  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
    'AWS', 'Docker', 'GraphQL', 'Next.js', 'Tailwind CSS', 'Framer Motion'
  ];

  const interests = [
    'Web Development', 'UI/UX Design', 'Machine Learning', 'Photography',
    'Open Source', 'Travel', 'Music Production', 'Blockchain'
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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              B.Tech CSE student passionate about full-stack development, cloud, and AI. Always learning, building, and mentoring.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div variants={itemVariants}>
              <Card className="glass-morphism h-full">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 gradient-text">Education</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <b>C.V. Raman Global University, Bhubaneswar</b> (2022–2026)
                    </p>
                    <p>B.Tech in Computer Science and Engineering</p>
                    <p>CGPA: 8.86</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="glass-morphism h-full">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 gradient-text">Quick Facts</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <span>👩‍💻</span>
                      <span>Full-Stack Developer</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span>🏆</span>
                      <span>ISET Incubator Lead, Startup Event Winner</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span>🌐</span>
                      <span>Cloud & AI Enthusiast</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span>🤝</span>
                      <span>Mentor & Hackathon Organizer</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mb-16">
            <Card className="glass-morphism">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Technical Skills</h2>
                <div className="flex flex-wrap gap-3">
                  {['Java', 'Python', 'C++', 'SQL', 'Spring Boot', 'React.js', 'REST APIs', 'JWT', 'MySQL', 'PostgreSQL', 'GCP', 'AWS (Basics)', 'Docker', 'Git', 'GitHub', 'IntelliJ', 'Postman', 'OOP', 'DSA', 'DBMS', 'Computer Networks'].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Badge 
                        variant="outline" 
                        className="text-cyan-400 border-cyan-400/50 hover:bg-cyan-400/10 transition-colors"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="glass-morphism">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Interests & Hobbies</h2>
                <div className="flex flex-wrap gap-3">
                  {['Hackathons', 'Mentoring', 'Startups', 'Cloud', 'AI', 'UI/UX', 'Open Source', 'Learning'].map((interest, index) => (
                    <motion.div
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors"
                      >
                        {interest}
                      </Badge>
                    </motion.div>
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

export default About;
