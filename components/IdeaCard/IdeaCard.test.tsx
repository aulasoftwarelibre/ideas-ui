import { render, screen } from '@testing-library/react';
import React from 'react';

import { Props } from './IdeaCard';
import { Online, Presencial } from './IdeaCard.stories';

describe("IdeaCard", () => {
  it("should render idea card", () => {
    render(<Presencial {...(Presencial.args as Props)} />);
    expect(screen.getByTestId("idea-card"));
    expect(screen.queryByTestId("idea-type")).toBeNull();
  });

  it("should render online idea", () => {
    render(<Online {...(Online.args as Props)} />);
    expect(screen.getByTestId("idea-card"));
    expect(screen.getByTestId("idea-type")).toHaveTextContent("ONLINE");
  });
});
