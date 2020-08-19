import { date } from '@storybook/addon-knobs';
import Link from 'next/link';
import React from 'react';

import { menuLinks } from '../../config/links';

export const Footer: React.FunctionComponent = () => {
  return (
    <footer className="footer relative" data-testid="footer">
      <div className="bg-gray-900 text-sm">
        <div className="container mx-auto px-6">
          <div className="sm:flex py-6">
            <div className="sm:w-2/5 sm:pl-16 mt-8 sm:mt-0 pr-4">
              <Link href="/">
                <a title="Ideas">
                  <img
                    alt="Ideas Logo"
                    src="/ideas-imagotipo-blanco.svg"
                    className="h-12"
                  />
                </a>
              </Link>
              <p className="text-teal-100 mt-2">
                Portal de organización de actividades.
              </p>
            </div>
            <div className="mt-16 sm:mt-0 sm:w-3/5 sm:pr-16 flex flex-row">
              <div className="flex flex-col w-1/2 sm:w-1/2 mr-4">
                <span className="font-bold text-white uppercase mb-2">
                  Enlaces
                </span>
                <div className="flex">
                  <ul className="flex-1">
                    {menuLinks.map((link) => (
                      <Link href={link.path} key={link.path}>
                        <li className="mb-1">
                          <a className="text-teal-100 hover:text-white cursor-pointer">
                            {link.label}
                          </a>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white uppercase mb-2">
                  Contacta
                </span>
                <div className="flex">
                  <ul className="flex-1">
                    <li className="mb-1">
                      <span className="text-teal-100">Aulario Averroes</span>
                    </li>
                    <li className="mb-1">
                      <span className="text-teal-100">Campus de Rabanales</span>
                    </li>
                    <li className="mb-1">
                      <span className="text-teal-100">Córdoba 14014</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col">
            <div className="sm:w-full text-center py-2">
              <span className="text-sm text-teal-100 mb-2 float-left">
                Aula de Software Libre {new Date().getFullYear()}
              </span>
              <span className="text-sm text-teal-100 mb-2 float-right">
                <a className="mx-1">Privacy</a>|<a className="mx-1">Legal</a>|
                <a className="mx-1">Cookies</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
