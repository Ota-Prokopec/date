import { JSX } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export const convertJSXtoHTML = (jsxElement: JSX.Element) => {
  const template = document.createElement('template');
  const staticMarkup = renderToStaticMarkup(jsxElement);
  template.innerHTML = staticMarkup;

  return template.content.firstChild as HTMLElement;
};
