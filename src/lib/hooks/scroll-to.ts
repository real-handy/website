'use client'

interface ScrollOptions {
  offset?: number;
  updateUrl?: boolean;
}

export const useScrollHandler = (options: ScrollOptions = {}) => {
  const {
    offset = 80,
    updateUrl = true
  } = options;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const href = e.currentTarget.href;
    if (!href.includes('#')) return;
    
    const hash = href.split('#')[1];
    if (!hash) return;
    
    const element = document.getElementById(hash);
    if (!element) return;
    
    setTimeout(() => {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        behavior: "smooth",
        top: offsetPosition
      });
      
      if (updateUrl) {
        window.history.pushState({}, '', `#${hash}`);
      }
    }, 0);
  };

  return handleClick;
};
