import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Tamzyn French",
      company: "Agency Design",
      content: "Their high level of customer service complemented their technical expertise. They were responsive, supportive, and communicative.",
      image: "https://ext.same-assets.com/2316678046/1368809461.jpeg",
      rating: 5
    },
    {
      id: 2,
      name: "Margaret Williams",
      company: "Agency Design",
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "https://ext.same-assets.com/2316678046/3034474012.jpeg",
      rating: 4
    },
    {
      id: 3,
      name: "Tarryn Gillies",
      company: "Agency Design",
      content: "Their high level of customer service complemented their technical expertise. They were responsive, supportive, and communicative.",
      image: "https://ext.same-assets.com/2316678046/54320640.jpeg",
      rating: 5
    },
    {
      id: 4,
      name: "Tamzyn French",
      company: "Agency Design",
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "https://ext.same-assets.com/2316678046/156124900.jpeg",
      rating: 4
    },
    {
      id: 5,
      name: "Margaret Williams",
      company: "Agency Design",
      content: "Their high level of customer service complemented their technical expertise. They were responsive, supportive, and communicative.",
      image: "https://ext.same-assets.com/2316678046/3808049860.jpeg",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState<Testimonial[]>([]);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Determine number of visible testimonials based on screen size
    const visibleCount = windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1;

    // Update visible testimonials
    const endIndex = Math.min(currentIndex + visibleCount, testimonials.length);
    setVisibleTestimonials(testimonials.slice(currentIndex, endIndex));
  }, [currentIndex, windowWidth, testimonials]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    const visibleCount = windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1;
    if (currentIndex < testimonials.length - visibleCount) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Set initial visible testimonials
  useEffect(() => {
    const visibleCount = windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1;
    setVisibleTestimonials(testimonials.slice(0, visibleCount));
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="mb-10">
          <span className="block text-center text-primary font-medium mb-2">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
        </div>

        <div className="relative">
          <div className="flex justify-between mb-8">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-gray-300 hover:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-gray-300 hover:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex >= testimonials.length - (windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1)}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <img
                  src="https://ext.same-assets.com/2316678046/1146919646.svg"
                  alt="Quote"
                  className="w-8 h-8 mb-4"
                />

                <div className="flex mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < testimonial.rating ? "text-primary fill-primary" : "text-gray-300"}
                    />
                  ))}
                </div>

                <p className="text-text-muted mb-6">
                  {testimonial.content}
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-text-muted text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
