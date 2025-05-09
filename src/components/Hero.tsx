import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Smartphone,
  Zap,
  ChevronDown,
  Play,
  Code,
  Shield,
} from "lucide-react";

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [current, setCurrent] = useState(0);
  const [, setMousePosition] = useState({ x: 0, y: 0 });
  // const [isHovering] = useState(false);

  // const handleMouseMove = (e: any) => {
  //   if (!isHovering) return;

  //   const bounds = e.currentTarget.getBoundingClientRect();
  //   const x = (e.clientX - bounds.left) / bounds.width;
  //   const y = (e.clientY - bounds.top) / bounds.height;

  //   setMousePosition({ x, y });
  // };

  // Reset animation on component mount
  useEffect(() => {
    setMousePosition({ x: 0.5, y: 0.5 });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);
  // Simulating cursor effects and canvas background
  useEffect(() => {
    if (!containerRef.current) return;

    setLoaded(true);

    // This is a placeholder for the concept
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      const rect = containerRef.current!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;

      // Ripple effect would be added here with real implementation
    };

    containerRef.current.addEventListener("mousemove", handleMouseMove);
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1633340787776-30a7be1ef064?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWZyaWNhbiUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1571442463891-5a971009bad5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFmcmljYW4lMjBjb21wYW55fGVufDB8fDB8fHww",
  ];
  const features = [
    "High-performance web apps",
    "Custom e-commerce solutions",
    "Progressive web applications",
    "AI-powered experiences",
  ];

  return (
    <div
      ref={containerRef}
      className="relative bg-background min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background image with advanced overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-no-repeat bg-center bg-cover transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-0" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.2),rgba(0,0,0,0.6))]" />
      </div>

      {/* Main content container */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div className="relative  ">
          {/* Tech badge with glow effect */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-black/10 backdrop-blur-md border border-primary/20 rounded-full mb-8 overflow-hidden relative transition-all duration-1000 ${
              loaded ? "opacity-100" : "opacity-0 -translate-y-8"
            }`}
          >
            <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-primary via-transparent to-primary bg-[length:600%_300%] animate-shimmer" />
            <Code size={16} className="text-primary" />
            <p className="text-sm font-medium relative text-zinc-500 z-10">
              East Africa's{" "}
              <span className="text-primary font-bold">
                Premier Digital Agency
              </span>
            </p>
          </div>

          <h1 className="text-4xl md:text-[40px] font-bold leading-tight text-white w-[47vw]">
            We Build
            <div className="h-16 overflow-hidden font-mono font-bold">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent"
                >
                  {features[currentFeature]}
                </motion.div>
              </AnimatePresence>
            </div>
            <span className="block  font-medium font-serif">
              for the Modern Market
            </span>
          </h1>

          {/* Interactive CTA buttons */}
          <div
            className={`flex relative top-6 gap-4 mb-10 transition-all duration-1000 delay-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="/contact"
              className="group relative flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full overflow-hidden shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-primary/80 to-primary bg-[length:200%_100%] animate-subtle-shift" />
              <span className="relative z-10">Let's Talk</span>
              <ArrowRight
                size={16}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="/portfolio"
              className="group relative flex items-center gap-2 border border-gray-200 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full overflow-hidden transition-all hover:border-primary/30"
            >
              <Play size={16} className="text-primary" />
              <span>See our work</span>
            </a>
          </div>

          {/* Enhanced description with typing effect */}
          <p
            className={`text-zinc-300 font-serif relative top-6 max-w-xl transition-all duration-1000 delay-1200 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            At Zeus Corporation, we blend advanced technology with deep local
            insight to deliver digital experiences that truly connect. Our
            tailored solutions help businesses grow by turning complex
            challenges into innovative, user-driven outcomes.
          </p>

          {/* Scroll indicator */}
          <div
            className={`relative bottom-0 left-1/2 -translate-x-1/2 mt-20 hidden md:flex flex-col items-center transition-all duration-1000 delay-1500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-xs text-gray-700 mb-2">
              Scroll to explore
            </span>
            <ChevronDown size={20} className="text-primary animate-bounce" />
          </div>
        </div>

        {/* Right side: Interactive service cards */}
        <div className="relative scale-75 flex flex-col justify-center">
          <div className="space-y-6">
            <div className="relative">
              {/* Website Preview */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative z-10"
              >
                <div className="perspective">
                  <motion.div
                    initial={{ rotateY: 10, rotateX: 10 }}
                    animate={{
                      rotateY: [10, -5, 10],
                      rotateX: [10, 5, 10],
                    }}
                    transition={{
                      duration: 10,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "mirror",
                    }}
                    className="relative bg-gradient-to-br from-dark to-black p-1 rounded-xl shadow-2xl overflow-hidden border border-primary"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Browser Top Bar */}
                    <div className="bg-dark rounded-lg h-10 flex items-center px-4 space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="ml-2 bg-black/30 rounded px-3 py-1 text-xs text-gray-400 flex-grow">
                        Zeus Corporation
                      </div>
                    </div>

                    {/* Content Window */}
                    <div className="relative">
                      <div className="bg-gradient-to-br from-secondary-light to-dark aspect-video overflow-hidden rounded-b-lg">
                        <div className="p-8 h-full flex flex-col justify-between">
                          {/* Simulated content blocks */}
                          <div className="space-y-4">
                            <div className="h-6 w-32 bg-accent/40 rounded-md"></div>
                            <div className="h-10 w-3/4 bg-primary/20 rounded-md"></div>
                            <div className="space-y-2">
                              <div className="h-2 w-full bg-accent/30 rounded-full"></div>
                              <div className="h-2 w-5/6 bg-accent/20 rounded-full"></div>
                              <div className="h-2 w-4/6 bg-accent/10 rounded-full"></div>
                            </div>
                          </div>

                          {/* Simulated image blocks */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="h-24 bg-gradient-to-br from-primary-dark to-secondary/30 bg-opacity-20 rounded-lg"></div>
                            <div className="h-24 bg-dark rounded-lg"></div>
                          </div>
                        </div>

                        {/* Soft glow */}
                        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
                      </div>
                    </div>

                    {/* Code Overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center">
                        <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Modern Web Architecture
                        </h3>
                        <p className="text-gray-300 max-w-xs mx-auto">
                          Built with React, Next.js, and Tailwind CSS
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Feature Cards */}
                {[
                  {
                    icon: <Zap size={20} />,
                    title: "Lightning Speed",
                    desc: "5x Faster Loading",
                    color: "bg-accent",
                    position: "absolute -right-6 bottom-12",
                  },
                  {
                    icon: <Smartphone size={20} />,
                    title: "Mobile Optimized",
                    desc: "Perfect on 2G Networks",
                    color: "bg-primary",
                    position: "absolute -left-6 top-12",
                  },
                  {
                    icon: <Shield size={20} />,
                    title: "Enterprise Security",
                    desc: "ISO 27001 Certified",
                    color: "bg-secondary",
                    position: "absolute right-16 -bottom-6",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
                    className={`${feature.position} z-20`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-3 bg-dark p-4 rounded-lg shadow-lg border border-primary/30"
                    >
                      <div
                        className={`w-10 h-10 ${feature.color} rounded-full flex items-center justify-center text-white`}
                      >
                        {feature.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">
                          {feature.title}
                        </div>
                        <div className="text-xs text-gray-400">
                          {feature.desc}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* View all services link */}
            <div
              className={`top-4  relative transition-all duration-1000 delay-1500 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <a
                href="/services"
                className="inline-flex   w-50 rounded-full h-9 p-4 items-center text-zinc-400  hover:font-bold  text-xl hover:scale-105   ml-2 "
              >
                View all services <ArrowRight size={14} className="ml-1" />
              </a>
            </div>
          </div>

          {/* Floating stats - premium style */}
          <div
            className={`relative -bottom-20 left-0 bg-white/10 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-2xl px-10 py-8 w-fit transition-all duration-1000 delay-1700 ${
              loaded ? "opacity-100 w-[100%]" : "opacity-0"
            }`}
          >
            <div className="grid grid-cols-3 gap-12 text-center">
              {/* Years Experience */}
              <div className="group transition-all duration-300">
                <p className="text-5xl font-mono font-bold text-white group-hover:text-primary transition-colors duration-300">
                  12<span className="text-xl align-top">+</span>
                </p>
                <p className="text-sm text-gray-400 tracking-wide mt-2 uppercase font-mono group-hover:text-white/90 transition-colors duration-300">
                  Years Experience
                </p>
              </div>

              {/* Clients */}
              <div className="group transition-all duration-300">
                <p className="text-5xl font-mono font-bold text-white group-hover:text-primary transition-colors duration-300">
                  200<span className="text-xl align-top">+</span>
                </p>
                <p className="text-sm text-gray-400 tracking-wide mt-2 uppercase font-mono group-hover:text-white/90 transition-colors duration-300">
                  Clients Served
                </p>
              </div>

              {/* Success Rate */}
              <div className="group transition-all duration-300">
                <p className="text-5xl font-mono font-bold text-white group-hover:text-primary transition-colors duration-300">
                  98<span className="text-xl align-top">%</span>
                </p>
                <p className="text-sm text-gray-400 tracking-wide mt-2 uppercase font-mono group-hover:text-white/90 transition-colors duration-300">
                  Success Rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
