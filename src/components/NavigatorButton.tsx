import styled from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';
import { BaseTheme } from '../store/store';
import { Icon } from '@mdi/react';
// interface CustomStyle {
//   height?: string;
//   width?: string;
//   margin?: string;
// }
interface LayoutProps {
  theme: BaseTheme;
  height?: string;
  width?: string;
  // style?: CustomStyle;
}

const Layout = styled.div<LayoutProps>`
  height: ${({ theme, height }) => (height ? height : theme.navigatorButtonWidth + 'px')};
  width: ${({ theme, width }) => (width ? width : theme.navigatorButtonWidth + 'px')};
  background-color: ${({ theme }) => theme.themeColorDark};
  border: 1px solid black;
  box-sizing: border-box;
`;

// const Layout = styled.div(({ theme, height, width }: LayoutProps) => {
//   return Object.assign({
//     height: height ? height : theme.navigatorButtonWidth + 'px',
//     width: width ? width : theme.navigatorButtonWidth + 'px',
//     backgroundColor: 'red',
//     border: '1px solid black',
//     boxSizing: 'border-box',
//   });
// });

const PlaceHolder = styled.div<{ theme: BaseTheme }>`
  height: ${({ theme }) => theme.navigatorButtonWidth + 'px'};
  width: ${({ theme }) => theme.navigatorButtonWidth + 'px'};
`;
interface NavigatorButtonContainerProps {
  placeHolder?: boolean;
  // styles?: CustomStyle;
  clickEvent?: () => void;
  width?: string;
  height?: string;
  path: string;
  size?: string;
}
function NavigatorButtonContainer({
  clickEvent,
  width,
  height,
  path,
  placeHolder = false,
  size,
}: NavigatorButtonContainerProps) {
  if (placeHolder) {
    return <PlaceHolder></PlaceHolder>;
  } else {
    return (
      <Layout width={size} height={size} onClick={() => clickEvent && clickEvent()}>
        <Icon path={path} size={size}></Icon>
      </Layout>
    );
  }
}

const NavigatorButton = connect(null, null)(NavigatorButtonContainer);

export default NavigatorButton;
