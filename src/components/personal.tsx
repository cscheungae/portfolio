import React from 'react';
import SkillBadge from './skillBadge';

const skills = [
  'TypeScript',
  'JavaScript',
  'JAVA',
  'SASS',
  'CSS',
  'HTML',
  'Git',
  'jQuery',
  'React',
  'Redux',
  'GatsbyJS',
  'NextJS',
  'ExpressJS',
  'Webpack',
  'Jest',
  'Spring Boot',
  'Bootstrap',
  'TailwindCSS',
  'Styled Components',
  // 'SVN',
  'MySQL',
  'GraphQL',
  'MongoDB',
  'Contentful',
  'Jenkins',
  'Jira',
  'Postman',
  'Figma',
  // 'RxJS',
  // 'NodeJS',
  // 'MaterialUI',
];

const Personal = () => {
  return (
    <section className="max-w-[90%] md:max-w-5xl mx-auto md:flex ">
      <div id="about" className="mb-6 mt-12 md:flex-1 md:mr-24">
        <h2 className="decoration-yellow-400 underline decoration-4 py-3 font-bold text-2xl tracking-widest mb-6">
          About
        </h2>
        <p className="text-base">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
      <div id="skills" className="mb-6 mt-12 md:flex-1">
        <h2 className="decoration-yellow-400 underline decoration-4 py-3 font-bold text-2xl tracking-widest mb-6">
          Skills
        </h2>
        <div className="flex flex-wrap">
          {skills.map((el) => (
            <SkillBadge key={el} name={el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Personal;
