import { useState } from "react";

const Nav = () => {
  const links = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/", name: "Packages" },
    { id: 3, path: "/", name: "Review" },
    { id: 4, path: "/", name: "About Us" },
    { id: 5, path: "/", name: "Contact Us" },
  ];
  // burger  toggling
  const [isActive, setIsActive] = useState(false);

  const handleToggler = () => {
    setIsActive(!isActive);
  };

  const [scroller, setScroller] = useState(false);

  const scrollable = () => {
    if (window.scrollY >= 66) {
      setScroller(true);
    } else {
      setScroller(false);
    }
  };

  window.addEventListener("scroll", scrollable);
  //const gater = ["u"];
  //search btn width extend
  // const [extend, setExtend] = useState(false);
  // const handleChange = (e) => {
  //  setExtend(e)
  // };

  // const find = !gater
  //   ? gater
  //   : gater.filter((gf) => gf.toLowerCase().includes(gater.toLowerCase()));
  return (
    <>
      <nav
        className={` ${
          scroller ? " bg-red-400 delay-[1ms] " : "bg-[#F8F9FB] delay-[1ms]"
        }  font-sans w-full h-14 py-4 fixed
       z-50 flex   lg:pb-14 `}
      >
        {/* main items  on the nav */}
        <div className="container mx-auto justify-between flex  lg:px-16 px-5 ">
          <div>
            <span
              className={`font-bold text-black text-2xl  ${
                scroller ? "text-white text-3xl" : ""
              }`}
            >
              Besnik.
            </span>
          </div>
          <ul
            className={` flex lg:flex-row flex-col  lg:space-x-10 
             space-x-0 lg:text-xl text-3xl  lg:relative text-gray-400
            absolute lg:top-0 top-[56px] z-20 lg:z-0 
         bg-black  w-full lg:h-0 h-screen
        lg:space-y-0 space-y-3 left-0   ${
          isActive
            ? "translate-x-0 delay-[1ms]"
            : " translate-x-[100%] delay-[1ms] "
        } lg:translate-x-0  justify-center text-center  ${
              scroller ? "text-white" : "text-gray-400"
            }`}
          >
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>{" "}
          <label htmlFor="search" className="hidden lg:block">
            {/* mmmmmmmmmmmmmmmmmmmmmmmmmmmmm search button mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm*/}
            <span className="absolute text-red-500 ml-4 mt-2 text-xl">
              {" "}
              <ion-icon name="search"></ion-icon>
            </span>{" "}
            <input
              type="search"
              name="search"
              placeholder="Search"
              className={`bg-[#FEF3F1]  placeholder:text-red-500 rounded-full
                h-10  pl-12 focus:outline-none 
              focus:shadow-inner focus:w-[30vw] w-28 focus:rounded-md transition-transform `}
            />
          </label>
          {/*mmmmmmmmmmmmmmmmmmmmmmmmmm burger mmmmmmmmmmmmmmmmm */}
          <div
            className="text-4xl py-1 lg:hidden text-green-400"
            onClick={handleToggler}
          >
            <ion-icon name={isActive ? "close" : "menu"}></ion-icon>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
