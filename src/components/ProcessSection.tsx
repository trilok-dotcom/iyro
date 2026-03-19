import { useEffect, useRef } from 'react';
import './ProcessSection.css';

const steps = [
  { num: "01", title: "Understand Your Brand", desc: "We deep-dive into your identity, audience, and goals." },
  { num: "02", title: "Build Strategy", desc: "Crafting a bespoke digital roadmap for sustained growth." },
  { num: "03", title: "Execute & Create", desc: "Producing stunning visuals and compelling content." },
  { num: "04", title: "Scale & Optimize", desc: "Data-driven adjustments to maximize engagement and ROI." }
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          const cards = entry.target.querySelectorAll('.process-step');
          cards.forEach(card => card.classList.add('animate'));
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="process-section" id="process" ref={sectionRef}>
      <div className="process-container fade-up">
        <h2 className="section-title">Our Process</h2>
        <div className="process-timeline">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className={`process-step ${i % 2 === 0 ? 'slide-left' : 'slide-right'}`}
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <div className="step-num">{step.num}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
}
