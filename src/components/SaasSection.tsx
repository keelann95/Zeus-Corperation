interface SaasItemProps {
  icon: string;
  title: string;
}

function SaasItem({ icon, title }: SaasItemProps) {
  return (
    <div className="flex flex-col items-center md:flex-row gap-3 mb-6">
      <img src={icon} alt={title} className="w-10 h-10" />
      <h3 className="text-white font-medium">{title}</h3>
    </div>
  );
}

export function SaasSection() {
  const saasItems = [
    {
      icon: 'https://ext.same-assets.com/2316678046/1194392377.svg',
      title: 'CRMs Platforms'
    },
    {
      icon: 'https://ext.same-assets.com/2316678046/1508459598.svg',
      title: 'ERPs Platforms'
    },
    {
      icon: 'https://ext.same-assets.com/2316678046/4166177711.svg',
      title: 'Marketing Software'
    },
    {
      icon: 'https://ext.same-assets.com/2316678046/413745990.svg',
      title: 'Mobile Banking Solution'
    },
    {
      icon: 'https://ext.same-assets.com/2316678046/526487958.svg',
      title: 'Accounting Systems'
    },
    {
      icon: 'https://ext.same-assets.com/2316678046/3522751002.svg',
      title: 'Core-Banking Solution'
    },
    {
      icon: 'https://ext.same-assets.com/2316678046/2369225444.svg',
      title: 'Point Of Sale Sytems'
    },
    {
      icon: 'https://ext.same-assets.com/2316678046/2152121496.svg',
      title: 'HR/HRM Software'
    }
  ];

  return (
    <section className="py-16 bg-secondary text-white">
      <div className="container">
        <div className="flex justify-center mb-2">
          <span className="text-xs text-primary font-medium uppercase">Always The Best</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Types Of <span className="text-primary">SaaS Applications</span> We Deliver
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14">
          It is a long established fact that a reader will be distracted by the readable content<br />
          of a page when looking at its layout.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
          {saasItems.map((item, index) => (
            <SaasItem
              key={index}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a href="/contact" className="btn btn-primary">
            Talk To Experts
          </a>
        </div>
      </div>
    </section>
  );
}
