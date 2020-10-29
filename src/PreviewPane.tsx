import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
// import { BeeNoteState, BaseTheme } from './store/store';
// import { getMarkdown } from './store/selectors/note';
// import { connect } from 'react-redux';
import { scrollBar } from './styles/Layouts';
import { BaseTheme } from './store/store';
const gfm = require('remark-gfm');
const markdownStyle = {
  code: {
    backgroundColor: '#3D3D3D',
  },
};
// interface PreviewPaneLayoutProps {}

//自定义渲染器
const renderers = {
  code: (lan: { language: string; value: string }) => {
    const { language, value } = lan;
    //判断language是否存在，像是```xxxx```会直接报错
    if (!language)
      return (
        <SyntaxHighlighter style={dracula} language='shell' children={value || ''} customStyle={markdownStyle.code} />
      );
    return (
      <SyntaxHighlighter style={dracula} language={language} children={value || ''} customStyle={markdownStyle.code} />
    );
  },
};

const Layout = styled.div<{ theme: BaseTheme }>`
  flex: 1;
  padding-left: 50px;
  background-color: ${({ theme }) => theme.themeColorDark};
  /* background-color: green; */
  color: white;
  overflow-y: auto;
  ${scrollBar}
`;

interface PreviewPaneContainerProps {
  content: string;
}
function PreviewPaneContainer({ content = '' }: PreviewPaneContainerProps) {
  return (
    <Layout>
      <ReactMarkdown renderers={renderers} plugins={[gfm]} children={content} />
    </Layout>
  );
}
// const mapStateToProps = (state: BeeNoteState) => ({
//   content: getMarkdown(state),
// });
// const PreviewPane = connect(mapStateToProps, null)(PreviewPaneContainer);
// export default PreviewPane;
export default PreviewPaneContainer;
