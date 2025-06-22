import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
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

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/saleha-afreen-03025424a", color: "text-blue-500" },
    { icon: Github, href: "https://github.com/salehaafreen", color: "text-gray-300" },
    { icon: ExternalLink, href: "https://leetcode.com/u/saleha25/", color: "text-orange-400", label: "LeetCode" }
  ];

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
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interested in collaborating, hiring, or just want to connect? Feel free to reach out for opportunities, project discussions, or tech talks!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-full">
            <motion.div variants={itemVariants}>
              <Card className="glass-morphism h-full">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <Mail className="text-cyan-400 relative top-0.5" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="text-lg break-all">salehaafreen788@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <Phone className="text-purple-400" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="text-lg">80180 19886</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                        <MapPin className="text-pink-400" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="text-lg">Rourkela, Odisha</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          className={`w-10 h-10 rounded-full bg-background/20 border border-white/10 flex items-center justify-center ${social.color} hover:scale-110 transition-transform`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <social.icon size={18} />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="glass-morphism h-full">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 gradient-text">Send Message</h2>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <Input 
                          placeholder="John" 
                          className="glass-morphism border-white/10 focus:border-cyan-400/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <Input 
                          placeholder="Doe" 
                          className="glass-morphism border-white/10 focus:border-cyan-400/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="glass-morphism border-white/10 focus:border-cyan-400/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <Input 
                        placeholder="Project Collaboration" 
                        className="glass-morphism border-white/10 focus:border-cyan-400/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea 
                        placeholder="Tell me about your project..."
                        rows={6}
                        className="glass-morphism border-white/10 focus:border-cyan-400/50 resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full glass-morphism hover:neon-glow transition-all duration-300"
                    >
                      <Send size={18} className="mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
