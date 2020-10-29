import { ADD_NOTE } from './constants/note';
export interface ConfigAction {
  type: string;
  payload: any;
}
export interface ThemeAction {
  type: string;
  payload: any;
}

export namespace Payload_Note {
  export interface Add {
    parent: NoteNode;
  }
  export interface Del {
    title: string;
  }
  export interface Fold {
    title: string;
  }
  export interface Switch {
    title: string;
  }
  export interface Filter {
    filter: string;
  }
  export interface Edit {
    oldTitle: string;
    newTitle: string;
    newContent: string;
  }
}
export interface NoteAction {
  type: string;
  payload: Payload_Note.Add &
    Payload_Note.Fold &
    Payload_Note.Switch &
    Payload_Note.Filter &
    Payload_Note.Edit &
    Payload_Note.Add;
}

export type BeeNoteState = Readonly<{
  theme: BaseTheme;
  noteData: NoteData;
}>;
/*
 **      note
 */
export interface NoteNode {
  title: string;
  content: string;
  sub: NoteNode[];
}
export interface NoteData {
  filter: string;
  curNoteTitle: string;
  foldTitles: string[];
  root: NoteNode;
}

/*
 **      theme
 */
export interface BaseTheme {
  backgroundColor: string;
  borderColor: string;
  sidebarWidth: string;
  navWidth: string;
  StorageNavigatorTopHeight: string;
  navigatorButtonWidth: number;
  themeColorDark: string;
  navFontSize: string;
  navigatorItemHeight: string;
  editorPaneWidth: string;
  themeColorLight: string;
}
