import { useEffect, useRef } from 'react';
import './HeroSection.css';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!visualRef.current) return;
      // Calculate offset based on screen center
      const x = (window.innerWidth / 2 - e.clientX) / 40;
      const y = (window.innerHeight / 2 - e.clientY) / 40;
      visualRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Trigger initial reveal animations matching timeline
    const timer = setTimeout(() => {
      if (heroRef.current) heroRef.current.classList.add('animate-reveal');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const headline = 'We Don’t Just Manage Brands. We Turn Them Into Machines.';
  const words = headline.split(' ');

  return (
    <section className="hero-section" id="hero" ref={heroRef}>
      <div className="hero-noise"></div>
      <div className="hero-ambient-glow"></div>
      
      {/* Background Floating Particles */}
      <div className="hero-particles">
        {[...Array(15)].map((_, i) => (
          <div key={`bg-p-${i}`} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      <div className="hero-container">
        
        <div className="hero-left">
          <h1 className="hero-headline">
            {words.map((word, i) => {
              const cleanWord = word.replace(/[^a-zA-Z]/g, '');
              const isHighlight = cleanWord === 'Brands' || cleanWord === 'Machines';
              return (
                <span 
                  key={i} 
                  className={`word ${isHighlight ? 'highlight-gold' : ''}`}
                  style={{ animationDelay: `${1 + i * 0.1}s` }}
                >
                  {word}&nbsp;
                </span>
              );
            })}
          </h1>
          <p className="hero-subtext" style={{ animationDelay: '2s' }}>
            IYRO helps businesses dominate social media with strategy, content, and performance-driven growth.
          </p>
          <div className="hero-buttons" style={{ animationDelay: '2.2s' }}>
            <a href="#contact" className="btn btn-primary btn-bounce">Get Free Strategy Call</a>
            <a href="#work" className="btn btn-secondary btn-bounce">View Our Work</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="abstract-visual" ref={visualRef}>
             {/* Energy Core */}
            <div className="energy-core"></div>
            
            {/* Multiple Ring System */}
            <div className="ring-system">
              <div className="gold-ring ring-1"></div>
              <div className="gold-ring ring-2"></div>
              <div className="gold-ring ring-3"></div>
              <div className="gold-ring ring-4"></div>
            </div>

            {/* Orbiting Visual Particles */}
            <div className="visual-particles">
                {[...Array(6)].map((_, i) => (
                  <div key={`v-p-${i}`} className="v-particle" style={{
                    transform: `rotate(${i * 60}deg) translateY(-120px)`,
                    animationDelay: `${i * 0.8}s`
                  }}></div>
                ))}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
