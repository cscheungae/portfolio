import React, { useState } from 'react';

type aTagProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const AnchorLink = (props: aTagProps & { children: string }) => {
  return (
    <li className="my-6 mx-auto md:my-0 md:mx-16">
      <a
        className="text-white hover:underline decoration-yellow-400 decoration-4 py-3 underline-offset-8 hover:text-yellow-400 font-thin"
        {...props}
      >
        {props.children.toUpperCase()}
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

const Home = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div className="h-screen bg-gradient-to-r from-cyan-800 to-blue-900 relative md:static">
      <HamburgerMenu
        isMenuOpen={isMenuOpen}
        toggleMenu={() => setMenuOpen((prevState) => !prevState)}
      />
      <nav
        className={`pt-24 md:pt-0 bg-black bg-opacity-60 absolute md:bg-none md:bg-opacity-0 md:static h-full w-full ${
          !isMenuOpen ? 'hidden' : ''
        } md:block`}
      >
        <ul className="flex flex-col md:flex-row md:justify-center md:py-8 list-none">
          <AnchorLink href="#">About</AnchorLink>
          <AnchorLink href="#">Skills</AnchorLink>
          <AnchorLink href="#">Project</AnchorLink>
        </ul>
      </nav>
      {/* <h1 className="text-white">Hi, I'm Billy Cheung | Frontend Engineer</h1>
      <p>This is a sample para</p> */}
    </div>
  );
};

export default Home;
