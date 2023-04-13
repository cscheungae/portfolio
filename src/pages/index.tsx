import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import 'normalize.css';
import Home from '../components/home';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Home />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Billy Cheung | Frontend Engineer</title>
);
