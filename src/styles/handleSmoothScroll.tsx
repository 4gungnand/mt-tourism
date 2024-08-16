export const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
  if (typeof window !== 'undefined') {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = targetId ? document.querySelector(targetId) : null;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
};