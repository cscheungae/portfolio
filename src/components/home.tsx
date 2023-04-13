import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { BiChevronsDown } from 'react-icons/bi';
import { aTagProps } from '..';
import socialNetworks from '../data/socialNetworks';

const AnchorLink = (props: aTagProps & { children: string }) => {
  const { children, ...rest } = props;
  return (
    <li className="my-6 mx-auto md:my-0 md:mx-10">
      <a
        className="text-white hover:underline decoration-yellow-400 decoration-4 py-3 underline-offset-8 hover:text-yellow-400 font-thin"
        {...rest}
      >
        {props.children}
      </a>
    </li>
  );
};

const HamburgerMenu = (props: {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}) => {
  const { isMenuOpen, toggleMenu } = props;
  return (
    <button
      className="absolute z-10 top-5 right-5 text-white font-thin text-xl w-10 h-10 focus:outline-none md:hidden"
      onClick={() => toggleMenu()}
    >
      <span className="sr-only">Open main menu</span>
      <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
        <span
          aria-hidden="true"
          className={`block absolute h-px w-5 bg-current transform transition duration-500 ease-in-out ${
            isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`block absolute  h-px w-5 bg-current transform transition duration-500 ease-in-out ${
            isMenuOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`block absolute  h-px w-5 bg-current transform  transition duration-500 ease-in-out ${
            isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
          }`}
        ></span>
      </div>
    </button>
  );
};

const Navigation = (props: { onClick: () => void }) => {
  const { onClick } = props;
  return (
    <nav
      className={`pt-24 md:pt-0 bg-black bg-opacity-95 absolute md:bg-none md:bg-opacity-0 md:static h-screen w-full md:h-auto md:w-auto md:block`}
    >
      <ul className="flex flex-col md:flex-row md:justify-end md:py-8 list-none">
        <AnchorLink onClick={onClick} href="#about">
          About
        </AnchorLink>
        <AnchorLink onClick={onClick} href="#skills">
          Skills
        </AnchorLink>
        <AnchorLink onClick={onClick} href="#projects">
          Projects
        </AnchorLink>
      </ul>
    </nav>
  );
};

const Home = () => {
  const { isSm } = useBreakpoint('sm');
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);
  return (
    <div className="h-screen bg-gradient-to-r from-cyan-800 to-blue-900 relative md:static md:flex md:flex-col">
      <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Transition
        show={isMenuOpen || !isSm}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        className="md:block"
      >
        <Navigation onClick={toggleMenu} />
      </Transition>
      <div className="flex items-center flex-1">
        <div className="pt-60 md:pt-0 px-4 md:px-24 md:flex-1 md:flex md:flex-col md:justify-center mb-52">
          <h1 className="text-white text-4xl md:text-7xl mt-0 md:pt-9 md:text-center my-auto">
            Hi, I'm Billy Cheung |{' '}
            <span className="text-yellow-400 italic font-extrabold underline md:block md:mt-10 md: tracking-widest md:text-8xl">
              Frontend Engineer
            </span>
          </h1>
          <div className="flex items-center mt-24 md:justify-center">
            {socialNetworks.map((el: any, i: number) => (
              <a href={el.url} key={el.name} target="_blank" className="mr-3">
                <el.icon
                  size={32}
                  className="hover:text-white text-yellow-400"
                />
              </a>
            ))}
          </div>
          <p className="text-white text-base md:text-xl my-8 font-extralight md:text-center">
            Building digital soulutions that not only look great,
            <br /> but also deliver exceptional user experiences
          </p>
          <div className="flex justify-center">
            <BiChevronsDown className="text-yellow-400 text-6xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
