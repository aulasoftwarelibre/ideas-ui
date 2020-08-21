import { render, screen } from '@testing-library/react';
import React from 'react';

import { Default, Empty } from './IdeaCardList.stories';

describe("IdeCardList", () => {
  it("should show a warning when list is empty", () => {
    render(<Empty {...Empty.args} />);
    expect(screen.getByTestId("not-found"));
  });

  it("should show all ideas", () => {
    render(<Default {...Default.args} />);
    expect(screen.getAllByTestId("idea-card")).toHaveLength(8);
  });
});
