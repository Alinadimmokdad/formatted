import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { FiUser, FiBell, FiHeart, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="bg-gray-100">
      <header className="flex items-center justify-between p-4 bg-white shadow-md px-10">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="K Store Logo" width={40} height={40} />
          <span className="text-xl font-bold text-purple-700">K STORE</span>
        </div>

        <div className="relative w-[500px]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-6 py-3 border rounded-full focus:outline-none"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-purple-600 rounded-full text-white">
            <FiSearch size={20} />
          </button>
        </div>

        <div className="flex items-center space-x-6 text-black">
          <FiUser size={20} />
          <FiBell size={20} />
          <FiHeart size={20} />
          <div className="relative">
            <FiShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full px-1">
              0
            </span>
          </div>
          <div className="h-6 w-[1px] bg-gray-400"></div>
          <span>🌎 English ▼</span>
          <div className="h-6 w-[1px] bg-gray-400"></div>
          <span>💰 USD ▼</span>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
