import { FaBars } from 'react-icons/fa';
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="mx-auto bg-black ">
      <nav className="text-white p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-semibold">Your Logo</span>
        </div>

        {/* Bars Icon */}
        <div>
          <FaBars className="text-white text-2xl" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

