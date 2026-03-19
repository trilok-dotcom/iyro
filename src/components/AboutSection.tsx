import { useEffect, useRef } from 'react';
import './AboutSection.css';

export default function AboutSection() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about" ref={aboutRef}>
      <div className="about-container">
        <h2 className="section-title fade-up stagger-1">Who We Are</h2>
        <div className="about-content fade-up stagger-2">
          <p className="about-lead">
            At IYRO, we don’t follow trends — <span className="highlight-gold">we create them.</span>
          </p>
          <p className="about-text">
            We build powerful digital identities, high-performing content, and strategies that drive real growth.
            We help brands turn attention into revenue.
          </p>
        </div>
      </div>
    </section>
  );
}
