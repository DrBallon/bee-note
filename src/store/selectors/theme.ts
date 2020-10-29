import { createSelector } from 'reselect';
// import { store } from '../reducers/index';
import { BeeNoteState } from '../store';
const theme = (state: BeeNoteState) => state.theme;

export const getTheme = createSelector([theme], () => theme);
