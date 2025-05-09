import { ChevronRight, Code, Database, Globe, MessageSquare, Shield, Smartphone, Star, Zap } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

// Interactive Service Card
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  techStack: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, techStack }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      className={`bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 ${isExpanded ? 'scale-105' : 'scale-100'}`}
      whileHover={{ y: -10 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start justify-between">
        <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-lg text-white mb-4">
          {icon}
        </div>
        <div className="w-6 h-6 flex items-center justify-center cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight size={18} />
          </motion.div>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <h4 className="font-semibold text-sm text-gray-800 mb-2">Technologies we use:</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                  {tech}
                </span>
              ))}
            </div>
            <button className="mt-4 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg text-sm font-medium w-full">
              Learn More
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export function ServicesSection() {
  return (
  <>
  {/* Services Section */}
<section id="services" className="py-16 bg-background">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-primary font-syne">Our Services</h2>
      <p className="text-text-muted font-sora">
        We deliver end-to-end digital solutions built for performance, scale, and real results — tailored for Kenya and East Africa.
      </p>
    </div>

    <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ServiceCard
        icon={<Globe size={24} className="text-primary" />}
        title="Website Development"
        description="Fast, responsive, and visually stunning websites for all devices."
        techStack={["React", "Next.js", "Tailwind CSS", "Laravel", "WordPress"]}
      />

      <ServiceCard
        icon={<Smartphone size={24} className="text-primary" />}
        title="Progressive Web Apps"
        description="Installable, offline-capable apps that feel native on mobile."
        techStack={["Service Workers", "IndexedDB", "Push Notifications", "React", "Workbox"]}
      />

      <ServiceCard
        icon={<Database size={24} className="text-primary" />}
        title="E-commerce Solutions"
        description="Online stores with secure M-Pesa and real-time inventory tools."
        techStack={["WooCommerce", "Shopify", "MERN Stack", "Payment APIs", "Inventory Systems"]}
      />

      <ServiceCard
        icon={<Shield size={24} className="text-primary" />}
        title="Web Security"
        description="Protect your platform with end-to-end security measures."
        techStack={["SSL", "Auth Systems", "Security Audits", "OWASP", "Firewall Setup"]}
      />

      <ServiceCard
        icon={<MessageSquare size={24} className="text-primary" />}
        title="AI-Enhanced Chatbots"
        description="Bots trained to understand local needs and communicate effectively."
        techStack={["NLP", "DialogFlow", "Custom AI", "WhatsApp", "Multilingual"]}
      />

      <ServiceCard
        icon={<Code size={24} className="text-primary" />}
        title="Custom Software"
        description="Solutions tailored for your business challenges and workflows."
        techStack={["Node.js", "Python", "Express", "MongoDB", "Microservices"]}
      />
    </div>
  </div>
</section>
  </>
   
  );
}
