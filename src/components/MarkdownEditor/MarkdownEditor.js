import React, { useState } from 'react';
import { MarkdownEditorTextarea } from './MarkdownEditor.style';

const MarkdownEditor = () => {
  const [content, setContent] = useState('');
  return (
    <MarkdownEditorTextarea onChange={e => setContent(e.target.value)} placeholder="Type your text...">
      {content}
    </MarkdownEditorTextarea>)
}

export default MarkdownEditor;
