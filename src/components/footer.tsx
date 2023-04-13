import React from 'react';
import { aTagProps } from '..';
import socialNetworks from '../data/socialNetworks';

const AnchorLink = (props: aTagProps & { children: string }) => {
  const { children, ...rest } = props;
  return (
    <li className="my-4 mr-3">
      <a
        className="text-white hover:underline decoration-yellow-400 decoration-4 py-3 underline-offset-8 hover:text-yellow-400 font-bold"
        {...rest}
      >
        {props.children}
      </a>
    </li>
  );
};

const Footer = () => {
  return (
    <section
      id="projects"
      className="  bg-gradient-to-r from-cyan-800 to-blue-900 pt-16 mt-12"
    >
      <div className="flex justify-evenly">
        <div className="text-white">
          <h3 className="text-base font-display">Links</h3>
          <ul className="flex justify-start list-none">
            <AnchorLink href="#about">About</AnchorLink>
            <AnchorLink href="#skills">Skills</AnchorLink>
            <AnchorLink href="#projects">Projects</AnchorLink>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-display text-white">Contacts</h3>
          <div className="flex items-center my-4 md:justify-center">
            {socialNetworks.map((el: any, i: number) => (
              <a href={el.url} key={el.name} target="_blank" className="mr-6">
                <el.icon
                  size={32}
                  className="hover:text-yellow-400 text-white"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center text-white text-xs mt-8 pb-4">
        &#169; 2023. Built and designed by Billy Cheung
      </p>
    </section>
  );
};

export default Footer;
