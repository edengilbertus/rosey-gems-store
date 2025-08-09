import React from 'react';
import ProductCard from './ProductCard';

const bestsellersData = [
  {
    id: 1,
    name: 'Classic Diamond Solitaire',
    price: 'UGX 14,000',
    type: 'Ring',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: '#1 Bestseller',
    salesCount: 127,
    rating: 4.9,
    description: 'Timeless solitaire ring with brilliant-cut sparkle.'
  },
  {
    id: 2,
    name: 'Pearl Strand Necklace',
    price: 'UGX 5,925,000',
    type: 'Necklace',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: 'Customer Favorite',
    salesCount: 89,
    rating: 4.8,
    description: 'Lustrous pearl-look strand for classic elegance.'
  },
  {
    id: 3,
    name: 'Diamond Stud Earrings',
    price: 'UGX 4,440,000',
    type: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: 'Top Rated',
    salesCount: 156,
    rating: 4.9,
    description: 'Everyday sparkle with classic diamond-look studs.'
  },
  {
    id: 4,
    name: 'Gold Chain Bracelet',
    price: 'UGX 3,330,000',
    type: 'Bracelet',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: 'Most Popular',
    salesCount: 203,
    rating: 4.7,
    description: 'Bold gold-tone chain bracelet with luxe finish.'
  },
  {
    id: 5,
    name: 'Eternity Band Ring',
    price: 'UGX 10,000',
    type: 'Ring',
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: 'Trending',
    salesCount: 74,
    rating: 4.8,
    description: 'Pavé-style eternity band with continuous shine.'
  },
  {
    id: 6,
    name: 'Vintage Cameo Brooch',
    price: 'UGX 2,220,000',
    type: 'Brooch',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: 'Classic Choice',
    salesCount: 45,
    rating: 4.6,
    description: 'Vintage-inspired cameo brooch with ornate trim.'
  }
];

