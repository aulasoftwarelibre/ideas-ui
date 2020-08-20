import { render, screen } from '@testing-library/react';
import React from 'react';

import { Online, Presencial } from './IdeaCard.stories';

describe("IdeaCard", () => {
  it("should render idea card", () => {
    render(<Presencial {...Presencial.args} />);
    expect(screen.getByTestId("idea-card"));
    expect(screen.queryByTestId("idea-type")).toBeNull();
  });

  it("should render online idea", () => {
    render(<Online {...Online.args} />);
    expect(screen.getByTestId("idea-card"));
    expect(screen.getByTestId("idea-type")).toHaveTextContent("ONLINE");
  });
});
