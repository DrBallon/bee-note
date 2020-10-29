import { createSelector } from 'reselect';
// import { store } from '../reducers/index';
import { BeeNoteState, NoteNode } from '../store';
import { node2Markdown } from '../../lib/utils';
const foldTitles = (state: BeeNoteState) => state.noteData.foldTitles;
const curNoteTitle = (state: BeeNoteState) => state.noteData.curNoteTitle;
const root = (state: BeeNoteState) => state.noteData.root;
const filter = (state: BeeNoteState) => state.noteData.filter;
/*
export const getFoldTitles = createSelector(
    //监听对象
    [foldTitles], 
    //对应监听对象
    (titles) => 
        titles
    
    );

*/
function findNoteByTitle(root: NoteNode, title: string) {
  let ret: NoteNode | null = null;
  root.sub.forEach((node) => {
    if (node.title === title) ret = node;
    if (ret) return ret;
    ret = findNoteByTitle(node, title);
  });
  return ret;
}
function filteredNodes(node: NoteNode, filter: string) {
  let ret: NoteNode[] = [];
  if (node.title.includes(filter) || node.content.includes(filter)) ret.push(node);
  if (node.sub.length > 0) {
    node.sub.forEach((subNode) => {
      ret = [...ret, ...filteredNodes(subNode, filter)];
    });
  }
  return ret;
}
export const getFoldTitles = createSelector([foldTitles], (titles) => titles);
export const getEditPaneList = createSelector([curNoteTitle, root, filter], (title, root2, filter2) => {
  if (filter2 !== '') {
    return filteredNodes(root2, filter2);
  }
  if (title === root2.title) return root2;
  if (root2.sub.length === 0) return { title: '', content: '', sub: [] };
  const ret2 = findNoteByTitle(root2, title);
  if (ret2) return ret2;
  return { title: '', content: '', sub: [] };
});
export const getMarkdown = createSelector([curNoteTitle, root, filter], (title, root2, filter2) => {
  if (title === '') return '';
  let ret2: NoteNode | null = null;
  if (title === root2.title) ret2 = root2;
  else ret2 = findNoteByTitle(root2, title);
  return ret2 ? node2Markdown(ret2, 1) : '';
});
