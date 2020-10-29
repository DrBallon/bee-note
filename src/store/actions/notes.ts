import { Payload_Note } from '../store';
import * as Types from '../constants/note';
// import * as Types from '@/store/constants/note';
// import * as Types from '@/store/';
export const addNote = (payload: Payload_Note.Add) => ({
  type: Types.ADD_NOTE,
  payload,
});
export const getNotes = () => ({
  type: Types.GET_NOTES,
});
export const editNote = (payload: Payload_Note.Edit) => ({
  type: Types.EDIT_NOTE,
  payload: { oldTitle: payload.oldTitle, newTitle: payload.newTitle, newContent: payload.newContent },
});
export const delNote = (payload: Payload_Note.Del) => ({
  type: Types.DEL_NOTE,
  payload: { title: payload.title },
});

export const toggleNote = (payload: Payload_Note.Fold) => ({
  type: Types.TOGGLE_NOTE,
  payload: { title: payload.title },
});
export const switchCurNote = (payload: Payload_Note.Switch) => ({
  type: Types.SWITCH_CURRENT_NOTE,
  payload: { title: payload.title },
});
export const changeFilter = (payload: Payload_Note.Filter) => ({
  type: Types.CHANGE_FILTER,
  payload: { filter: payload.filter },
});

// interface A {
//   title: string;
// }
// interface B {
//   num: number;
// }

// type C = A & B;

// function test(par:C){
//   const a = par.num
// }
