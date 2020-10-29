import { NoteAction, NoteData, Payload_Note, NoteNode } from '../store';
import * as types from '../constants/note';
export const initData: NoteData = {
  filter: '',
  curNoteTitle: '',
  // foldTitles: ['js'],
  foldTitles: [],
  root: {
    title: '测试',
    content: '',
    sub: [],
    // sub: [
    //   {
    //     title: 'js',
    //     content: '',
    //     sub: [
    //       {
    //         title: 'react基础',
    //         content: 'react基础react基础react基础react基础react基础',
    //         sub: [],
    //       },
    //       {
    //         title: 'react进阶',
    //         content: 'react进阶react进阶react进阶react进阶react进阶',
    //         sub: [],
    //       },
    //       {
    //         title: 'react hook',
    //         content: 'react hookreact hookreact hookreact hook',
    //         sub: [],
    //       },
    //     ],
    //   },
    //   {
    //     title: 'java',
    //     content: '',
    //     sub: [
    //       {
    //         title: 'java基础',
    //         content: 'java基础java基础java基础java基础java基础',
    //         sub: [],
    //       },
    //       {
    //         title: 'spring',
    //         content: '',
    //         sub: [
    //           {
    //             title: 'spring基础',
    //             content: 'spring基础spring基础spring基础spring基础',
    //             sub: [],
    //           },
    //           {
    //             title: 'spring进阶',
    //             content: 'spring进阶spring进阶spring进阶spring进阶spring进阶',
    //             sub: [],
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // ],
  },
};
function toggle(state: NoteData, title: string): NoteData {
  const { filter, curNoteTitle, foldTitles, root } = state;
  if (foldTitles.includes(title)) {
    return { filter, curNoteTitle, foldTitles: foldTitles.filter((foldTitle) => foldTitle !== title), root };
  } else {
    return { filter, curNoteTitle, foldTitles: [...foldTitles, title], root };
  }
}
function switchCurrentNote(state: NoteData, title: string): NoteData {
  if (state.curNoteTitle === title) return state;
  const { filter, foldTitles, root } = state;
  return { filter, curNoteTitle: title, foldTitles, root };
}
function changeFilter(state: NoteData, filter: string) {
  if (state.filter === filter) return state;
  const { curNoteTitle, foldTitles, root } = state;
  return { filter, curNoteTitle, foldTitles, root };
}
function findNoteByTitle(root: NoteNode, title: string) {
  let ret: NoteNode | null = null;
  if (root.title === title) return root;
  root.sub.forEach((node) => {
    if (node.title === title) ret = node;
    if (ret) return ret;
    ret = findNoteByTitle(node, title);
  });
  return ret;
}
function editNote(state: NoteData, payload: Payload_Note.Edit) {
  let copy: NoteData = JSON.parse(JSON.stringify(state));
  let ret = findNoteByTitle(copy.root, payload.oldTitle);
  if (!ret) return state;
  ret.title = payload.newTitle;
  ret.content = payload.newContent;
  return copy;
}
function addNote(state: NoteData, payload: Payload_Note.Add) {
  let copy: NoteData = JSON.parse(JSON.stringify(state));
  let ret = findNoteByTitle(copy.root, payload.parent.title);
  ret?.sub.push({ title: (Math.random() * 100000).toString(), content: '', sub: [] });
  return copy;
}
function filterNote(root: NoteNode, title: string) {
  if (root.title === title) return { title: '', content: '', sub: [] };
  const { title: rootTitle, content: rootContent } = root;
  let tempNode: NoteNode = { title: rootTitle, content: rootContent, sub: [] };
  root.sub.forEach((node) => {
    if (node.title === title) return;
    tempNode.sub.push(filterNote(node, title));
  });
  return tempNode;
}
function delNote(state: NoteData, payload: Payload_Note.Del) {
  let copy: NoteData = JSON.parse(JSON.stringify(state));
  let ret = filterNote(copy.root, payload.title);

  const { curNoteTitle, filter, foldTitles } = state;

  return { curNoteTitle, filter, foldTitles, root: ret };
}
function lsSave(data: NoteData) {
  localStorage.setItem('note', JSON.stringify(data));
  return data;
}
function lsRead(): NoteData {
  const data = localStorage.getItem('note');
  return data ? JSON.parse(data) : initData;
  // return initData;
}
const noteData = (state: NoteData = initData, action: NoteAction) => {
  switch (action.type) {
    case types.DEL_NOTE:
      return lsSave(delNote(state, action.payload));
    case types.ADD_NOTE:
      return lsSave(addNote(state, action.payload));
    case types.EDIT_NOTE:
      return lsSave(editNote(state, action.payload));
    case types.CHANGE_FILTER:
      return lsSave(changeFilter(state, action.payload.filter));
    case types.SWITCH_CURRENT_NOTE:
      return lsSave(switchCurrentNote(state, action.payload.title));
    case types.TOGGLE_NOTE:
      return lsSave(toggle(state, action.payload.title));
    case types.GET_NOTES:
    default:
      // return state;
      return lsRead();
  }
};
export default noteData;
