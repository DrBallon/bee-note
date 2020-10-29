import React from 'react';
import styled from 'styled-components';
// import { BaseTheme } from './theme';
export const FullAbs = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const FullFixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: green;
  display: flex;
  z-index: 100;
`;

export const Inner = styled.div`
  min-width: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
interface PlaceHolderProps {
  width: number;
  height: number;
}
export function PlaceHolder(props: PlaceHolderProps) {
  const { width, height } = props;
  const Ret = styled.div<PlaceHolderProps>`
    width: ${(props) => props.width + 'px'};
    height: ${(props) => props.height + 'px'};
  `;
  return <Ret width={width} height={height}></Ret>;
}
interface DividerProps {}

const DividerStyle = styled.div`
  height: 100%;
  width: 1px;
  background-color: ${({ theme }) => theme.borderColor};
  /* border: 3px solid #2d2d2d; */
  border: 1px solid ${({ theme }) => theme.borderColor};
`;
export function Divider(props: DividerProps) {
  return <DividerStyle></DividerStyle>;
}

export const Space = styled.div`
  flex: 1;
`;
export const Label = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  padding-left: 10px;
`;
export const LabelInner = styled.div`
  min-width: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Background = ({ clickEvent }: { clickEvent: () => void }) => {
  return <FullFixed onClick={() => clickEvent}></FullFixed>;
};
export const scrollBar = `
&::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 20px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
&::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  /* box-shadow: inset 0 0 5px $; */
  background: #535353;
}
&::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  /* box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ededed; */
}
`;
