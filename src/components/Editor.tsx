import React from 'react';
import CodeMirror from 'react-codemirror';
// import styled from 'styled-components';
// import { scrollBar } from '../styles/Layouts';
// interface LayoutProps {}
// const Layout = styled.div<LayoutProps>`
//   overflow-y: auto;
//   ${scrollBar}
// `;
interface EditorProps {
  change: (newContent: string) => void;
  content: string;
}
const option = {
  lineWrapping: true,
};
function Editor({ change, content }: EditorProps) {
  // const inputRef = React.createRef<HTMLTextAreaElement>();
  return (
    // <Layout>
    <CodeMirror options={option} value={content} onChange={change}></CodeMirror>
    // </Layout>
  );
  // return (
  //   <FullTextArea
  //     ref={inputRef}
  //     onChange={(e: any) => {
  //       change(e.target.value);
  //     }}
  //   />
  // );
}
export default Editor;
