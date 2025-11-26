import { useEffect } from 'react';
import Router from 'next/router';

export default function HashScroll() {
  useEffect(() => {
    let raf = 0;
    let tries = 0;

    const scrollToHash = () => {
      const raw = window.location.hash;
      if (!raw) return;
      const id = decodeURIComponent(raw.slice(1));
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'auto', block: 'start' });
        return;
      }
      if (tries < 20) {
        tries++;
        raf = requestAnimationFrame(scrollToHash);
      }
    };

    raf = requestAnimationFrame(scrollToHash);           // 首次进入
    const onHash = () => { tries = 0; scrollToHash(); };
    window.addEventListener('hashchange', onHash);

    const onRouteDone = () => { tries = 0; requestAnimationFrame(scrollToHash); };
    Router.events.on('routeChangeComplete', onRouteDone);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('hashchange', onHash);
      Router.events.off('routeChangeComplete', onRouteDone);
    };
  }, []);

  return null;
}
