import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java' },
        { name: 'Python' },
        { name: 'C++' },
        { name: 'SQL' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Spring Boot' },
        { name: 'REST APIs' },
        { name: 'JWT' }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js' },
        { name: 'JavaScript' },
        { name: 'HTML/CSS' },
        { name: 'Bootstrap' }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL' },
        { name: 'PostgreSQL' }
      ]
    },
    {
      title: 'Cloud Platforms',
      skills: [
        { name: 'GCP' },
        { name: 'AWS (Basics)' }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'IntelliJ' },
        { name: 'Docker' },
        { name: 'Postman' }
      ]
    },
    {
      title: 'Concepts',
      skills: [
        { name: 'OOP' },
        { name: 'DSA' },
        { name: 'DBMS' },
        { name: 'Computer Networks' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">
            My Skills
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A summary of my technical expertise and tools.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-morphism rounded-3xl p-8 hover:border-neon-cyan/50 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-white mb-8 text-center">
                {category.title}
              </h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 rounded-full bg-cyan-900/40 text-cyan-200 font-medium text-base border border-cyan-400/30"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 grid md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Years Experience', value: '0', icon: '💼' },
            { label: 'Projects Completed', value: '3', icon: '🚀' },
            { label: 'Technologies Mastered', value: '20+', icon: '⚡' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center glass-morphism rounded-2xl p-6"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
