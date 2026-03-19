import { useEffect, useRef } from 'react';
import './ContactSection.css';
import { Mail } from 'lucide-react';

export default function ContactSection() {
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
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="contact-container fade-up">
        
        <div className="contact-left">
          <h2 className="section-title text-left">Let’s Build Your Brand</h2>
          <p className="contact-text">
            Ready to turn attention into revenue? Reach out to us and let's craft a strategy tailored to your business.
          </p>
          <a href="mailto:iyro.team3@gmail.com" className="contact-email">
            <Mail size={24} />
            iyro.team3@gmail.com
          </a>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="john@example.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="business">Business</label>
              <input type="text" id="business" placeholder="Your Brand Name" required />
            </div>

            <div className="form-group">
              <label htmlFor="budget">Budget (Optional)</label>
              <select id="budget">
                <option value="">Select a range</option>
                <option value="15k">₹15,000 - ₹35,000</option>
                <option value="35k">₹35,000 - ₹70,000</option>
                <option value="70k+">₹70,000+</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={4} placeholder="Tell us about your goals..." required></textarea>
            </div>

            <div className="form-group full-width">
              <button type="submit" className="btn btn-primary w-full btn-bounce">
                Get Free Strategy Call
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
