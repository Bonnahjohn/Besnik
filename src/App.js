import Nav from "./component/NavBar";
import Button from "./component/Button";
import onhero from "./Assets/onhero.jpg";
import recipe1 from "./Assets/recipe1.jpg";
import recipe2 from "./Assets/recipe2.jpg";
import recipe3 from "./Assets/recipe3.jpg";
import recipe4 from "./Assets/recipe4.jpg";
function App() {
  return (
    <>
      <Nav />
      <main className="container mx-auto lg:px-16 px-5 font-[Times New Roman] lg:pt-32 pt-12 ">
        {/*mmmmmmmmmmmmmmmmmmmmmmmmmmmm   hero setion mmmmmmmmmmmmmmmmmmm*/}
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
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
              <div className="mt-2 text-xl lg:-ml-6 ">
                <span>k</span>
                <span>k</span>
                <span>k</span>
                <span>k</span>
                <span>k</span>
              </div>
            </div>
          </div>
          <div className="bg-red-200 ">
            1 <img src={onhero} alt="" />
          </div>
        </section>
        {/*mmmmmmmmmmmmmmmmmmmmmmmmmmm our food menu mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm*/}
        <section className=" pt-20">
          <h2 className="text-center text-5xl mb-8">Our food menu</h2>
          <p className="text-center whitespace-pre ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            est, porro in <br /> vitae unde quo impedit repellendus, maiores,
            tenetur aliquid velit perspiciatis.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-red-400 ">1</div>
            <div className="bg-red-600">2</div>{" "}
            <div className="bg-red-800 ">3</div>
          </div>
        </section>
        {/*mmmmmmmmmmmmmmmmmmmmmmmmmmmm   always the best setion mmmmmmmmmmmmmmmmmmm*/}
        <section className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-20">
          <div className="bg-red-200 lg:order-1 order-2">1</div>
          <div className="bg-red-200 mt-16 lg:order-2 order-1">2</div>
        </section>
        {/*mmmmmmmmmmmmmmmmmmmmmmmmmmmm   Our special recipies setion mmmmmmmmmmmmmmmmmmm*/}
        <section className="pt-20">
          <h5 className="text-center text-5xl font-semibold mb-6">
            Our special recipies
          </h5>
          <p className="text-center text-base whitespace-normal">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and <br /> praising pain was born and I will give you a
            complete account of the system
          </p>
          <div className="grid lg:grid-cols-2 gap-16 grid-cols-1 mt-16">
            <div className="lg:order-1 order-3 shadow-xl w-[95%] rounded-b-3xl">
              <img
                src={recipe1}
                alt="recipies food"
                className="rounded-3xl w-[100%] h-[80%]"
              />
              <div className="flex justify-between px-8 mt-8 mb-6 ">
                <h5 className="font-semibold text-lg">
                  Canadian chicken roast
                </h5>
                <p className="text-xl text-orange-500">$9.10</p>
              </div>
            </div>
            <div className="lg:order-2 order-4 shadow-xl w-[95%] rounded-b-3xl">
              <img
                src={recipe2}
                alt="recipies food"
                className="rounded-3xl w-[100%] h-[80%]"
              />
              <div className="flex justify-between px-8 mt-8 mb-6 ">
                <h5 className="font-semibold text-lg">New York style roast</h5>
                <p className="text-xl text-orange-500">$8.99</p>
              </div>
            </div>
            <div className=" lg:order-3 order-1 shadow-xl w-[95%] rounded-b-3xl">
              <img
                src={recipe3}
                alt="recipies food"
                className="rounded-3xl w-[100%] h-[80%]"
              />
              <div className="flex justify-between px-8 mt-8 mb-6 ">
                <h5 className="font-semibold text-lg">Iranian special food</h5>
                <p className="text-xl text-orange-500">$7.00</p>
              </div>
            </div>
            <div className=" lg:order-4 order-2 shadow-xl w-[95%] rounded-b-3xl">
              <img
                src={recipe4}
                alt="recipies food"
                className="rounded-3xl w-[100%] h-[80%]"
              />
              <div className="flex justify-between px-8 mt-8 mb-6 ">
                <h5 className="font-semibold text-lg">
                  Special Lunch in United State
                </h5>
                <p className="text-xl text-orange-500">$5.50</p>
              </div>
            </div>
          </div>
        </section>
        <Button />
      </main>
    </>
  );
}
export default App;
