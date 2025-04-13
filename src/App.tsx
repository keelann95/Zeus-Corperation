import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { CollaborationSection } from './components/CollaborationSection';
import { SaasSection } from './components/SaasSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CTASection } from './components/CTASection';
import './index.css';

function App() {
  return (
    <Layout>
      <Hero />
      <ServicesSection />
      <CollaborationSection />
      <SaasSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
}

export default App;
