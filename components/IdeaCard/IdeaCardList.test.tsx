import { render, screen } from '@testing-library/react';
import React from 'react';

import { Props } from './IdeaCardList';
import { Default, Empty } from './IdeaCardList.stories';

describe("IdeCardList", () => {
  it("should show a warning when list is empty", () => {
    render(<Empty {...(Empty.args as Props)} />);
    expect(screen.getByTestId("not-found"));
  });

  it("should show all ideas", () => {
    render(<Default {...(Default.args as Props)} />);
    expect(screen.getAllByTestId("idea-card")).toHaveLength(8);
  });
});
