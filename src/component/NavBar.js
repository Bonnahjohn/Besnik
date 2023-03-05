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
  // search btn width extend
  // const [extend, setExtend] = useState(false);
  // const handleChange = () => {
  //   setExtend(!extend);
  // };
  return (
    <>
      <nav className="bg-slate-400 font-sans w-full h-14 py-4 fixed z-50 flex justify-between">
        {/* main items  on the nav */}
        <div className="container mx-auto justify-between flex  px-8">
          <div>
            <span className="font-bold text-black text-2xl">Besnik.</span>
          </div>
          <ul
            className={` flex lg:flex-row flex-col  lg:space-x-10 space-x-0 lg:text-xl text-3xl  lg:relative text-white
            absolute lg:top-0 top-[56px] z-20 lg:z-0 
          lg:bg-transparent bg-black  w-full lg:h-0 h-screen
        lg:space-y-0 space-y-3 left-0 translate-x-[100%]  ${
          isActive
            ? "translate-x-0 delay-[1ms]"
            : " translate-x-[100%] delay-[1ms] "
        } lg:translate-x-0  justify-center text-center`}
          >
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>{" "}
          <label htmlFor="search" className="hidden lg:block">
            {/* mmmmmmmmmmmmmmmmmmmmmmmmmmmmm search button mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm*/}
            <span className="absolute">
              {" "}
              {/* <ion-icon name="search"></ion-icon> */}
              <input type="checkbox" name="" id="" className="ml-4 mt-2" />
            </span>{" "}
            <input
              type="search"
              name="search"
              placeholder="Search"
              className={`bg-[#FEF3F1]  placeholder:text-red-500 rounded-full
                h-8  pl-10 focus:outline-none 
              focus:shadow-inner focus:w-[30vw] w-28 focus:rounded-md transition-transform `}
            />
          </label>
          {/*mmmmmmmmmmmmmmmmmmmmmmmmmm burger mmmmmmmmmmmmmmmmm */}
          <div className="text-4xl py-1 lg:hidden" onClick={handleToggler}>
            <ion-icon name={isActive ? "close" : "menu"}></ion-icon>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
