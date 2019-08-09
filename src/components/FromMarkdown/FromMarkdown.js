import React from 'react';
import Parser from 'html-react-parser';
import MarkdownIt from 'markdown-it';

const FromMarkdown = ({ text }) => {
  const md = new MarkdownIt();

  // console.log('text', text);
  // text =
  //   "IyMgSmFrIENvbnRleHQgQVBJIG1vxbxlIG5hbSBwb23Ds2M/IAoKVyBrbGFzeWN6bmVqIGFwbGlrYWNqaSBuYXBpc2FuZWogdyBSZWFjdCBkYW5lIHPEhSBwcnpla2F6eXdhbmUgeiBnw7NyeSB3IGTDs8WCIHBvbWnEmWR6eSBrb21wb25lbnRhbWkgemEgcG9tb2PEhSBwcm9wc8Ozdy4gWmRhcnphasSFIHNpxJkgc3l0dWFjamUsIGdkeSBrb21wb25lbnQgemFnbmllxbxkxbxvbnkga2lsa2EgcG96aW9tw7N3IG5pxbxlaiBwb3RyemVidWplIGRhbnljaCB6IG5hand5xbxzemVnbyBrb21wb25lbnR1LiBQcm93YWR6aSB0byBkbyBzeXR1YWNqaSwga2llZHkgbXVzaW15IHByemVrYXphxIcgcHJvcHN5IHcgZMOzxYIgcHJ6ZXoga2lsa2Ega29tcG9uZW50w7N3Lg==";
  return text ? (
    <>{Parser(md.render(decodeURIComponent(escape(atob(text)))))}</>
  ) : null;
};

export default FromMarkdown;
