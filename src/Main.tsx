import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Divider, FullFixed } from './styles/Layouts';
import Nav from './Nav';
import PreviewPane from './PreviewPane';
import EditorPane from './EditorPane';
import { useState } from 'react';
import { getMarkdown } from './store/selectors/note';
import { BeeNoteState } from './store/store';
import { connect } from 'react-redux';
const MainLayout = styled(FullFixed)`
  display: flex;
  flex-direction: row;
`;
const MainContent = styled.div`
  flex: auto;
  background-color: black;
  position: relative;
  display: flex;
`;

const layoutConfig = {
  eidtorPaneWidth: 600,
};
export interface MainContainerProps {
  markdown?: string;
}

/*
输出

*/
function data2Markdown({ title, content }: { title: string; content: string }) {
  return ` # ${title}\n${content}`;
}
const MainContainer = ({ markdown }: MainContainerProps) => {
  const [curData, setCurData] = useState({ title: '', content: '' });

  useEffect(() => {}, [curData, setCurData]);
  return (
    <MainLayout>
      <Nav />
      <Divider></Divider>
      {/* <SideBarContainer></SideBarContainer> */}
      <MainContent>
        <EditorPane edit={setCurData} width={layoutConfig.eidtorPaneWidth}></EditorPane>
        <Divider></Divider>
        <PreviewPane content={curData.title !== '' ? data2Markdown(curData) : markdown ? markdown : ''}></PreviewPane>
      </MainContent>
    </MainLayout>
  );
};

const mapStateToProps = (state: BeeNoteState) => ({
  markdown: getMarkdown(state),
});
const Main = connect(mapStateToProps, null)(MainContainer);
export default Main;
