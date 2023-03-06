import Nav from "./component/NavBar";
import Footer from "./component/Footer";
import hero from "./Assets/hero.jpg";
import onhero from "./Assets/onhero.jpg";
import recipe1 from "./Assets/recipe1.jpg";
import recipe2 from "./Assets/recipe2.jpg";
import recipe3 from "./Assets/recipe3.jpg";
import recipe4 from "./Assets/recipe4.jpg";
import eat from "./Assets/eat.jpg";
import menu1 from "./Assets/menu1.jpg";
import menu2 from "./Assets/menu2.jpg";
import menu3 from "./Assets/menu3.jpg";
import customer1 from "./Assets/customer1.jpg";
import customer2 from "./Assets/customer2.jpg";
import customer3 from "./Assets/customer3.jpg";
function App() {
  return (
    <>
      <Nav />
      <main className="container mx-auto lg:px-16 px-5 font-[Times New Roman] lg:pt-32 pt-12 ">
        {/*mmmmmmmmmmmmmmmmmmmmmmmmmmmm   hero setion mmmmmmmmmmmmmmmmmmm*/}
        <section className="grid grid-cols-1 gap-20 lg:grid-cols-2 ">
          <div className=" mt-16">
            <h1 className="lg:text-[55px] text-3xl whitespace-pre-line font-medium leading-snug ">
              Choose your best <br /> quality food
            </h1>
            <p className="whitespace-pre-line mt-6 text-base leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur incidunt, veritatis soluta iure deleniti, fugiat
              adipisci ducimus quaerat cupiditate aliquam natus tenetur.
            </p>
            {/* mmmmmmmmmmmmmmmmm   sub-grid mmmmmmmmmmmmmmmmm */}
            <div className="grid grid-cols-2 mt-12 ">
              <div>
                <button
                  type="button"
                  className="bg-[#DF6751] text-white px-10  py-2 rounded-full"
                >
                  Full view menu
                </button>
              </div>
              <div className="mt-2 text-xl lg:-ml-6 space-x-2">
                <span className="text-orange-500">
                  <ion-icon name="star"></ion-icon>
                </span>
                <span className="text-orange-500">
                  <ion-icon name="star"></ion-icon>
                </span>
                <span className="text-orange-500">
                  <ion-icon name="star"></ion-icon>
                </span>
                <span className="text-orange-500">
                  <ion-icon name="star"></ion-icon>
                </span>
                <span className="text-orange-500">
                  <ion-icon name="star-outline"></ion-icon>
                </span>
              </div>
            </div>
          </div>
          <div className=" relative">
            <img
              src={recipe2}
              alt=""
              className="absolute w-24 h-24  shadow-lg ring ring-white rounded-full left-[90%] top-2 md:block hidden"
            />
            {/* mmmmmmmmmmmmm  main image of the hero mmmmmmmmmmmmmmmmmmm */}
            <img
              src={hero}
              alt="heroimage"
              className="w-screen h-[80vh]  rounded-bl-[70%] rounded-tr-[10%] rounded-br-[15%] rounded-tl-[20%]"
            />
            {/* img on image button */}
            <img
              src={onhero}
              alt=""
              className="absolute w-60 h-60 rounded-full left-0 top-2/3 ring ring-white shadow-sm"
            />
          </div>
        </section>
        {/*mmmmmmmmmmmmmmmmmmmmmmmmmmm our food menu mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm*/}
        <section className=" mt-40">
          <h2 className="text-center md:text-5xl text-3xl mb-8">
            Our food menu
          </h2>
          <p className="text-center whitespace-pre md:block hidden ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            est, porro in <br /> vitae unde quo impedit repellendus, maiores,
            tenetur aliquid velit perspiciatis.
          </p>
          {/*mmmmmmmmmmmmmmmmmmmmmmmmm show text on on small screen mmmmmmmmmmmmm*/}
          <p className="   block md:hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            est, porro in vitae unde quo impedit repellendus, maiores, tenetur
            aliquid velit perspiciatis.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <div className="rounded-3xl shadow-xl hover:shadow-2xl delay-200 cursor-pointer">
              <img
                src={menu1}
                alt="menu1"
                className="w-52 h-52  rounded-full  mx-auto mt-8 mb-6"
              />
              <h3 className="text-center text-3xl mb-4">
                Mutton biryani recipe
              </h3>
              <p className="text-center text-xl text-gray-300">
                The popular biryani
              </p>
              <div className="flex justify-between px-10 mt-10 mb-10">
                <div className="text-xl"> $8.00</div>
                <div>
                  {" "}
                  <button
                    type="button"
                    className="bg-[#FD8E75] px-10 rounded-full py-2 text-white"
                  >
                    ORDER NOW
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-3xl shadow-xl hover:shadow-2xl delay-200 cursor-pointer">
              <img
                src={menu2}
                alt="menu2"
                className="w-52 h-52  rounded-full  mx-auto mt-8 mb-6"
              />{" "}
              <h3 className="text-center text-3xl mb-4">
                Chicken roast recipe
              </h3>
              <p className="text-center text-xl text-gray-300">
                The best chicken recipe
              </p>
              <div className="flex justify-between px-10 mt-10 mb-10">
                <div className="text-xl"> $6.30</div>
                <div>
                  {" "}
                  <button
                    type="button"
                    className="bg-[#FD8E75] px-10 rounded-full py-2 text-white"
                  >
                    ORDER NOW
                  </button>
                </div>
              </div>
            </div>{" "}
            <div className="rounded-3xl shadow-xl hover:shadow-2xl delay-200 cursor-pointer">
              <img
                src={menu3}
                alt="menu3"
                className="w-52 h-52  rounded-full  mx-auto mt-8 mb-6"
              />{" "}
              <h3 className="text-center text-3xl mb-4">
                Barbecue Chicken Fried
              </h3>
              <p className="text-center text-xl text-gray-300">
                The most popular chicken roast
              </p>
              <div className="flex justify-between px-10 mt-10 mb-10">
                <div className="text-xl"> $4.75</div>
                <div>
                  {" "}
                  <button
                    type="button"
                    className="bg-[#FD8E75] px-10 rounded-full py-2 text-white"
                  >
                    ORDER NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-14 space-x-3">
            <span className="bg-red-500  cursor-pointer hover:px-3  rounded-full px-2"></span>
            <span className="bg-red-500  cursor-pointer hover:px-3  rounded-full px-2"></span>
            <span className="bg-red-500  cursor-pointer hover:px-3  rounded-full px-2"></span>
            <span className="bg-red-500  cursor-pointer hover:px-3  rounded-full px-2"></span>
            <span className="bg-red-500  cursor-pointer hover:px-3  rounded-full px-2"></span>
          </div>
        </section>
        {/*mmmmmmmmmmmmmmmmmmmmmmmmmmmm   always the best setion mmmmmmmmmmmmmmmmmmm*/}
        <section className="grid lg:grid-cols-2 grid-cols-1 gap-20 mt-40">
          <div className=" lg:order-1 order-2">
            <img
              src={eat}
              alt=""
              className="w-full h-[80vh] rounded-[1.5rem]"
            />
          </div>
          <div className=" mt-16 lg:order-2 order-1">
            <h4 className="md:text-4xl text-3xl font-semibold mb-10">
              People who like to eat are <br />
              always the best People
            </h4>
            <p className="lg:text-left text-center lg:block hidden">
              {" "}
              But I must explain to you how all this mistaken idea of <br />{" "}
              denouncing pleasure and praising pain was born and I will <br />{" "}
              give you a complete account of the system
            </p>
            {/*mmmmmmmmmmmmmmmmmmmmmmmmm show text on on small screen mmmmmmmmmmmmm*/}
            <p className="lg:text-left text-center lg:hidden block">
              {" "}
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system
            </p>
            <button
              type="button"
              className="bg-[#FD8E75] mt-20 px-10 rounded-full py-3 text-white"
            >
              ORDER NOW
            </button>

            <div className="flex  space-x-6 mt-20">
              {" "}
              <button
                type="button"
                className="w-10 h-10 rounded-full ring-1 ring-orange-500"
              >
                <span className="text-orange-500 text-xl">
                  {" "}
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </span>
              </button>
              <button
                type="button"
                className="w-10 h-10 rounded-full ring-1 ring-orange-500"
              >
                <span className="text-orange-500 text-xl">
                  {" "}
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
              </button>
            </div>
          </div>
        </section>
        {/*mmmmmmmmmmmmmmmmmmmmmmmmmmmm   Our special recipies setion mmmmmmmmmmmmmmmmmmm*/}
        <section className="mt-40">
          <h5 className="text-center md:text-5xl text-3xl font-semibold mb-6">
            Our special recipies
          </h5>
          <p className="text-center text-base lg:block hidden">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and <br /> praising pain was born and I will give you a
            complete account of the system
          </p>
          {/*mmmmmmmmmmmmmmmmmmmmmmmmm show text on on small screen mmmmmmmmmmmmm*/}
          <p className="text-center text-base lg:hidden block">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system
          </p>
          <div className="grid md:grid-cols-2 lg:gap-x-28 lg:gap-y-20 gap-16 lg:gap-0 grid-cols-1 mt-16">
            <div className="lg:order-1 order-3 shadow-xl  rounded-b-3xl">
              <img
                src={recipe1}
                alt="recipies food"
                className="rounded-3xl w-[100%]  h-[80%] "
              />
              <div className="flex justify-between md:px-8 px-2 mt-8 md:mb-6 mb-10 ">
                <h5 className="font-semibold text-lg">
                  Canadian chicken roast
                </h5>
                <p className="text-xl text-orange-500">$9.10</p>
              </div>
            </div>
            <div className="lg:order-2 order-4 shadow-xl  rounded-b-3xl">
              <img
                src={recipe2}
                alt="recipies food"
                className="rounded-3xl w-[100%] h-[80%]"
              />
              <div className="flex justify-between md:px-8 px-2 mt-8 md:mb-6 mb-10  ">
                <h5 className="font-semibold text-lg">New York style roast</h5>
                <p className="text-xl text-orange-500">$8.99</p>
              </div>
            </div>
            <div className=" lg:order-3 order-1 shadow-xl  rounded-b-3xl">
              <img
                src={recipe3}
                alt="recipies food"
                className="rounded-3xl w-[100%] h-[80%]"
              />
              <div className="flex justify-between md:px-8 px-2 mt-8 md:mb-6 mb-10  ">
                <h5 className="font-semibold text-lg">Iranian special food</h5>
                <p className="text-xl text-orange-500">$7.00</p>
              </div>
            </div>
            <div className=" lg:order-4 order-2 shadow-xl  rounded-b-3xl">
              <img
                src={recipe4}
                alt="recipies food"
                className="rounded-3xl w-[100%] h-[80%]"
              />
              <div className="flex justify-between md:px-8 px-2 mt-8 md:mb-6 mb-10  ">
                <h5 className="font-semibold text-lg">
                  Special Lunch in United State
                </h5>
                <p className="text-xl text-orange-500">$5.50</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-40 mb-32">
          <div className="flex justify-between">
            <div>
              {" "}
              <h5 className="text-4xl font-semibold mb-10 hidden md:block">
                Which is what our popular <br /> customers are saying
              </h5>
              {/*mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm small screens only mmmmmmmmmmmmmmmmmmm*/}
              <h5 className="text-4xl font-semibold mb-10 md:hidden block">
                Which is what our popular customers are saying
              </h5>
              <p className="text-stone-500 leading-8 text-xl md:block hidden">
                {" "}
                But I must explain to you how all this mistaken idea of <br />{" "}
                denouncing pleasure and praising pain was born.
              </p>
              {/* small screens only */}
              <p className="text-stone-500 leading-8 text-xl md:hidden block">
                {" "}
                But I must explain to you how all this mistaken idea of{" "}
                denouncing pleasure and praising pain was born.
              </p>
            </div>
            <div className="mt-32 space-x-8 md:block hidden">
              {" "}
              <button
                type="button"
                className="w-10 h-10 rounded-full ring-1 ring-orange-500"
              >
                <span className="text-orange-500 text-xl">
                  {" "}
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </span>
              </button>
              <button
                type="button"
                className="w-10 h-10 rounded-full ring-1 ring-orange-500"
              >
                <span className="text-orange-500 text-xl">
                  {" "}
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
              </button>
            </div>
          </div>
          {/* customers card */}
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-24">
            <div className=" shadow-xl  px-8 rounded-2xl">
              <div className="mt-8 text-xl  space-x-2 mb-6 ">
                <span className="text-orange-500">
                  <ion-icon name="star"></ion-icon>
                </span>
                <span className="text-orange-500">
                  <ion-icon name="star"></ion-icon>
                </span>
                <span className="text-orange-500">
                  <ion-icon name="star"></ion-icon>
                </span>
                <span className="text-orange-500">
                  <ion-icon name="star"></ion-icon>
                </span>
                <span className="text-orange-500">
                  <ion-icon name="star"></ion-icon>
                </span>
              </div>
              <p className="whitespace-normal text-base leading-6 text-stone-500 mb-6">
                on the other hand,we denounce with righteous indignation and
                dislike men <br /> who are so beguiled and demoralized <br /> by
                the charms of pleasure
              </p>{" "}
              <div className="flex space-x-6 mb-12 mt-12">
                {" "}
                <img
                  src={customer1}
                  alt="customer1"
                  className="w-12 h-12 rounded-full hover:ring-teal-500 hover:ring"
                />{" "}
                <div>
                  {" "}
                  <h6 className="text-xl font-semibold">Serhiy Hipsky</h6>
                  <p className="text-lg font-semibold">CEO Universal</p>
                </div>
              </div>
            </div>
            <div className=" shadow-xl  px-8 rounded-2xl">
              <div className="mt-8 text-xl  space-x-2 mb-6 ">
                <span className="text-orange-500">
                  <ion-icon name="star"></ion-icon>
                </span>
                <span className="text-orange-500">
                  <ion-icon name="star"></ion-icon>
                </span>
                <span className="text-orange-500">
                  <ion-icon name="star"></ion-icon>
                </span>
                <span className="text-orange-500">
                  <ion-icon name="star"></ion-icon>
                </span>
                <span className="text-orange-500">
                  <ion-icon name="star"></ion-icon>
                </span>
              </div>
              <p className="whitespace-normal text-base leading-6 text-stone-500 mb-6">
                Lorem ipsum dolor sit amet consecter, adipisicing elit. Qui,
                nam! Aliquid fugit animi id, quis ea provident nulla orum
                delectus Aliquid .
              </p>{" "}
              <div className="flex space-x-6 mb-12 mt-12">
                {" "}
                <img
                  src={customer2}
                  alt="customer2"
                  className="w-12 h-12 rounded-full hover:ring-teal-500 hover:ring"
                />{" "}
                <div>
                  {" "}
                  <h6 className="text-xl font-semibold">Justus Menke</h6>
                  <p className="text-lg font-semibold">CEO Eronaman</p>
                </div>
              </div>
            </div>
            <div className=" shadow-xl  px-8 rounded-2xl">
              <div className="mt-8 text-xl  space-x-2 mb-6 ">
                <span className="text-orange-500">
                  <ion-icon name="star"></ion-icon>
                </span>
                <span className="text-orange-500">
                  <ion-icon name="star"></ion-icon>
                </span>
                <span className="text-orange-500">
                  <ion-icon name="star"></ion-icon>
                </span>
                <span className="text-orange-500">
                  <ion-icon name="star"></ion-icon>
                </span>
                <span className="text-orange-500">
                  <ion-icon name="star"></ion-icon>
                </span>
              </div>
              <p className="whitespace-normal text-base leading-6 text-stone-500 mb-6">
                on the other hand,we denounce with righteous indignation and
                dislike <br /> whoareso beguiledan ddemoralized <br /> by the
                charms pleasure Lorem, ipsum.
              </p>{" "}
              <div className="flex space-x-6 mb-12 mt-12">
                {" "}
                <img
                  src={customer3}
                  alt="customer3"
                  className="w-12 h-12 rounded-full hover:ring-teal-500 hover:ring"
                />{" "}
                <div>
                  {" "}
                  <h6 className="text-xl font-semibold">Britain Eriksen</h6>
                  <p className="text-lg font-semibold">CEO Universal</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>{" "}
      <Footer />
    </>
  );
}
export default App;
