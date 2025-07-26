import React from 'react';

const Cart = ({ cartItems, updateQuantity, removeFromCart, isOpen, onClose }) => {
  if (!isOpen) return null;

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const formatPrice = (price) => {
    return `UGX ${price.toLocaleString()}`;
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
          backdropFilter: 'blur(4px)'
        }}
      />
      
      {/* Cart Sidebar */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: 'min(400px, 90vw)',
        height: '100vh',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)',
        borderLeft: '1px solid rgba(191, 164, 111, 0.2)',
        zIndex: 1001,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.1)'
      }}>
        {/* Header */}
        <div style={{
          padding: '24px',
          borderBottom: '1px solid rgba(191, 164, 111, 0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2 style={{
            color: '#0F0F0F',
            fontSize: '20px',
            fontWeight: 700,
            margin: 0
          }}>
            Shopping Cart ({cartItems.length})
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: '#0F0F0F',
              padding: '4px',
              borderRadius: '4px'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(191, 164, 111, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            ×
          </button>
        </div>

        {/* Cart Items */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '0 24px'
        }}>
          {cartItems.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: 'rgba(15, 15, 15, 0.6)'
            }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '16px'
              }}>
                🛍️
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 600,
                marginBottom: '8px',
                color: '#0F0F0F'
              }}>
                Your cart is empty
              </h3>
              <p style={{
                fontSize: '14px',
                lineHeight: '1.5'
              }}>
                Browse our collections and add some beautiful jewelry to your cart.
              </p>
            </div>
          ) : (
            <div style={{ paddingTop: '24px' }}>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    padding: '16px 0',
                    borderBottom: '1px solid rgba(191, 164, 111, 0.1)'
                  }}
                >
                  {/* Product Image */}
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    border: '1px solid rgba(191, 164, 111, 0.2)'
                  }}>
                    <img
                      src={item.image || 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400'}
                      alt={item.name || item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>

                  {/* Product Details */}
                  <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}>
                    <h4 style={{
                      color: '#0F0F0F',
                      fontSize: '14px',
                      fontWeight: 600,
                      margin: 0,
                      lineHeight: '1.3'
                    }}>
                      {item.name || item.title}
                    </h4>
                    
                    <div style={{
                      color: '#BFA46F',
                      fontSize: '16px',
                      fontWeight: 700
                    }}>
                      {item.price}
                    </div>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: 'auto'
                    }}>
                      {/* Quantity Controls */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          style={{
                            width: '28px',
                            height: '28px',
                            border: '1px solid rgba(191, 164, 111, 0.3)',
                            borderRadius: '4px',
                            background: 'rgba(255, 255, 255, 0.8)',
                            color: '#0F0F0F',
                            fontSize: '14px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          -
                        </button>
                        <span style={{
                          minWidth: '20px',
                          textAlign: 'center',
                          fontSize: '14px',
                          fontWeight: 600,
                          color: '#0F0F0F'
                        }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{
                            width: '28px',
                            height: '28px',
                            border: '1px solid rgba(191, 164, 111, 0.3)',
                            borderRadius: '4px',
                            background: 'rgba(255, 255, 255, 0.8)',
                            color: '#0F0F0F',
                            fontSize: '14px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          +
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'rgba(15, 15, 15, 0.5)',
                          fontSize: '18px',
                          cursor: 'pointer',
                          padding: '4px',
                          borderRadius: '4px'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#EF4444';
                          e.target.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = 'rgba(15, 15, 15, 0.5)';
                          e.target.style.backgroundColor = 'transparent';
                        }}
                        title="Remove from cart"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Total and Checkout */}
        {cartItems.length > 0 && (
          <div style={{
            padding: '24px',
            borderTop: '1px solid rgba(191, 164, 111, 0.2)',
            background: 'rgba(255, 255, 255, 0.9)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px'
            }}>
              <span style={{
                color: '#0F0F0F',
                fontSize: '16px',
                fontWeight: 600
              }}>
                Total:
              </span>
              <span style={{
                color: '#BFA46F',
                fontSize: '20px',
                fontWeight: 700
              }}>
                {formatPrice(getCartTotal())}
              </span>
            </div>
            
            <button
              onClick={() => {
                alert('Checkout functionality coming soon!');
              }}
              style={{
                width: '100%',
                background: '#BFA46F',
                border: 'none',
                borderRadius: '8px',
                padding: '16px',
                color: '#FFFFFF',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginBottom: '12px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#A68B5B';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#BFA46F';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Proceed to Checkout
            </button>
            
            <button
              onClick={onClose}
              style={{
                width: '100%',
                background: 'transparent',
                border: '1px solid rgba(191, 164, 111, 0.3)',
                borderRadius: '8px',
                padding: '12px',
                color: '#0F0F0F',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(191, 164, 111, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;