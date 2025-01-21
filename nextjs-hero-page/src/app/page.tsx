export default function Home() {
  return (
    <>
      <div className="bg-[url('https://images.prismic.io/novaenergia/bb9b9158-b8c4-454e-95e8-22a1534dfb26_iStock-1447827708+%281%29.jpg')] bg-cover bg-center h-screen w-full"></div>

      <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden bg-black bg-fixed opacity-60"></div>

      <nav className="text-white fixed top-0 left-0 w-full pt-2 border-b ">
        <div className="flex justify-between items-center h-16 px-10 py-10">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold uppercase cursor-default select-none">
              pollo
            </span>
          </div>
          <div className="flex space-x-4 gap-10 text-xl cursor-default select-none">
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Contact</span>
          </div>
          <div>
            <button className="text-xl rounded-xl bg-white text-black px-4 py-4">
              Feel free to contact us
            </button>
          </div>
        </div>
      </nav>

      <div className="absolute bottom-10 left-10 text-white space-y-6 pb-8 ">
        <div>
          <span className="uppercase text-9xl font-bold">wind energy </span>
        </div>
        <div>
          <div>
            <span className="uppercase text-3xl font-semibold ">
              make a difference in the world
            </span>
          </div>
          <div className="mt-4">
            <span className="text-2xl">
              Pollo is one of the best wind energy enterprises in the world,
              requiring not too much to start.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
