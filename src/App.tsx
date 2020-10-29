import React from 'react';
// import TwoPanels from './TwoPanels';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Main from './Main';
import { BaseTheme, BeeNoteState } from './store/store';
import { connect } from 'react-redux';
import { scrollBar } from './styles/Layouts';
require('codemirror/lib/codemirror.css');
const GlobalStyle = createGlobalStyle`
Body {
  font-family:"Times New Roman,Georgia,Serif;";
  .CodeMirror{
    font-family:"Times New Roman,Georgia,Serif;";
    font-size:20px;
  }
  .CodeMirror-vscrollbar{
    ${scrollBar}
  }
}
`;
interface AppProps {
  theme?: BaseTheme;
}
function AppContainer({ theme }: AppProps) {
  return (
    //将theme注入内部所有styled-components
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <Main></Main>
      {/* <TwoPanels></TwoPanels> */}
    </ThemeProvider>
  );
}
const App = connect(
  (state: BeeNoteState) => ({
    theme: state.theme,
  }),
  null
)(AppContainer);
export default App;
