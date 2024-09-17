const Home = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 xl:px-6">
      <section>
        <div className="relative" id="home"></div>
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-80 dark:opacity-20 bg-hero-pattern bg-cover bg-center"
        >
          <div className="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
          <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
        </div>

        <div className="relative ml-auto pt-36">
          <div className="mx-auto text-center lg:w-2/3">
            <h2 className="mt-8 text-2xl font-semibold text-gray-700 dark:text-white md:text-3xl">
              Welcome to HairCare, the best place to get your hair done.
            </h2>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white md:text-6xl xl:text-7xl">
              Revive Your Look{" "}
              <span className="text-primary dark:text-white">
                Refresh Your Spirit.
              </span>
            </h1>

            <div className="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-4">
              <a
                href="#"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  Book now
                </span>
              </a>
            </div>

            {/* <div className="mt-16 hidden justify-between border-y border-gray-100 py-8 dark:border-gray-800 sm:flex">
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  Preferential price
                </h6>
                <p className="mt-2 text-gray-500">alo</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  Diverse services
                </h6>
                <p className="mt-2 text-gray-500">alo</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  The most loved
                </h6>
                <p className="mt-2 text-gray-500">alo</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
