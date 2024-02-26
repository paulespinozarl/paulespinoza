export const Text = ({ title, subtitle, text = "" }) => {
  return (
    <>
      <div className="mx-5 mt-5">
        <div className="max-w-6xl mx-auto flex flex-wrap md:p-3 lg:p-0 relative">
          <div className="absolute top-0 mt-5 lg:top-5 md:left-5 left-0 lg:left-5 h-32 ">
            <h1 className="text-2xl sm:text-6xl md:text-7xl font-bold dark:text-slate-500/30 text-slate-700/20">
              {title}
            </h1>
          </div>
          <div className="w-full lg:w-1/2 mt-5 p-5 lg:border-l-4 border-slate-700 relative md:pl-9 pl-0 lg:mt-14">
            <h1 className="ml-2 text-2xl md:text-5xl font-bold text-gray-800 ">
              {subtitle}
            </h1>
            <p className="ml-1 text-md lg:text-xl dark:text-slate-500 text-slate-500">
              {text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
