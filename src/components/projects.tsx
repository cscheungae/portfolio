import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SkillBadge from './skillBadge';
import { aTagProps } from '..';
import './projects.scss';

const Button = (props: aTagProps & { children: string }) => {
  const { children, ...rest } = props;
  return (
    <a
      className="bg-white text-blck border-[1px] border-gray-500 py-2 px-4 rounded-md hover:bg-yellow-400 hover:border-yellow-400 transition-all my-4 mr-2 inline-block cursor-pointer"
      {...rest}
    >
      {props.children}
    </a>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="max-w-[90%] md:max-w-5xl mx-auto ">
      <h2 className="decoration-yellow-400 underline decoration-4 py-3 font-bold text-2xl tracking-widest mb-6">
        Projects
      </h2>
      <div className="md:flex">
        <div className="md:flex-1 md:mr-24">
          <h3 className="text-xl font-semibold mb-4">
            Website for an NGO (HISN)
          </h3>
          <div className="flex flex-wrap">
            <SkillBadge name="GatsbyJS" />
            <SkillBadge name="React" />
            <SkillBadge name="jquery" />
            <SkillBadge name="SCSS" />
            <SkillBadge name="Contentful" />
          </div>
          <p className="font-light mt-8 leading-6">
            I implemented a responsive web layout for an NGO to promote
            activities with ReactJS and GatsbyJS from scratch. To make the
            update of content easier, the site is linked to a headless CMS,
            Contentful. Having set up the autio build on Netlify, When there are
            content updates in Contentful, the site will auto build on it own.
          </p>
          <Button>View Live</Button>
          <Button>Repo</Button>
        </div>
        <div className="md:flex-1">
          <StaticImage
            className="rounded-lg bg-cover block shadow-lg border-[1px] border-gray-200 mx-auto my-4 md:my-0"
            src="../images/ngoSite.png"
            alt={'A screen capture of an NGO site'}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
