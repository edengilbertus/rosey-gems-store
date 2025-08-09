import React, { useState } from 'react';
import QuantitySelector from './QuantitySelector';

const ProductDetailModal = ({
  product,
  isOpen,
  onClose,
  addToCart,
  toggleWishlist,
  isWishlisted
}) => {
  const [quantity, setQuantity] = useState(1);
  const images = (product.images && product.images.length ? product.images : [product.image]).filter(Boolean);
  const [activeIndex, setActiveIndex] = useState(0);
  if (!isOpen || !product) return null;

  const wishlisted = isWishlisted && isWishlisted(product.id);

  const handleAdd = () => {
    addToCart && addToCart(product, quantity);
    onClose && onClose();
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 3000, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="independent-inner-border" style={{ '--border-style': 'solid', '--border-color': 'rgba(191,164,111,0.25)', '--border-width': '1px', background: '#fff', borderRadius: 12, width: 'min(94vw, 960px)', maxHeight: '90vh', overflow: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: 16, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ fontWeight: 700, fontSize: 18 }}>{product.name || product.title}</div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 18 }}>✕</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, padding: 16 }}>
          <div style={{ display: 'grid', gap: 8 }}>
            <div style={{ borderRadius: 12, overflow: 'hidden', background: '#f5f5f5', aspectRatio: '1.2/1' }}>
              <img src={images[activeIndex]} alt={product.name || product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {images.length > 1 && (
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(images.length, 5)}, 1fr)`, gap: 8 }}>
                {images.map((src, idx) => (
                  <button key={idx} onClick={() => setActiveIndex(idx)} style={{ padding: 0, border: idx === activeIndex ? '2px solid #BFA46F' : '1px solid rgba(0,0,0,0.1)', borderRadius: 8, overflow: 'hidden', cursor: 'pointer', background: 'transparent' }}>
                    <img src={src} alt={`thumb-${idx}`} style={{ width: '100%', height: 64, objectFit: 'cover', display: 'block' }} />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div style={{ display: 'grid', gap: 12, alignContent: 'start' }}>
            <div style={{ color: '#BFA46F', fontWeight: 700, fontSize: 20 }}>{product.price}</div>
            <div style={{ color: 'rgba(15,15,15,0.8)' }}>{product.description || 'Beautiful piece crafted to elevate your style.'}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 8 }}>
              <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />
              <button onClick={() => toggleWishlist && toggleWishlist(product)} title={wishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'} style={{ background: wishlisted ? 'rgba(191,164,111,0.1)' : '#fff', border: '1px solid rgba(191,164,111,0.4)', borderRadius: 9999, padding: '8px 12px', cursor: 'pointer' }}>
                {wishlisted ? '♥ In Wishlist' : '♡ Wishlist'}
              </button>
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
              <button onClick={handleAdd} style={{ background: '#BFA46F', color: '#fff', border: 'none', padding: '12px 16px', borderRadius: 8, cursor: 'pointer', fontWeight: 600 }}>Add to Cart</button>
              <button onClick={onClose} style={{ background: 'transparent', border: '1px solid rgba(0,0,0,0.15)', padding: '12px 16px', borderRadius: 8, cursor: 'pointer' }}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
