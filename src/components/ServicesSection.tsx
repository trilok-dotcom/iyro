import { useEffect, useRef } from 'react';
import './ServicesSection.css';
import { Palette, Video, TrendingUp, MonitorPlay, BarChart3, Megaphone } from 'lucide-react';

const services = [
  { title: "Brand Identity", icon: <Palette size={32} />, delay: "0.1s" },
  { title: "Content Creation", icon: <Video size={32} />, delay: "0.2s" },
  { title: "Social Media Growth", icon: <TrendingUp size={32} />, delay: "0.3s" },
  { title: "Video Production", icon: <MonitorPlay size={32} />, delay: "0.4s" },
  { title: "Advertising & Reach", icon: <Megaphone size={32} />, delay: "0.5s" },
  { title: "Analytics & Optimization", icon: <BarChart3 size={32} />, delay: "0.6s" }
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          const cards = entry.target.querySelectorAll('.service-card');
          cards.forEach(card => card.classList.add('animate'));
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section" id="services" ref={sectionRef}>
      <div className="services-container fade-up">
        <h2 className="section-title">What We Do</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card" 
              style={{ animationDelay: service.delay }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
