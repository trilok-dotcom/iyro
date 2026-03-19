import { useEffect, useRef } from 'react';
import './TrustLine.css';

export default function TrustLine() {
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    if (trustRef.current) {
      observer.observe(trustRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="trust-line" ref={trustRef}>
      <div className="trust-container">
        <h2 className="trust-text">
          Trusted by growing brands. Built for scale. Designed to win.
        </h2>
      </div>
    </section>
  );
}
