interface CollaborationItemProps {
  icon: string;
  title: string;
  description: string;
}

function CollaborationItem({ icon, title, description }: CollaborationItemProps) {
  return (
    <div className="flex flex-col items-center text-center mb-8">
      <img src={icon} alt={title} className="w-14 h-14 mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-text-muted text-sm">{description}</p>
    </div>
  );
}

export function CollaborationSection() {
  const collaborationItems = [
    {
      icon: 'https://ext.same-assets.com/2316678046/480259436.svg',
      title: 'Thinking Big',
      description: 'Learning a new skill, or pursuing a passion, starting small allows us to learn, adapt, and gain momentum along the way.'
    },
    {
      icon: 'https://ext.same-assets.com/2316678046/2160350731.svg',
      title: 'Starting Small',
      description: 'By taking small steps and building a solid foundation, we can gradually grow and achieve our goals.'
    },
    {
      icon: 'https://ext.same-assets.com/2316678046/520753937.svg',
      title: 'Creating Fast',
      description: 'Setting clear goals and deadlines helps to stay on track, and breaking down larger tasks into smaller.'
    },
    {
      icon: 'https://ext.same-assets.com/2316678046/2571603153.svg',
      title: 'Innovating Scale',
      description: 'This can be done by implementing new technologies, improving processes, reimagining business models.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="mb-12">
          <p className="text-sm text-primary mb-2">Discover Our Company</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            How We <span className="text-primary">Collaborate</span> With You
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collaborationItems.map((item, index) => (
            <CollaborationItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <div className="flex flex-wrap justify-center mt-12 gap-4">
          <a href="/about-us" className="btn btn-outline flex items-center">
            <span>Learn More</span>
            <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="/contact" className="btn btn-primary flex items-center">
            <span>How We Work</span>
            <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
