import { useEffect, useRef } from 'react';
import './PortfolioSection.css';

const projects = [
  {
    name: "Urban Threads",
    type: "Fashion Brand",
    desc: "Revamped social media presence with consistent branding.",
    stats: "+180% Engagement | +95% Reach",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "FitCore Studio",
    type: "Fitness Brand",
    desc: "Created high-converting reels and strategy.",
    stats: "+120% Leads | +70% Growth",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Aura Interiors",
    type: "Interior Design",
    desc: "Positioned the brand as premium online.",
    stats: "3x Client Inquiries",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
  }
];

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          const cards = entry.target.querySelectorAll('.portfolio-card');
          cards.forEach((card, i) => {
            (card as HTMLElement).style.animationDelay = `${i * 0.2}s`;
            card.classList.add('animate');
          });
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="portfolio-section" id="work" ref={sectionRef}>
      <div className="portfolio-container fade-up">
        <h2 className="section-title">Selected Work</h2>
        <p className="portfolio-subtext">A glimpse into how we transform brands digitally.</p>
        
        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <div key={i} className="portfolio-card">
              <div className="card-image-wrapper">
                <img src={p.img} alt={p.name} className="portfolio-img" />
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <h4>{p.name}</h4>
                    <span className="project-type">{p.type}</span>
                    <p>{p.desc}</p>
                    <div className="project-stats">{p.stats}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
