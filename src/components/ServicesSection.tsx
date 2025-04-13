import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Dense Core-Banking',
    description: 'Experience seamless financial transactions with our cutting-edge Core Banking system. Our robust platform ensures real-time processing, secure transactions, and personalized banking services.',
    icon: 'https://ext.same-assets.com/2316678046/347654143.svg',
    link: '/services/item/data-security/'
  },
  {
    title: 'Bulk Payment Solutions',
    description: 'Optimize your payment processes with our Bulk Payment Solutions. Streamline and expedite mass transactions effortlessly, ensuring efficiency and accuracy.',
    icon: 'https://ext.same-assets.com/2316678046/2796508802.svg',
    link: '/services/item/it-management-services/'
  },
  {
    title: 'Optima Enterprise Resource Planning Solution',
    description: 'Revolutionize your business with our agile ERP solution. Boost efficiency, integrate data, and gain real-time insights.',
    icon: 'https://ext.same-assets.com/2316678046/1694710107.svg',
    link: '/services/item/seo-and-optimazation/'
  },
  {
    title: 'DigiGuard Self Onboarding Solution',
    description: 'Accelerate onboarding and enhance security with our E-KYC Management Solution. Seamlessly verify identities, comply with regulations, and streamline customer authentication processes.',
    icon: 'https://ext.same-assets.com/2316678046/2564316780.svg',
    link: '/services/item/web-development/'
  },
  {
    title: 'Petty Cash Management System',
    description: 'Easily manage petty cash with our intuitive system. Track, control, and reconcile expenses for a streamlined financial workflow.',
    icon: 'https://ext.same-assets.com/2316678046/2838548295.svg',
    link: '/services/item/analytics-and-research/'
  },
  {
    title: 'Mobile Banking',
    description: 'Bank on the go with our Mobile Banking Solution. Experience secure, convenient, and feature-rich banking right at your fingertips.',
    icon: 'https://ext.same-assets.com/2316678046/2365338253.svg',
    link: '/services/item/mobile-applications/'
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="mb-12">
          <p className="text-sm text-gray-500 mb-2">How We Can Help You</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-primary">Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-text-muted mb-4 text-sm">{service.description}</p>
              <div className="text-primary flex items-center font-medium text-sm">
                <span>Learn more</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
