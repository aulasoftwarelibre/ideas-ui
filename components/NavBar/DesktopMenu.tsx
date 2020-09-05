import React from 'react';

import { menuLinks } from '../../config/links';
import DesktopLink from './DesktopLink';

export const DesktopMenu: React.FunctionComponent = () => {
  return (
    <div className="hidden sm:block sm:ml-6" data-testid="desktop-menu">
      <div className="flex">
        {menuLinks.map((link) => (
          <DesktopLink
            key={link.path}
            label={link.label}
            path={link.path}
          ></DesktopLink>
        ))}
      </div>
    </div>
  );
};

export default DesktopMenu;
