import React from "react";
import MarkdownIt from "markdown-it";
import Parser from "html-react-parser";

const md = new MarkdownIt();

const Dashboard = () => <>{Parser(md.render("# Dashboard \n## test"))}</>;

export default Dashboard;
