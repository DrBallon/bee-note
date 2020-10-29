import React from 'react';
import styled from 'styled-components';
// import { BaseTheme } from './styles/theme';
import Item from './Item';
import { connect } from 'react-redux';
import { BeeNoteState, NoteNode } from './store/store';
import { Dispatch } from 'redux';
import _ from 'lodash';
import { getEditPaneList } from './store/selectors/note';
import { changeFilter, switchCurNote } from './store/actions/notes';
import { scrollBar } from './styles/Layouts';
const EditorPaneLayout = styled.div<{ width: number }>`
  display: flex;
  width: ${({ width }) => {
    return width === 0 ? '100%' : width + 'px';
  }};
  background-color: ${({ theme }) => theme.themeColorDark};
  flex-direction: column;
  align-items: center;
`;
const EditorPaneTop = styled.div<{ width: number }>`
  width: ${({ width }) => {
    return width === 0 ? '600px' : '100%';
  }};
  height: 40px;
  background-color: ${({ theme }) => theme.themeColorDark};
  box-sizing: border-box;
  padding: 5px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  display: flex;
  justify-content: center;
`;
const EditorPaneContent = styled.div<{ width: number }>`
  width: ${({ width }) => {
    return width === 0 ? '600px' : '100%';
  }};
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  ${scrollBar}
`;
const SearchInput = styled.input`
  width: 80%;
  height: 100%;
  border: none;
  border-radius: 5px;
  outline: none;
  padding-left: 10px;
  font-size: 10px;
  background-color: ${({ theme }) => theme.themeColorLight};
  color: white;
  &:hover {
    outline: none;
  }
`;
interface EditorPaneContainerProps {
  width: number;
  list?: NoteNode | NoteNode[];
  filterChange?: (filter: string) => void;
  filter: string;
  edit: (data: { title: string; content: string }) => void;
}

function EditorPaneContainer({ width, list, filterChange, filter, edit }: EditorPaneContainerProps) {
  // console.log('list:', list);
  const list2 = _.isArray(list) ? (
    <React.Fragment>
      {list.map((node) => {
        return <Item edit={edit} data={node} key={node.title}></Item>;
      })}
    </React.Fragment>
  ) : (
    <React.Fragment>
      {list && list.title !== '' && <Item edit={edit} data={list} isRootNode={true}></Item>}
      {list &&
        list.title !== '' &&
        list.sub.map((node) => {
          return <Item edit={edit} data={node} key={node.title}></Item>;
        })}
    </React.Fragment>
  );
  return (
    <EditorPaneLayout width={width}>
      <EditorPaneTop width={width}>
        <SearchInput
          placeholder='搜索'
          value={filter}
          onChange={(e) => {
            filterChange && filterChange(e.target.value);
          }}></SearchInput>
      </EditorPaneTop>
      <EditorPaneContent width={width}>{list2}</EditorPaneContent>
    </EditorPaneLayout>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  // toEditMode: (title: string) => console.log('进入编辑模式'),
  filterChange: (filter: string) => {
    dispatch(switchCurNote({ title: '' }));
    dispatch(changeFilter({ filter }));
  },
});
const mapStateToProps = (state: BeeNoteState) => ({
  list: getEditPaneList(state),
  filter: state.noteData.filter,
});
// const NavigatorItem = connect(mapStateToProps, mapDispatchToProps)(EditorPaneContainer);
const EditorPane = connect(mapStateToProps, mapDispatchToProps)(EditorPaneContainer);
export default EditorPane;
