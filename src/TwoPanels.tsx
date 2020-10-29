import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Editor from './components/Editor';
import PreviewPane from './PreviewPane';
const TempCon = styled.div`
  width: 500px;
  height: 300px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const Left = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 50%;
`;
const Right = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: gray;
  overflow: auto;
  user-select: none;
`;

const TwoPanels = () => {
  const [content, setContent] = useState('');
  useEffect(() => {
    // console.log(content);
  }, [content]);
  return (
    <TempCon>
      <Left>
        <Editor content={content} change={setContent}></Editor>
      </Left>
      <Right>
        {/* <MarkdownPanel content={content}></MarkdownPanel> */}
        <PreviewPane content={content}></PreviewPane>
      </Right>
    </TempCon>
  );
};

export default TwoPanels;
