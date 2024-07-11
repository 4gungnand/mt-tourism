const Nav = () => {
  return (
    <nav className="flex gap-5 items-center w-full text-2xl font-bold text-white max-md:flex-wrap max-md:max-w-full">
      <div className="flex-auto self-stretch my-auto text-4xl">
        MuaraTakus
      </div>
      <div className="flex gap-5 self-stretch my-auto">
        <div>Profil</div>
        <div>Destinasi</div>
        <div className="flex-auto">Tentang Kami</div>
      </div>
      <div className="justify-center self-stretch px-14 py-2.5 text-teal-900 whitespace-nowrap bg-lime-200 rounded-[30px] max-md:px-5">
        Mulai
      </div>
    </nav>
  );
};

export default Nav;