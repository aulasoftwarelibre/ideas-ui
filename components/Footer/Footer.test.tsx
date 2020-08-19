import { render, screen } from '@testing-library/react';
import React from 'react';

import { Default } from './Footer.stories';

describe("Footer", () => {
  it("should render footer", () => {
    render(<Default {...Default.args} />);
    expect(screen.getByTestId("footer"));
  });
});
