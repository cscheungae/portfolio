import React from 'react';
import '../styles/global.css';

const Layout = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default Layout;
