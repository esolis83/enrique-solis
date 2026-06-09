import { useEffect } from 'react';
import { trackEvent } from '../utils/analytics';

const SCROLL_THRESHOLDS = [25, 50, 75, 100];
const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'tech', label: 'Skills' },
  { id: 'footer', label: 'Contact' },
];

export const usePageTracking = () => {
  useEffect(() => {
    const fired = new Set();

    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = Math.round((window.scrollY / docHeight) * 100);
      SCROLL_THRESHOLDS
        .filter(t => pct >= t && !fired.has(t))
        .forEach(t => {
          fired.add(t);
          trackEvent('scroll_depth', { percent: t });
        });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = SECTIONS.find((s) => s.id === entry.target.id);
            if (section) {
              trackEvent('section_view', { section: section.label });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
};
