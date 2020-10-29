import styled from 'styled-components';
import React from 'react';
import { Label, LabelInner } from '../styles/Layouts';
import NavigatorButton from './NavigatorButton';
import { BaseTheme, NoteNode, BeeNoteState } from '../store/store';
import { Dispatch } from 'redux';
import { toggleNote, switchCurNote, changeFilter, delNote, addNote } from '../store/actions/notes';
import { connect } from 'react-redux';
import { getFoldTitles } from '../store/selectors/note';
import { mdiDelete, mdiPlus, mdiFolder } from '@mdi/js';
interface LayoutProps {
  paddingLeft: string;
  theme: BaseTheme;
}
const Layout = styled.div<LayoutProps>`
  height: ${({ theme }) => theme.navigatorItemHeight};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1px 0;
  &:hover {
    background-color: ${({ theme }) => theme.themeColorLight};
  }
`;
const SubItem = styled.div`
  display: flex;
  flex-direction: column;
`;

interface NavigatorItemProps {
  data?: NoteNode;
  level: number;
  toggle: (title: string) => void;
  switchNote: (title: string) => void;
  foldTitles: string[];
  delNote: (title: string) => void;
  addNote: (parent: NoteNode) => void;
}
function del(cb: Function) {
  // eslint-disable-next-line no-restricted-globals
  if (confirm('是否删除')) {
    cb();
  }
}
function NavigatorItemContainer({
  level,
  data = { title: '', content: '', sub: [] },
  switchNote,
  toggle,
  foldTitles,
  delNote,
  addNote,
}: NavigatorItemProps) {
  const folded = foldTitles.includes(data.title);
  const foldable = data.sub.length > 0;
  return (
    <React.Fragment>
      <Layout
        paddingLeft={level * 10 + 'px'}
        onClick={() => {
          switchNote(data.title);
        }}>
        <NavigatorButton
          path={mdiFolder}
          placeHolder={!foldable}
          clickEvent={() => toggle(data.title)}></NavigatorButton>
        <Label>
          <LabelInner>{data?.title}</LabelInner>
        </Label>
        <NavigatorButton path={mdiDelete} clickEvent={() => del(() => delNote(data.title))}></NavigatorButton>
        <NavigatorButton path={mdiPlus} clickEvent={() => addNote(data)}></NavigatorButton>
      </Layout>
      <SubItem>
        {folded &&
          data?.sub.map((node) => {
            return <NavigatorItem level={level + 1} data={node} key={node.title}></NavigatorItem>;
          })}
      </SubItem>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  delNote: (title: string) => {
    dispatch(delNote({ title }));
  },
  addNote: (parent: NoteNode) => {
    dispatch(addNote({ parent }));
  },
  toggle: (title: string) => dispatch(toggleNote({ title })),
  switchNote: (title: string) => {
    dispatch(changeFilter({ filter: '' }));
    dispatch(switchCurNote({ title }));
  },
});
const mapStateToProps = (state: BeeNoteState) => ({
  foldTitles: getFoldTitles(state),
});
const NavigatorItem = connect(mapStateToProps, mapDispatchToProps)(NavigatorItemContainer);
export default NavigatorItem;
