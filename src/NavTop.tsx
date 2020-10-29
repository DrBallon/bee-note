import React from 'react';
import styled from 'styled-components';
// import StorageNavigator from './StorageNavigator';
import { BaseTheme, BeeNoteState, NoteNode } from './store/store';
import { connect } from 'react-redux';
// const readline = require('readline');

const NavTopLayout = styled.div<{ theme: BaseTheme }>`
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.themeColorDark};
`;
interface NavTopContainerProps {
  root?: NoteNode;
}
// const FileLabel = styled.label`
//   display: flex;
//   font-size: 20px;
//   justify-content: space-around;
//   align-items: center;
//   width: 100px;
//   height: 50px;
// `;

function downloadString(content: string, fileName: string, type = 'text/plain') {
  const anchor = document.createElement('a');
  anchor.style.display = 'none';
  document.body.appendChild(anchor);
  anchor.href = window.URL.createObjectURL(new Blob([content], { type }));
  anchor.setAttribute('download', fileName);
  anchor.click();
  window.URL.revokeObjectURL(anchor.href);
  document.body.removeChild(anchor);
}
function getContent(root: NoteNode, level: number) {
  let content = '';
  content += `${'#'.repeat(level)} ${root.title}\n`;
  if (root.content !== '') content += `${root.content}\n`;
  root.sub.forEach((subNode) => {
    content += getContent(subNode, level + 1);
  });
  return content;
}
// function read(file: File) {
//   const reader = new FileReader();
//   // 用readAsText读取TXT文件内容
//   reader.readAsText(file);
//   reader.onload = function (e) {
//     console.log(e?.target?.result);
//   };
// }

const NavTopContainer = ({ root }: NavTopContainerProps) => {
  //   let path = '';
  //   const [filePath, setFilePath] = useState('');
  //   useCallback(() => {
  //     console.log(filePath);
  //   }, [filePath]);
  return (
    <NavTopLayout>
      {/* <FileLabel htmlFor='open'>打开</FileLabel>
      <input
        id='open'
        type='file'
        style={{ display: 'none' }}
        onChange={(e) => {
          console.log(e.target.files && e.target.files[0]);
          const file = e.target.files && e.target.files[0];
          if (file) read(file);
          else alert('未读取到文件');
        }}></input> */}
      <input
        id='save'
        type='button'
        value='保存'
        onClick={() => {
          const content = root ? getContent(root, 1) : '';
          downloadString(content, 'test.md', 'text/markdown');
          console.log(content);
        }}></input>
    </NavTopLayout>
  );
};

const mapStateToProps = (state: BeeNoteState) => ({
  root: state.noteData.root,
});
const NavTop = connect(mapStateToProps, null)(NavTopContainer);

export default NavTop;
