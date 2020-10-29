import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavigatorButton from './components/NavigatorButton';
import { Inner } from './styles/Layouts';
import { NoteNode, BaseTheme } from './store/store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { useState } from 'react';
import Editor from './components/Editor';
import { editNote, switchCurNote, delNote } from './store/actions/notes';

import { mdiAccountEdit, mdiDelete } from '@mdi/js';
interface LayoutProps {
  theme: BaseTheme;
  isRoot?: boolean;
}
const Layout = styled.div<LayoutProps>`
  position: relative;
  width: 100%;
  padding: 10px 60px 10px 10px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.borderColor};
  border: transparent 5px solid;
  border-color: ${({ isRoot, theme }) => (isRoot ? 'gray' : theme.borderColor)};
  border-radius: 5px;
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  color: white;
  font-size: 10px;
  z-index: 101;
`;
const Label = styled.div`
  width: 20%;
  height: 15px;
  margin: 5px 0;
  display: flex;
  align-items: center;
`;
const Content = styled.div`
  width: 80%;
  min-height: 15px;
  margin: 5px 0;
  align-items: center;
`;
const SideToolBar = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  min-width: ${({ theme }) => theme.navigatorButtonWidth + 20 + 'px'};
  background-color: ${({ theme }) => theme.themeColorLight};
  border-radius: 0 5px 5px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const TitleInput = styled.input`
  border: none;
  height: 30px;
  font-size: 20px;
  &:hover {
    border: none;
    outline: none;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;
function del(cb: Function) {
  // eslint-disable-next-line no-restricted-globals
  if (confirm('是否删除')) {
    cb();
  }
}
interface ItemContainerProps {
  data: NoteNode;
  editNote: (oldTitle: string, newTitle: string, newContent: string) => void;
  isRootNode?: boolean;
  edit: (data: { title: string; content: string }) => void;
  delNote: (title: string) => void;
}
function ItemContainer({ data, editNote, isRootNode = false, delNote, edit }: ItemContainerProps) {
  const [editMode, setEditMode] = useState(false);
  const [itemContent, setItemContent] = useState(data.content);
  const [itemTitle, setItemTitle] = useState(data.title);
  // console.log(itemContent);
  useEffect(() => {
    setItemContent(data.content);
    setItemTitle(data.title);
    setEditMode(false);
    edit({ title: '', content: '' });
  }, [data]);
  useEffect(() => {
    if (editMode) edit({ title: itemTitle, content: itemContent });
  }, [itemContent, itemTitle, editMode, edit]);

  return (
    <Layout>
      <Label>标题</Label>
      <Content>
        {!editMode ? (
          data.title
        ) : (
          <TitleInput value={itemTitle} onChange={(e) => setItemTitle(e.target.value)}></TitleInput>
        )}
      </Content>
      <Label>内容</Label>
      <Content>
        <Inner>{!editMode ? data.content : <Editor change={setItemContent} content={itemContent}></Editor>}</Inner>
      </Content>
      <SideToolBar>
        <NavigatorButton
          path={mdiAccountEdit}
          clickEvent={() => {
            setEditMode(!editMode);
            if (editMode) {
              edit({ title: '', content: '' });
              editNote(data.title, itemTitle, itemContent);
            } else {
              edit({ title: data.title, content: data.content });
            }
          }}></NavigatorButton>
        <NavigatorButton path={mdiDelete} clickEvent={() => del(() => delNote(data.title))}></NavigatorButton>
        {/* <NavigatorButton></NavigatorButton> */}
      </SideToolBar>
    </Layout>
  );
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  delNote: (title: string) => {
    dispatch(delNote({ title }));
  },
  editNote: (oldTitle: string, newTitle: string, newContent: string) => {
    dispatch(editNote({ oldTitle, newTitle, newContent }));
    // dispatch(switchCurNote({ title: newTitle }));
  },
});
// const mapStateToProps = (state: BeeNoteState) => ({
//   list: getEditPaneList(state),
//   filter: state.noteData.filter,
// });
// const NavigatorItem = connect(mapStateToProps, mapDispatchToProps)(EditorPaneContainer);
const Item = connect(null, mapDispatchToProps)(ItemContainer);
export default Item;
