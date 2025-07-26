import React from 'react';
import ProductCard from './ProductCard';
import './CuratedForYou.css';

const products = [
  {
    id: 1,
    name: 'Sapphire Rose Gold Ring',
    price: 'UGX 9,231,250',
    type: 'Ring',
    image: 'https://static.motiffcontent.com/private/resource/image/1982c188556632a-2ffcda2d-691f-437e-8539-71af6b110594.jpeg',
    tag: 'New Arrival',
  },
  {
    id: 2,
    name: 'Designer Leather Handbag',
    price: 'UGX 8,880,000',
    type: 'Handbag',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: 'Luxury',
  },
  {
    id: 3,
    name: 'Gold Luxury Watch',
    price: 'UGX 18,500,000',
    type: 'Watch',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: 'Premium',
  },
  {
    id: 4,
    name: 'Evening Clutch with Crystals',
    price: 'UGX 4,625,000',
    type: 'Clutch',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: 'Glamorous',
  },
];

const CuratedForYou = ({ addToCart, setCurrentPage }) => {
  return (
    <div style={{
      marginTop: '40px', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '24px', 
      marginLeft: 'clamp(16px, 4vw, 40px)', 
      marginRight: 'clamp(16px, 4vw, 40px)'
    }}>
      {/* Header Section */}
      <div style={{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <h2 style={{
          color: '#0F0F0F', 
          fontSize: 'clamp(20px, 4vw, 24px)', 
          fontWeight: 600, 
          lineHeight: '1.3',
          margin: 0,
          letterSpacing: '-0.5px'
        }}>
          Curated For You
        </h2>
        <div style={{
          gap: '8px', 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center'
        }}>
          <button 
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(191, 164, 111, 0.30)', 
              borderRadius: '50%', 
              padding: '8px', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(191, 164, 111, 0.1)';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.7)';
              e.target.style.transform = 'scale(1)';
            }}
            title="Previous"
          >
            <div className="image" style={{
              backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9cdc6f41-6cc1ffeb-0841-4376-95fd-c20ef69129cd.svg')", 
              '--svg-fill-colors': 'rgb(191, 164, 111)', 
              width: '16px', 
              height: '16px', 
              backgroundSize: 'cover'
            }}></div>
          </button>
          <button 
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(191, 164, 111, 0.30)', 
              borderRadius: '50%', 
              padding: '8px', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(191, 164, 111, 0.1)';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.7)';
              e.target.style.transform = 'scale(1)';
            }}
            title="Next"
          >
            <div className="image" style={{
              backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9cdd7ed6-3abd8aaa-133d-48d2-bc30-9299feeb3224.svg')", 
              '--svg-fill-colors': 'rgb(191, 164, 111)', 
              width: '16px', 
              height: '16px', 
              backgroundSize: 'cover'
            }}></div>
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'clamp(16px, 3vw, 24px)',
        alignItems: 'stretch'
      }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {/* View All Button */}
      <div style={{
        textAlign: 'center',
        marginTop: '16px'
      }}>
        <button 
          onClick={() => setCurrentPage && setCurrentPage('collections')}
          style={{
            background: 'transparent',
            border: '1px solid rgba(191, 164, 111, 0.3)',
            borderRadius: '8px',
            padding: '12px 24px',
            color: '#BFA46F',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(12px)'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(191, 164, 111, 0.1)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          View All Curated Items →
        </button>
      </div>
    </div>
  );
};

export default CuratedForYou;
