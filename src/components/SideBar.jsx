import React from 'react';
import Wishlist from './Wishlist';
import RingSizer from './RingSizer';
import NecklaceLength from './NecklaceLength';
import './SideBar.css';

const SideBar = () => {
  return (
    <div style={{ flexGrow: 1, flexBasis: '432px', gap: '32px', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
      <Wishlist />
      <RingSizer />
      <NecklaceLength />
    </div>
  );
};

export default SideBar;
