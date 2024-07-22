const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute('href');
  const targetElement = targetId ? document.querySelector(targetId) : null;
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};

const Nav = () => {
  return (
    <nav className="fixed py-2 z-50 bg-teal-900 gap-5 items-center w-full text-2xl font-bold text-white max-md:flex-wrap max-md:max-w-full">
      <div className="mx-10 flex gap-5">
        <div className="flex-auto self-stretch my-auto text-4xl">
          MuaraTakus
        </div>
        <div className="flex gap-5 self-stretch my-auto font-normal">
        <div>
            <a href="#destinasi-section" onClick={handleSmoothScroll}>Destinasi</a>
          </div>
          <div>
            <a href="#umkm-section" onClick={handleSmoothScroll}>Merch</a>
          </div>
          <div>
            <a href="#footer-section" onClick={handleSmoothScroll}>Tentang Kami</a>
          </div>
        </div>
        <a href="#paket-section" onClick={handleSmoothScroll} className="justify-center self-stretch px-14 py-2.5 text-teal-900 whitespace-nowrap bg-lime-200 rounded-[30px] max-md:px-5">
          Mulai
        </a>
      </div>
    </nav>
  );
};

export default Nav;