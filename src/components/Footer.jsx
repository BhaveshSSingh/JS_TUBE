import { BiCoffeeTogo } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        <Link to="/home" className="flex items-center">
          <IoLogoJavascript size={40} className="text-indigo-600" />
        </Link>
      </span>

      <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        Made with a lot of
        <BiCoffeeTogo
          size={30}
          className="text-brown-[#5d4037]"
          color="brown"
        />
        by
        <a
          href="https://linkedin.com/in/bhavesh-singh-1641001b1/"
          target="_blank"
          className="flex items-center"
        >
          <span className="mx-1 underline">Bhavesh Singh</span>
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
