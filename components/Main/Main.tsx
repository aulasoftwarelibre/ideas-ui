import React from 'react';

export const Main: React.FunctionComponent = ({ children }) => (
  <div
    className="mx-auto max-w-screen-xl my-10 px-4 sm:px-6 lg:px-8"
    data-testid="main"
  >
    {children}
  </div>
);

export default Main;
