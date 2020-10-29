import { ThemeAction, BaseTheme } from '../store';
import { GET_THEME } from '../constants/theme';

const baseTheme: BaseTheme = {
  backgroundColor: 'blue',
  borderColor: 'black',
  themeColorDark: '#3D3D3D',
  themeColorLight: '#5d5d5d',
  //font-size
  navFontSize: '10px',
  //size
  navigatorButtonWidth: 24,
  navigatorItemHeight: '30px',
  navWidth: '200px',
  editorPaneWidth: '500px',
  sidebarWidth: '150px',
  StorageNavigatorTopHeight: '30px',
};
const theme = (state = baseTheme, action: ThemeAction) => {
  switch (action.type) {
    case GET_THEME:
    default:
      return state;
  }
};
export default theme;
