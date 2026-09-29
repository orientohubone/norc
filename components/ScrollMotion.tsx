import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Keep content visible by default; enhance only when motion is supported.
export const ScrollMotion = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!('IntersectionObserver' in window) || !Element.prototype.animate) return;

    let dispose = () => {};
    const setup = () => {
      dispose();
      if (preference.matches) return;

      const selector = [
        '.hero-content > *', '.hero-notes', '.brand-strip > *',
        '.manifesto-section > :not(.editorial-grid)', '.editorial-grid > *',
        '.section-heading', '.collection-grid > *',
        '.purpose-banner', '.faq-section > :not(.faq-list)', '.faq-list > *',
        '.home-cta', '.footer-top > *', '.footer-bottom',
        '.brand-intro > *', '.line-story > *', '.principle-grid > *',
        '.brand-manifesto > *',
        '.identity-intro > *', '.identity-grid > *',
        'main > :not(.norc-home) section',
      ].join(',');
      const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
      const animations = new Set<Animation>();
      const delays = new Map<HTMLElement, number>();
      const groups = new Map<Element, number>();
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          observer.unobserve(element);
          element.classList.remove('scroll-motion-pending');
          const animation = element.animate([
            { opacity: 0, translate: '0 26px' },
            { opacity: 1, translate: '0 0' },
          ], {
            duration: 750,
            delay: delays.get(element) ?? 0,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            fill: 'backwards',
          });
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      }, { threshold: 0, rootMargin: '0px 0px -32px 0px' });

      elements.forEach(element => {
        // Never hide a parent that contains another animated block.
        if (element.querySelector(selector)) return;
        const parent = element.parentElement!;
        const index = groups.get(parent) ?? 0;
        groups.set(parent, index + 1);
        delays.set(element, Math.min(index % 4, 3) * 75);
        element.classList.add('scroll-motion-pending');
        observer.observe(element);
      });

      const revealFocused = (event: FocusEvent) => {
        const element = (event.target as HTMLElement).closest<HTMLElement>('.scroll-motion-pending');
        if (element) {
          observer.unobserve(element);
          element.classList.remove('scroll-motion-pending');
        }
        // Keyboard navigation should never wait for an animation.
        animations.forEach(animation => animation.finish());
      };
      document.addEventListener('focusin', revealFocused);
      dispose = () => {
        observer.disconnect();
        animations.forEach(animation => animation.cancel());
        elements.forEach(element => element.classList.remove('scroll-motion-pending'));
        document.removeEventListener('focusin', revealFocused);
      };
    };

    setup();
    preference.addEventListener('change', setup);
    return () => {
      dispose();
      preference.removeEventListener('change', setup);
    };
  }, [pathname]);

  return null;
};
