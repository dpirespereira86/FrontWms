import { React } from 'react';
import { SidebarData } from './menuData';
import SubMenu from './SubMenu';
import P from 'prop-types';

// eslint-disable-next-line
const MenuListComposition = (props) => {
  const { open } = props;

  return (
    <>
      {SidebarData.map((item, index) => {
        return <SubMenu open={open} item={item} key={index} />;
      })}
    </>
  );
};

export default MenuListComposition;

MenuListComposition.propTypes = {
  open: P.any,
};
