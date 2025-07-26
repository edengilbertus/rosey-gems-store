import React from 'react';

const QuantitySelector = ({ quantity, onQuantityChange, min = 1, max = 99, size = 'medium' }) => {
  const buttonSize = size === 'small' ? '24px' : '32px';
  const fontSize = size === 'small' ? '12px' : '14px';

  const handleDecrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= min && value <= max) {
      onQuantityChange(value);
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      border: '1px solid rgba(191, 164, 111, 0.3)',
      borderRadius: '6px',
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '2px'
    }}>
      <button
        onClick={handleDecrease}
        disabled={quantity <= min}
        style={{
          width: buttonSize,
          height: buttonSize,
          border: 'none',
          borderRadius: '4px',
          background: quantity <= min ? 'rgba(191, 164, 111, 0.1)' : 'rgba(255, 255, 255, 0.8)',
          color: quantity <= min ? 'rgba(15, 15, 15, 0.3)' : '#0F0F0F',
          fontSize: fontSize,
          fontWeight: '600',
          cursor: quantity <= min ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          if (quantity > min) {
            e.target.style.background = 'rgba(191, 164, 111, 0.1)';
          }
        }}
        onMouseLeave={(e) => {
          if (quantity > min) {
            e.target.style.background = 'rgba(255, 255, 255, 0.8)';
          }
        }}
      >
        -
      </button>
      
      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        min={min}
        max={max}
        style={{
          width: '40px',
          height: buttonSize,
          border: 'none',
          background: 'transparent',
          textAlign: 'center',
          fontSize: fontSize,
          fontWeight: '600',
          color: '#0F0F0F',
          outline: 'none'
        }}
      />
      
      <button
        onClick={handleIncrease}
        disabled={quantity >= max}
        style={{
          width: buttonSize,
          height: buttonSize,
          border: 'none',
          borderRadius: '4px',
          background: quantity >= max ? 'rgba(191, 164, 111, 0.1)' : 'rgba(255, 255, 255, 0.8)',
          color: quantity >= max ? 'rgba(15, 15, 15, 0.3)' : '#0F0F0F',
          fontSize: fontSize,
          fontWeight: '600',
          cursor: quantity >= max ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          if (quantity < max) {
            e.target.style.background = 'rgba(191, 164, 111, 0.1)';
          }
        }}
        onMouseLeave={(e) => {
          if (quantity < max) {
            e.target.style.background = 'rgba(255, 255, 255, 0.8)';
          }
        }}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;