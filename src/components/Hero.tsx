export function Hero() {
  return (
    <div className="relative bg-background py-20 md:py-28 overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-center opacity-40 z-0"
        style={{ backgroundImage: "url('https://ext.same-assets.com/2316678046/2310318305.jpeg')" }}
      />

      <div className="container relative z-10">
        <div className="max-w-2xl">
          <p className="text-sm font-medium mb-3">
            Cutting-edge <span className="text-primary font-bold">Technology</span>
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            WE PROVIDE SERVICES <br />
            AND SOLUTIONS <span className="text-primary font-medium italic">To</span>
            <br />
            <span className="text-primary italic">Enterprise</span>
          </h1>

          <a
            href="/contact"
            className="btn btn-outline inline-block"
          >
            Let's Talk
          </a>

          <p className="mt-6 text-gray-600 max-w-xl">
            Digisoft Consulting Services specializes in offering comprehensive services and solutions to enterprises of various sizes.
          </p>
        </div>
      </div>

      {/* Services pills on the right */}
      <div className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2 space-y-6 z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-full flex items-center pl-6 pr-4 py-2 shadow-md">
          <div className="mr-3">
            <span className="inline-block w-6 h-6 bg-primary rounded-full text-white flex items-center justify-center text-xs">+</span>
          </div>
          <span className="font-medium">E-KYC Management</span>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-full flex items-center pl-6 pr-4 py-2 shadow-md">
          <div className="mr-3">
            <span className="inline-block w-6 h-6 bg-primary rounded-full text-white flex items-center justify-center text-xs">+</span>
          </div>
          <span className="font-medium">Bulk SMS & USSD Messaging</span>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-full flex items-center pl-6 pr-4 py-2 shadow-md">
          <div className="mr-3">
            <span className="inline-block w-6 h-6 bg-primary rounded-full text-white flex items-center justify-center text-xs">+</span>
          </div>
          <span className="font-medium">Financial Solutions</span>
        </div>
      </div>
    </div>
  );
}
