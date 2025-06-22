import { Button } from '@/components/ui/button';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';

const Hero = () => {
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

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div 
        className="container mx-auto px-6 z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Saleha Afreen</span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl text-gray-300 mb-6"
            variants={itemVariants}
          >
            Final Year CSE Student & Future Developer
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            B.Tech CSE student at CV Raman Global University (2022–2026) with a passion for building scalable web apps, cloud solutions, and AI-driven products. Experienced in Java, Python, Spring Boot, React.js, and AWS. Always eager to learn and innovate.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-3 text-lg font-semibold"
              asChild
            >
              <a href="/projects">
                <ExternalLink className="mr-2 h-5 w-5" />
                View My Work
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold"
              asChild
            >
              <a href="/saleha%20afreen%20resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
