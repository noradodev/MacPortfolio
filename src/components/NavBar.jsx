import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const LinkMenu = [
  {
    name: "Projects",
    link: "/",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Learn",
    link: "/learn",
  },
  {
    name: "Find Me",
    link: "/findme",
  },
];

const NavBarMenu = () => {
  return (
    <>
      {LinkMenu.map((link, index) => {
        return (
          <a
            key={index}
            href={link.link}
            className="text-2xl p-3 font-extrabold hover:bg-black hover:text-white"
          >
            {link.name}
          </a>
        );
      })}
    </>
  );
};

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div
        s
        className={`border border-black border-0 border-b-4 flex justify-between fixed w-full z-[10000] transition transform ${
          scroll ? "bg-[#c4c4c4]" : ""
        }`}
      >
        <div className="logo flex items-center">
          <a
            href=""
            className="text-2xl font-extrabold hover:bg-black hover:text-white"
          >
            <img src="https://placekitten.com/20/20" alt="" className="p-5" />
          </a>

          <div className="hidden md:block">
            <NavBarMenu />
          </div>
        </div>
        <div
          className="mobile hover:bg-black hover:text-white block md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <div className=" flex items-center p-4 ">
            <GiHamburgerMenu className="text-2xl  " />
          </div>
        </div>
      </div>
      {toggle && (
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -1000 }}
          transition={{ duration: 0.5 }}
          exit={{ x: 0 }}
          className="flex flex-col md:hidden fixed w-full h-screen bg-[#c4c4c4] top-16 z-[99999]"
        >
          {toggle && <NavBarMenu />}
        </motion.div>
      )}
    </>
  );
};
export default NavBar;
