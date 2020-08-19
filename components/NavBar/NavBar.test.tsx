import React from 'react';

import { Session } from '../../model/user/auth';
import { renderMockRouter, screen } from '../../utils/test-utils';
import {
  DesktopWithoutSession,
  DesktopWithProfile,
  DesktopWithSession,
} from './NavBar.stories';

const session: Session = {
  user: {
    name: "user",
    image:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y",
  },
};

describe("NavBar", () => {
  it("should render desktop menu without session", () => {
    renderMockRouter(<DesktopWithoutSession {...DesktopWithoutSession.args} />);

    expect(screen.getAllByText("Iniciar sesión"));
  });

  it("should render desktop menu with session", () => {
    renderMockRouter(<DesktopWithSession {...DesktopWithSession.args} />);

    expect(screen.getAllByText("Añadir idea"));
  });

  it("should render desktop menu with profile menu open", () => {
    renderMockRouter(<DesktopWithProfile />);

    expect(screen.getByTestId("profile-menu"));
  });
});
