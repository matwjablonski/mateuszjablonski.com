import React from 'react';
import MarkdownIt from 'markdown-it';
import Parser from 'html-react-parser';
import MarkdownEditor from '../components/MarkdownEditor/MarkdownEditor';

const md = new MarkdownIt();

const Dashboard = () => (
  <>
    <MarkdownEditor />
    {Parser(md.render('# Dashboard \n## test'))}
  </>
);

export default Dashboard;