const Bestsellers = ({ addToCart }) => {
  return (
    <div style={{
      background: '#F9F5F0',
      minHeight: '100vh',
      paddingTop: '40px',
      paddingBottom: '40px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 clamp(16px, 4vw, 40px)'
      }}>
        {/* Header Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '48px'
        }}>
          <h1 style={{
            color: '#0F0F0F',
            fontSize: 'clamp(28px, 5vw, 40px)',
            fontWeight: 700,
            marginBottom: '16px',
            letterSpacing: '-0.5px'
          }}>
            Bestsellers
          </h1>
          <p style={{
            color: 'rgba(15, 15, 15, 0.7)',
            fontSize: 'clamp(14px, 2.5vw, 18px)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Discover our most loved jewelry pieces, chosen by thousands of satisfied customers for their exceptional quality and timeless beauty.
          </p>
        </div>

        {/* Stats Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          {[
            { number: '10,000+', label: 'Happy Customers' },
            { number: '4.8★', label: 'Average Rating' },
            { number: '500+', label: 'Items Sold Monthly' },
            { number: '99%', label: 'Customer Satisfaction' }
          ].map((stat, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(12px)',
                borderRadius: '12px',
                border: '1px solid rgba(191, 164, 111, 0.2)',
                padding: '24px',
                textAlign: 'center'
              }}
            >
              <div style={{
                color: '#BFA46F',
                fontSize: 'clamp(24px, 4vw, 32px)',
                fontWeight: 700,
                marginBottom: '8px'
              }}>
                {stat.number}
              </div>
              <div style={{
                color: 'rgba(15, 15, 15, 0.7)',
                fontSize: '14px',
                fontWeight: 500
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Top Seller Highlight */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(191, 164, 111, 0.1) 0%, rgba(255, 255, 255, 0.7) 100%)',
          backdropFilter: 'blur(12px)',
          borderRadius: '16px',
          border: '1px solid rgba(191, 164, 111, 0.3)',
          padding: '32px',
          marginBottom: '48px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#BFA46F',
            color: '#FFFFFF',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 600
          }}>
            #1 BESTSELLER
          </div>
          <div style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <div style={{
              flex: '0 0 200px',
              height: '200px',
              borderRadius: '12px',
              overflow: 'hidden'
            }}>
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Classic Diamond Solitaire"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div style={{
              flex: '1',
              minWidth: '300px'
            }}>
              <h2 style={{
                color: '#0F0F0F',
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                marginBottom: '12px'
              }}>
                Classic Diamond Solitaire
              </h2>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '16px',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <span style={{ fontSize: '18px' }}>⭐⭐⭐⭐⭐</span>
                  <span style={{
                    color: 'rgba(15, 15, 15, 0.7)',
                    fontSize: '14px'
                  }}>
                    4.9 (127 reviews)
                  </span>
                </div>
                <div style={{
                  color: '#BFA46F',
                  fontSize: '20px',
                  fontWeight: 700
                }}>
                  UGX 9,250,000
                </div>
              </div>
              <p style={{
                color: 'rgba(15, 15, 15, 0.7)',
                fontSize: '16px',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                Our most beloved piece - a timeless diamond solitaire that has captured hearts for decades. Featuring a brilliant cut diamond in an elegant setting.
              </p>
              <div style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap'
              }}>
                <button 
                  onClick={() => addToCart && addToCart(bestsellersData[0])}
                  style={{
                    background: '#BFA46F',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px 24px',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}>
                  Add to Cart
                </button>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-product-modal', { detail: { product: bestsellersData[0] } }))}
                  style={{
                  background: 'transparent',
                  border: '1px solid #BFA46F',
                  borderRadius: '8px',
                  padding: '12px 24px',
                  color: '#BFA46F',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          {['All Bestsellers', 'Rings', 'Necklaces', 'Earrings', 'Bracelets'].map((filter, index) => (
            <button
              key={filter}
              style={{
                background: index === 0 ? '#BFA46F' : 'rgba(255, 255, 255, 0.7)',
                border: '1px solid rgba(191, 164, 111, 0.3)',
                borderRadius: '25px',
                padding: '8px 20px',
                color: index === 0 ? '#FFFFFF' : '#0F0F0F',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.3s ease'
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(20px, 4vw, 32px)'
        }}>
          {bestsellersData.map(product => (
            <div key={product.id} style={{ position: 'relative' }}>
              <ProductCard product={product} addToCart={addToCart} />
              {/* Sales Badge */}
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                background: 'rgba(0, 0, 0, 0.7)',
                color: '#FFFFFF',
                padding: '4px 8px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: 600,
                zIndex: 10
              }}>
                {product.salesCount} sold
              </div>
            </div>
          ))}
        </div>

        {/* Customer Reviews Section */}
        <div style={{
          marginTop: '64px',
          textAlign: 'center'
        }}>
          <h3 style={{
            color: '#0F0F0F',
            fontSize: 'clamp(24px, 4vw, 32px)',
            fontWeight: 700,
            marginBottom: '32px'
          }}>
            What Our Customers Say
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {[
              {
                name: 'Sarah M.',
                review: 'Absolutely stunning quality! My engagement ring exceeded all expectations.',
                rating: 5,
                product: 'Diamond Solitaire'
              },
              {
                name: 'Michael K.',
                review: 'Perfect gift for my wife. The craftsmanship is incredible.',
                rating: 5,
                product: 'Pearl Necklace'
              },
              {
                name: 'Emma L.',
                review: 'These earrings are my go-to for every special occasion.',
                rating: 5,
                product: 'Diamond Studs'
              }
            ].map((review, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '12px',
                  border: '1px solid rgba(191, 164, 111, 0.2)',
                  padding: '24px',
                  textAlign: 'left'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '12px'
                }}>
                  <span style={{ fontSize: '16px' }}>⭐⭐⭐⭐⭐</span>
                  <span style={{
                    color: 'rgba(15, 15, 15, 0.7)',
                    fontSize: '14px'
                  }}>
                    {review.rating}.0
                  </span>
                </div>
                <p style={{
                  color: 'rgba(15, 15, 15, 0.8)',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  marginBottom: '16px',
                  fontStyle: 'italic'
                }}>
                  "{review.review}"
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    color: '#0F0F0F',
                    fontSize: '14px',
                    fontWeight: 600
                  }}>
                    {review.name}
                  </span>
                  <span style={{
                    color: 'rgba(15, 15, 15, 0.6)',
                    fontSize: '12px'
                  }}>
                    {review.product}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;