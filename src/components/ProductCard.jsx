import React, { useState } from 'react';
import './ProductCard.css';
import QuantitySelector from './QuantitySelector';

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (addToCart) {
      addToCart(product, quantity);
      // Reset quantity to 1 after adding
      setQuantity(1);
    }
  };
  return (
    <div className="list-item inner-border" style={{background: '#FFFFFF', boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05), 0px 0px 0px 0px rgba(0, 0, 0, 0.00), 0px 0px 0px 0px rgba(0, 0, 0, 0.00)', '--border-style': 'solid', '--border-color': 'rgba(191, 164, 111, 0.10)', '--border-width': '1px', '--border-radius': '8px', display: 'flex', flexDirection: 'column', alignItems: 'stretch', overflow: 'hidden', flexGrow: 1, flexBasis: '322px', gap: '4px', paddingLeft: '1px', paddingRight: '1px', paddingTop: '1px', paddingBottom: '17px'}}>
      <div className="image" style={{backgroundImage: `url('${product.image}')`, backgroundSize: 'cover', width: '320px', height: '320px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px', paddingTop: '12px', paddingBottom: '276px'}}>
        {product.tag && <div style={{background: product.tag === 'New Arrival' ? '#E8E4FF' : '#BFA46F', borderRadius: '9999px', display: 'flex', width: product.tag === 'New Arrival' ? '80px' : '58px', alignItems: 'center', marginBottom: '8px', justifyContent: 'center', paddingLeft: '8px', paddingRight: '8px', paddingTop: '4px', paddingBottom: '4px'}}>
          <div style={{color: product.tag === 'New Arrival' ? '#0F0F0F' : '#FFFFFF', fontSize: '12px', fontWeight: 600, lineHeight: '16px', width: product.tag === 'New Arrival' ? '64px' : '42px', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '16px'}}>
            {product.tag}
          </div>
        </div>}
        <div style={{gap: '8px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
          {/* Quantity Selector */}
          <div style={{ marginBottom: '8px' }}>
            <QuantitySelector 
              quantity={quantity}
              onQuantityChange={setQuantity}
              size="small"
            />
          </div>
          
          {/* Action Buttons */}
          <div style={{gap: '8px', display: 'flex', flexDirection: 'row', alignItems: 'stretch'}}>
            <button 
              onClick={handleAddToCart}
              style={{background: '#FFFFFF', boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)', borderRadius: '9999px', padding: '8px', width: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer'}}
              onMouseEnter={(e) => {
                e.target.style.background = '#BFA46F';
                e.target.querySelector('.image').style.setProperty('--svg-fill-colors', 'rgb(255, 255, 255)');
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#FFFFFF';
                e.target.querySelector('.image').style.setProperty('--svg-fill-colors', 'rgb(15, 15, 15)');
              }}
              title="Add to Cart"
            >
              <div className="image" data-resource-id="1982ccf9cdd955e-d62ffcf8-c94d-4db5-8f1a-e59a877459eb.svg" style={{backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9cdd955e-d62ffcf8-c94d-4db5-8f1a-e59a877459eb.svg')", '--svg-fill-colors': 'rgb(15, 15, 15)', width: '16px', height: '16px', backgroundSize: 'cover'}}></div>
            </button>
            <button style={{background: '#FFFFFF', boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)', borderRadius: '9999px', width: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '8px', paddingRight: '8px', paddingTop: '8.89px', paddingBottom: '8.89px', border: 'none', cursor: 'pointer'}}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(191, 164, 111, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#FFFFFF';
              }}
              title="Add to Wishlist"
            >
              <div className="image" data-resource-id="1982ccf9cde9bf6-943dd979-fb33-4760-9b3e-e80128635b24.svg" style={{backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9cde9bf6-943dd979-fb33-4760-9b3e-e80128635b24.svg')", '--svg-fill-colors': 'rgb(15, 15, 15)', width: '16px', height: '14.22px', backgroundSize: 'cover'}}></div>
            </button>
          </div>
        </div>
      </div>
      <div style={{marginTop: '12px', display: 'flex', alignItems: 'flex-start', minHeight: '24px', paddingLeft: '16px'}}>
        <div style={{color: '#0F0F0F', fontSize: '16px', fontWeight: 600, lineHeight: '24px', width: '182px', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '24px'}}>
          {product.name}
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '16px', paddingRight: '16px'}}>
        <div style={{color: '#BFA46F', fontSize: '16px', fontWeight: 700, lineHeight: '24px', width: '47px', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '24px'}}>
          {product.price}
        </div>
        <div style={{color: 'rgba(15, 15, 15, 0.70)', fontSize: '12px', lineHeight: '16px', width: '25px', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', marginTop: '4px', minHeight: '16px'}}>
          {product.type}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
