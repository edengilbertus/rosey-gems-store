import React from 'react';
import ProductCard from './ProductCard';

const newArrivalsData = [
  {
    id: 1,
    name: 'Aurora Diamond Ring',
    price: 'UGX 12,000',
    type: 'Ring',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: 'Just Arrived',
    arrivalDate: '2024-01-15',
    description: 'Delicate band with shimmering diamond-look center stone.'
  },
  {
    id: 2,
    name: 'Moonstone Pendant Necklace',
    price: 'UGX 60,000',
    type: 'Necklace',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: 'New',
    arrivalDate: '2024-01-10',
    description: 'Premium necklace with shimmering moonstone look.'
  },
  {
    id: 3,
    name: 'Ruby Chandelier Earrings',
    price: 'UGX 40,000',
    type: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: 'Limited Edition',
    arrivalDate: '2024-01-08',
    description: 'Premium earrings with ruby-red sparkle.'
  },
  {
    id: 4,
    name: 'Platinum Chain Bracelet',
    price: 'UGX 75,000',
    type: 'Bracelet',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: 'Trending',
    arrivalDate: '2024-01-05',
    description: 'Premium bracelet with a sleek chain design.'
  },
  {
    id: 5,
    name: 'Opal Cluster Ring',
    price: 'UGX 10,000',
    type: 'Ring',
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: 'Unique',
    arrivalDate: '2024-01-03',
    description: 'Iridescent opal-style stones clustered on a slim band.'
  },
  {
    id: 6,
    name: 'Aquamarine Stud Earrings',
    price: 'UGX 35,000',
    type: 'Earrings',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: 'Fresh',
    arrivalDate: '2024-01-01',
    description: 'Premium earrings with aquamarine tone.'
  },
  {
    id: 401,
    name: 'Leaf Stud Earrings',
    price: 'UGX 6,000',
    type: 'Earrings',
    image: `${process.env.PUBLIC_URL}/assets/earrings/leaf-stud-1.jpg`,
    tag: 'New',
    arrivalDate: '2025-08-09',
    description: 'Leaf-inspired statement studs in multiple finishes.'
  }
];

const NewArrivals = ({ addToCart }) => {
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
            New Arrivals
          </h1>
          <p style={{
            color: 'rgba(15, 15, 15, 0.7)',
            fontSize: 'clamp(14px, 2.5vw, 18px)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Be the first to discover our latest jewelry pieces, fresh from our master craftsmen and ready to become your next treasure.
          </p>
        </div>

        {/* Featured New Arrival */}
        {(() => { const featured = newArrivalsData[0]; return (
        <div style={{
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(12px)',
          borderRadius: '16px',
          border: '1px solid rgba(191, 164, 111, 0.2)',
          padding: '32px',
          marginBottom: '48px',
          display: 'flex',
          gap: '32px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div style={{
            flex: '1',
            minWidth: '300px'
          }}>
            <div style={{
              background: '#BFA46F',
              color: '#FFFFFF',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 600,
              display: 'inline-block',
              marginBottom: '16px'
            }}>
              FEATURED NEW ARRIVAL
            </div>
            <h2 style={{
              color: '#0F0F0F',
              fontSize: 'clamp(24px, 4vw, 32px)',
              fontWeight: 700,
              marginBottom: '12px'
            }}>
              {featured.name}
            </h2>
            <p style={{
              color: 'rgba(15, 15, 15, 0.7)',
              fontSize: '16px',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              {featured.description || 'Premium new arrival piece.'}
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '24px'
            }}>
              <span style={{
                color: '#BFA46F',
                fontSize: '24px',
                fontWeight: 700
              }}>
                {featured.price}
              </span>
              <span style={{
                color: 'rgba(15, 15, 15, 0.5)',
                fontSize: '14px'
              }}>
                Arrived {new Date(featured.arrivalDate || '2024-01-15').toLocaleDateString()}
              </span>
            </div>
            <button style={{
              background: '#BFA46F',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 24px',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#A68B5B';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#BFA46F';
              e.target.style.transform = 'translateY(0)';
            }}
            >
              View Details
            </button>
          </div>
          <div style={{
            flex: '0 0 300px',
            height: '300px',
            borderRadius: '12px',
            overflow: 'hidden'
          }}>
            <img
              src={featured.image}
              alt={featured.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
        ); })()}

        {/* Sort Options */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '32px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <h3 style={{
            color: '#0F0F0F',
            fontSize: '20px',
            fontWeight: 600,
            margin: 0
          }}>
            Latest Arrivals
          </h3>
          <select style={{
            background: 'rgba(255, 255, 255, 0.7)',
            border: '1px solid rgba(191, 164, 111, 0.3)',
            borderRadius: '8px',
            padding: '8px 16px',
            color: '#0F0F0F',
            fontSize: '14px',
            backdropFilter: 'blur(12px)',
            cursor: 'pointer'
          }}>
            <option>Sort by: Newest First</option>
            <option>Sort by: Price Low to High</option>
            <option>Sort by: Price High to Low</option>
            <option>Sort by: Most Popular</option>
          </select>
        </div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(20px, 4vw, 32px)'
        }}>
          {newArrivalsData.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>

        {/* Newsletter Signup */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(12px)',
          borderRadius: '16px',
          border: '1px solid rgba(191, 164, 111, 0.2)',
          padding: '40px',
          marginTop: '48px',
          textAlign: 'center'
        }}>
          <h3 style={{
            color: '#0F0F0F',
            fontSize: '24px',
            fontWeight: 700,
            marginBottom: '12px'
          }}>
            Stay Updated
          </h3>
          <p style={{
            color: 'rgba(15, 15, 15, 0.7)',
            fontSize: '16px',
            marginBottom: '24px',
            maxWidth: '500px',
            margin: '0 auto 24px'
          }}>
            Be the first to know about our newest arrivals, exclusive collections, and special offers.
          </p>
          <div style={{
            display: 'flex',
            gap: '12px',
            maxWidth: '400px',
            margin: '0 auto',
            flexWrap: 'wrap'
          }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: '1',
                minWidth: '200px',
                padding: '12px 16px',
                border: '1px solid rgba(191, 164, 111, 0.3)',
                borderRadius: '8px',
                fontSize: '14px',
                background: 'rgba(255, 255, 255, 0.8)'
              }}
            />
            <button style={{
              background: '#BFA46F',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 24px',
              color: '#FFFFFF',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;