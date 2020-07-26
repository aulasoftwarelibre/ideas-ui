import classnames from 'classnames';
import React from 'react';

import { mobileLinks } from '../../config/links';
import MobileLink from './MobileLink';

interface Props {
  hideMenu: boolean;
  closeMenuHandler: any;
}

export const MobileMenu: React.FunctionComponent<Props> = ({
  hideMenu,
  closeMenuHandler: clickHandler,
}) => {
  let state = classnames(
    "sm:hidden",
    { hidden: hideMenu },
    { block: !hideMenu }
  );

  return (
    <div className={state}>
      <div className="px-2 pt-2 pb-3 bg-white">
        {mobileLinks.map((link) => (
          <MobileLink
            key={link.path}
            path={link.path}
            label={link.label}
          ></MobileLink>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
