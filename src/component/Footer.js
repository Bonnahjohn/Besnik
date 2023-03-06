const Footer = () => {
  const links = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/", name: "Packages" },
    { id: 3, path: "/", name: "Review" },
    { id: 4, path: "/", name: "About Us" },
    { id: 5, path: "/", name: "Contact Us" },
  ];
  // contact us under footer section
  const tel = "tel:+233595660354";
  const email = "mailto:www.bonnahpoku@gmail.com";
  return (
    <>
      <footer className="bg-[#fafbfc] ">
        <div className=" lg:px-16 px-5 container mx-auto pt-16">
          <div className="grid lg:grid-cols-4 md:gap-20 gap-6">
            <div className="col-span-2">
              <h6 className="text-3xl mb-6 font-semibold">Besnik</h6>
              <p className="lg:block hidden ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Volup{" "}
                <br />
                tatum eaque veritatis consequuntur eum quo sequi quam.
              </p>
              <p className="lg:hidden block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Volup{" "}
                tatum eaque veritatis consequuntur eum quo sequi quam.
              </p>
              <div>
                <h6 className="text-3xl font-semibold mt-10">Follow us:</h6>
                <p className="mt-4 space-x-4">
                  {" "}
                  <button
                    type="button"
                    className="bg-orange-500 w-8 h-8  rounded-full"
                  >
                    <span className=" text-xl text-white">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </span>
                  </button>
                  <button
                    className="bg-orange-500 w-8 h-8  rounded-full"
                    type="button"
                  >
                    {" "}
                    <span className="text-white text-xl">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </span>
                  </button>
                  <button
                    className="bg-orange-500 w-8 h-8  rounded-full"
                    type="button"
                  >
                    {" "}
                    <span className="text-white text-xl">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </span>
                  </button>
                </p>
              </div>
            </div>
            {/* mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm  second grid mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm*/}
            <div className="col-span-1">
              <h6 className="text-3xl font-semibold">Menu</h6>
              <ul className="space-y-4 mt-8 text-xl text-zinc-400">
                {links.map((link) => (
                  <li key={link.id}>
                    <a href={link.path}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm  third grid mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm*/}
            <div className="col-span-1 ">
              <h6 className="text-3xl font-semibold">Contact Us</h6>
              <ul className="mt-8 space-y-4">
                <li className="text-xl text-zinc-400">
                  <a href={tel}>
                    <span className="text-orange-500">
                      <ion-icon name="call-outline"></ion-icon>
                    </span>{" "}
                    +233123456789
                  </a>
                </li>
                <li className="text-[18px] text-zinc-400 ">
                  <a href={email}>
                    <span className="text-orange-500 px-1 ">
                      {" "}
                      <ion-icon name="mail-outline"></ion-icon>
                    </span>
                    Bonnahpoku@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="mt-16 mb-8" />
          <span>
            Made by Bonnah @ <span>{new Date().getFullYear()}</span> All Right
            Reserved
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
