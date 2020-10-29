import React from 'react';
// import { md2Html } from '../lib/utils';
import { FullAbs } from '../styles/Layouts';

interface MarkdownPanelProps {
  content: string;
}
function MarkdownPanel({ content }: MarkdownPanelProps) {
  // console.log(md2Html(content));
  return <FullAbs>{content}</FullAbs>;
  // return <FullAbs>{md2Html(content)}</FullAbs>;
}

export default MarkdownPanel;
