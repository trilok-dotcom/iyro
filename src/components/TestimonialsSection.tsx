import { useEffect, useRef, useState } from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    name: "Rohan Mehta",
    title: "Founder",
    quote: "IYRO completely changed our engagement. We've seen massive growth.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Ananya Sharma",
    title: "Owner",
    quote: "The branding feels premium and aligns perfectly with our vision.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Karthik Reddy",
    title: "Director",
    quote: "We started getting real leads within the first month.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Priya Nair",
    title: "Founder",
    quote: "Our brand now looks high-end. Highly recommend IYRO.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  }
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="testimonials-container fade-up">
        <h2 className="section-title text-center">Client Success</h2>
        
        <div 
          className="testimonial-carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`testimonial-card ${i === index ? 'active' : ''}`}
            >
              <div className="quote-icon">"</div>
              <p className="quote-text">{t.quote}</p>
              <div className="client-info">
                <img src={t.avatar} alt={t.name} className="client-avatar" />
                <div>
                  <h4 className="client-name">{t.name}</h4>
                  <span className="client-title">{t.title}</span>
                </div>
              </div>
            </div>
          ))}

          <div className="carousel-dots">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                className={`dot ${i === index ? 'active-dot' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
