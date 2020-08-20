import { render, screen } from '@testing-library/react';
import React from 'react';

import { Default } from './Main.stories';

describe("Main", () => {
  it("should contain page components", () => {
    render(<Default {...Default.args} />);
    expect(screen.getByTestId("main")).toHaveTextContent("Hello world");
  });
});
