import React, { useState } from 'react';
import { MarkdownEditorTextarea } from './MarkdownEditor.style';

const MarkdownEditor = () => {
  const [content, setContent] = useState('');
  //  const b64  = window.btoa(unescape(encodeURIComponent(content)));
  // console.log(window.btoa(unescape(encodeURIComponent(content))));
  return (
    <MarkdownEditorTextarea
      value={content}
      onChange={e => setContent(e.target.value)}
      placeholder="Type your text..."
    />
  );
};

export default MarkdownEditor;
