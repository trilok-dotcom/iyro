import { useEffect, useRef } from 'react';
import './WhyChooseUsSection.css';
import { Target, Star, RefreshCw, Zap } from 'lucide-react';

const blocks = [
  { title: "Strategy First Approach", icon: <Target size={28} /> },
  { title: "Premium Visual Quality", icon: <Star size={28} /> },
  { title: "Consistent Execution", icon: <RefreshCw size={28} /> },
  { title: "Real Results Focus", icon: <Zap size={28} /> }
];

export default function WhyChooseUsSection() {
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

  return (
    <section className="why-section" ref={sectionRef}>
      <div className="why-container fade-up">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="why-grid">
          {blocks.map((b, i) => (
            <div key={i} className="why-block" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="why-icon">{b.icon}</div>
              <h3>{b.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
