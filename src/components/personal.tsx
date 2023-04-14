import React from 'react';
import SkillBadge from './skillBadge';
import { graphql, useStaticQuery } from 'gatsby';

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
  const data = useStaticQuery(graphql`
    query {
      allContentfulAbout(limit: 1) {
        edges {
          node {
            id
            text {
              text
            }
          }
        }
      }
    }
  `);
  const aboutDesc = data.allContentfulAbout.edges[0].node.text.text;

  return (
    <section className="max-w-[90%] md:max-w-5xl mx-auto md:flex ">
      <div id="about" className="mb-6 mt-12 md:flex-1 md:mr-24">
        <h2 className="decoration-yellow-400 underline decoration-4 py-3 font-bold text-2xl tracking-widest mb-6">
          About
        </h2>
        <p className="text-base">{aboutDesc}</p>
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
