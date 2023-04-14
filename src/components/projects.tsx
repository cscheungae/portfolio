import React from 'react';
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image';
import SkillBadge from './skillBadge';
import { aTagProps } from '..';
import './projects.scss';
import { graphql, useStaticQuery } from 'gatsby';

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
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { projectTitle: DESC }) {
        edges {
          node {
            id
            description {
              description
            }
            projectTitle
            siteUrl
            repoUrl
            skills {
              content
            }
            image {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const projects = data.allContentfulProject.edges.map((e: any) => ({
    id: e.node.id,
    title: e.node.projectTitle,
    skills: e.node.skills.map((s: any) => s.content),
    description: e.node.description.description,
    siteUrl: e.node.siteUrl,
    repoUrl: e.node.repoUrl,
    img: getImage(e.node.image),
  }));

  return (
    <section
      id="projects"
      className="max-w-[90%] md:max-w-5xl mx-auto md:mx-20 lg:mx-auto"
    >
      <h2 className="decoration-yellow-400 underline decoration-4 py-3 font-bold text-2xl tracking-widest mb-6">
        Projects
      </h2>
      {projects.map((p: any) => (
        <div key={p.id} className="md:flex mb-12">
          <div className="md:flex-1 md:mr-24">
            <h3 className="text-3xl font-semibold mb-4">{p.title}</h3>
            <div className="flex flex-wrap">
              {p.skills.map((s: any) => (
                <SkillBadge name={s} />
              ))}
            </div>
            <p className="font-light mt-8 leading-6">{p.description}</p>
            <Button href={p.siteUrl} target="_blank">
              View Live
            </Button>
            <Button href={p.repoUrl} target="_blank">
              Repo
            </Button>
          </div>
          <div className="md:flex-1">
            <GatsbyImage
              className="rounded-lg bg-cover block shadow-lg border-[1px] border-gray-200 mx-auto my-4 md:my-0"
              image={p.img}
              alt={p.title}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
