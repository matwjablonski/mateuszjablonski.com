import React from 'react';
import Parser from 'html-react-parser';
import MarkdownIt from 'markdown-it';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const FromMarkdown = ({ text }) => {
  const md = new MarkdownIt();

  const content = md.render(decodeURIComponent(escape(atob(text))));

  return text ? (
    <>{Parser(content, {
      replace: domNode => {
        if (domNode.name === 'code' && domNode.attribs.class) {
          const lang = domNode.attribs.class.split('-');
          return (<SyntaxHighlighter language={lang[1]} style={darcula}>
            {domNode.children[0].data}
          </SyntaxHighlighter>)
        }
      }
    })}</>
  ) : null;
};

export default FromMarkdown;
