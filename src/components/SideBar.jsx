import React from 'react';
import Wishlist from './Wishlist';
import RingSizer from './RingSizer';
import NecklaceLength from './NecklaceLength';
import './SideBar.css';

const SideBar = ({ addToCart, wishlistItems, removeFromWishlist }) => {
  return (
    <div style={{ flexGrow: 1, flexBasis: '432px', gap: '32px', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
      <Wishlist wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} addToCart={addToCart} />
      <RingSizer />
      <NecklaceLength />
    </div>
  );
};

export default SideBar;
