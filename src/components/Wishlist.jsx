import React from 'react';
import './Wishlist.css';
const Wishlist = ({ wishlistItems = [], removeFromWishlist, addToCart }) => {
  return (
    <div className="inner-border" style={{background: 'rgba(255, 255, 255, 0.70)', boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)', backdropFilter: 'blur(12px)', '--border-style': 'solid', '--border-color': 'rgba(191, 164, 111, 0.10)', '--border-width': '1px', '--border-radius': '12px', padding: '25px', display: 'flex', gap: '16px', flexDirection: 'column'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <div className="clips-content image" style={{backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9ce31d7b-22f1616d-feb3-4879-9a28-02c19d74a61a.svg')", '--svg-fill-colors': 'rgb(191, 164, 111)', width: '20px', height: '20px', backgroundSize: 'cover'}}></div>
          <div style={{color: '#0F0F0F', fontSize: '20px', fontWeight: 600}}>Wishlist</div>
        </div>
        <div style={{color: 'rgba(15, 15, 15, 0.70)'}}>{wishlistItems.length} item{wishlistItems.length === 1 ? '' : 's'}</div>
      </div>

      {wishlistItems.length === 0 ? (
        <div style={{textAlign: 'center', color: 'rgba(15, 15, 15, 0.6)', padding: '16px'}}>No items yet. Tap the heart on any product.</div>
      ) : (
        <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
          {wishlistItems.map((product) => (
            <div key={product.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
                <div className="inner-border image" style={{'--border-style': 'solid', '--border-color': 'rgba(191, 164, 111, 0.20)', '--border-width': '1px', '--border-radius': '6px', backgroundImage: `url('${product.image}')`, backgroundSize: 'cover', width: '56px', height: '56px'}}></div>
                <div>
                  <div style={{color: '#0F0F0F', fontWeight: 500}}>{product.name}</div>
                  <div style={{color: '#BFA46F', fontWeight: 600, fontSize: '14px'}}>{product.price}</div>
                </div>
              </div>
              <div style={{display: 'flex', gap: '8px'}}>
                <button onClick={() => addToCart && addToCart(product)} style={{background: '#BFA46F', color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 10px', cursor: 'pointer'}}>Add</button>
                <button onClick={() => removeFromWishlist && removeFromWishlist(product.id)} style={{background: 'transparent', color: '#0F0F0F', border: '1px solid rgba(191,164,111,0.3)', borderRadius: '6px', padding: '6px 10px', cursor: 'pointer'}}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
