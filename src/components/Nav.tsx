import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="bg-green-600 text-white py-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link className="hover:underline" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:underline" href="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;