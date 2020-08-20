import React from 'react';

export const Hero: React.FunctionComponent = () => (
  <div
    className="relative hidden sm:block bg-gradient-to-r from-primary to-primary-light overflow-hidden"
    data-testid="hero"
  >
    <div className="lg:bg-hero bg-right-top bg-no-repeat max-h-full overflow-hidden">
      <div className=" my-10 mx-auto max-w-screen-xl px-4 sm:my-12 sm:px-6 md:my-16 lg:my-20 lg:px-8 xl:my-28">
        <div className="sm:text-center lg:text-left">
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
            Descubre nuevos eventos <br />y grupos{" "}
            <span className="text-indigo-600">cerca de ti</span>
          </h2>
          <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Únete a eventos, organiza actividades y conoce a nuevas personas.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
