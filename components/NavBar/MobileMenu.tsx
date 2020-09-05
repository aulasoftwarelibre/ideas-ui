import classnames from 'classnames'
import React from 'react'

import { mobileLinks } from '../../config/links'
import MobileLink from './MobileLink'

export interface Props {
  hideMenu: boolean
}

export const MobileMenu: React.FunctionComponent<Props> = ({ hideMenu }) => {
  const state = classnames(
    'sm:hidden',
    { hidden: hideMenu },
    { block: !hideMenu }
  )

  return (
    <div className={state} data-testid="mobile-menu">
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
  )
}

export default MobileMenu
