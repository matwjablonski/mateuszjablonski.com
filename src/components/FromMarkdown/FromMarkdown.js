import React from 'react';
import Parser from 'html-react-parser';
import MarkdownIt from 'markdown-it';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { codeStyles } from '../../codeStyle';

const FromMarkdown = ({ text }) => {
  const md = new MarkdownIt();

  const content = md.render(decodeURIComponent(escape(atob(text))));

  return text ? (
    <>{Parser(content, {
      replace: domNode => {
        if (domNode.name === 'code' && domNode.attribs.class) {
          const lang = domNode.attribs.class.split('-');
          return (
            <SyntaxHighlighter
              children={domNode.children[0].data}
              language={lang[1]}
              style={codeStyles}
              showLineNumbers={true}
            />
          );
        }
      },
    })}</>
  ) : null;
};

export default FromMarkdown;
