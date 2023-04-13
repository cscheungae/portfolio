import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import 'normalize.css';
import Home from '../components/home';
import Personal from '../components/personal';
import Projects from '../components/projects';
import Footer from '../components/footer';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Home />
      <Personal />
      <Projects />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Billy Cheung | Frontend Engineer</title>
);
