import { useEffect, useRef } from 'react';
import './PricingSection.css';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Launch Plan",
    price: "₹15,000",
    period: "/month",
    features: ["1 Platform", "12 Posts", "4 Reels", "Monthly Report"],
    highlight: false
  },
  {
    name: "Scale Plan",
    price: "₹35,000",
    period: "/month",
    features: ["2 Platforms", "20 Posts", "8–10 Reels", "Ad Strategy", "Weekly Insights"],
    highlight: true
  },
  {
    name: "Domination Plan",
    price: "₹70,000",
    period: "/month",
    features: ["3 Platforms", "15+ Reels", "Paid Ads", "Website/Funnel", "Dedicated Manager"],
    highlight: false
  }
];

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pricing-section" id="pricing" ref={sectionRef}>
      <div className="pricing-container fade-up">
        <h2 className="section-title">Our Plans</h2>
        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`pricing-card ${plan.highlight ? 'highlighted' : ''}`}
            >
              {plan.highlight && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <ul className="features-list">
                {plan.features.map((feat, j) => (
                  <li key={j}>
                    <Check size={18} className="check-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${plan.highlight ? 'btn-primary' : 'btn-outline'} w-full mt-auto`}>
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
