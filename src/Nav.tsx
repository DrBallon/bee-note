import React from 'react';
import styled from 'styled-components';
import NavigatorItem from './components/NavigatorItem';
// import StorageNavigator from './StorageNavigator';
import { BaseTheme, BeeNoteState, NoteNode } from './store/store';
import { connect } from 'react-redux';
import { getFoldTitles } from './store/selectors/note';
// import NavigatorButton from './components/NavigatorButton';
// import { mdiExport, mdiImport } from '@mdi/js';
import NavTop from './NavTop';
const NavLayout = styled.div<{ theme: BaseTheme }>`
  min-width: ${({ theme }) => theme.navWidth};
  background-color: ${({ theme }) => theme.themeColorDark};
  color: white;
  font-size: ${({ theme }) => theme.navFontSize};
`;
// const NavTop = styled.div<{ theme: BaseTheme }>`
//   height: 50px;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   border-bottom: 2px solid ${({ theme }) => theme.themeColorDark};
// `;
interface NavContainerProps {
  storage?: NoteNode;
}
const NavContainer = ({ storage }: NavContainerProps) => {
  const emptyStorage = !storage || storage.title === '';
  console.log(emptyStorage);
  return (
    <NavLayout>
      {/* 侧边栏上部 */}
      {/* <NavigatorItem level={0}></NavigatorItem> */}
      {/* <NavTop>
        <NavigatorButton path={mdiImport} size='2rem'></NavigatorButton>
        <NavigatorButton path={mdiExport} size='2rem'></NavigatorButton>
      </NavTop> */}
      <NavTop></NavTop>
      {emptyStorage ? <button>XXXXXXXXXXXXXXXX</button> : <NavigatorItem level={0} data={storage}></NavigatorItem>}
    </NavLayout>
  );
};
const mapStateToProps = (state: BeeNoteState) => ({
  storage: state.noteData.root,
});
const Nav = connect(mapStateToProps, null)(NavContainer);

export default Nav;
