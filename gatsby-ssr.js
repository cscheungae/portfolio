import * as React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Ubuntu-Bold.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="ubuntuFontBold"
    />,
    <link
      rel="preload"
      href="/fonts/Ubuntu-Medium.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="ubuntuFontMedium"
    />,
    <link
      rel="preload"
      href="/fonts/Ubuntu-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="ubuntuFontRegular"
    />,
  ]);
};
