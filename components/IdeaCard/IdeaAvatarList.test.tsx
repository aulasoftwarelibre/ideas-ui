import { render, screen } from '@testing-library/react';
import React from 'react';

import { Props } from './IdeaAvatarList';
import { AvatarAttendees, Empty, NoAvatarAttendees } from './IdeaAvatarList.stories';

describe("IdeaAvatarList", () => {
  it("should be rendered avatar with images", () => {
    render(<AvatarAttendees {...(AvatarAttendees.args as Props)} />);
    expect(screen.getAllByRole("img")).toHaveLength(4);
  });

  it("should be rendered avatar with default images", () => {
    render(<NoAvatarAttendees {...(NoAvatarAttendees.args as Props)} />);
    expect(screen.getAllByRole("img")).toHaveLength(4);
    expect(screen.getAllByRole("img")[0]).toHaveProperty(
      "src",
      "http://localhost/avatar.svg"
    );
  });

  it("should not render any avatar when there are not attendees", () => {
    render(<Empty {...(Empty.args as Props)} />);
    expect(screen.queryAllByRole("img")).toHaveLength(0);
  });
});
