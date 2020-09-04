import React from 'react';

import { renderMockRouter, screen } from '../../utils/test-utils';
import { Props } from './NavBar';
import { DesktopWithoutSession, DesktopWithProfile, DesktopWithSession } from './NavBar.stories';

describe("NavBar", () => {
  it("should render desktop menu without session", () => {
    renderMockRouter(
      <DesktopWithoutSession {...(DesktopWithoutSession.args as Props)} />
    );

    expect(screen.getAllByText("Iniciar sesión"));
  });

  it("should render desktop menu with session", () => {
    renderMockRouter(
      <DesktopWithSession {...(DesktopWithSession.args as Props)} />
    );

    expect(screen.getAllByText("Añadir idea"));
  });

  it("should render desktop menu with profile menu open", () => {
    renderMockRouter(<DesktopWithProfile />);

    expect(screen.getByTestId("profile-menu"));
  });
});
