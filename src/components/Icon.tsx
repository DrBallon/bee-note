import React from 'react';
import { Icon as MdiIcon } from '@mdi/react';

interface IconProps {
  path: string;
}
const Icon = ({ path }: IconProps) => {
  return <MdiIcon path={path}></MdiIcon>;
};
export default Icon;
