import React, { useState } from 'react';
import ProductCard from './ProductCard';

const collectionsData = [
  // Jewelry
  {
    id: 1,
    name: 'Diamond Elegance Ring',
    price: 'UGX 15,000',
    type: 'Ring',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: 'Premium',
    collection: 'Bridal',
    description: 'Elegant diamond-look ring inspired by bridal classics.'
  },
  {
    id: 2,
    name: 'Vintage Pearl Necklace',
    price: 'UGX 60,000',
    type: 'Necklace',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: null,
    collection: 'Vintage',
    description: 'Vintage-style pearl-look strand with elegant clasp.'
  },
  {
    id: 3,
    name: 'Sapphire Drop Earrings',
    price: 'UGX 40,000',
    type: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: 'New',
    collection: 'Modern',
    description: 'Elegant drop earrings with sapphire-blue stones.'
  },
  {
    id: 4,
    name: 'Gold Tennis Bracelet',
    price: 'UGX 75,000',
    type: 'Bracelet',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: 'Luxury',
    collection: 'Classic',
    description: 'Classic gold-tone tennis bracelet with prong setting.'
  },
  {
    id: 5,
    name: 'Emerald Statement Ring',
    price: 'UGX 10,000',
    type: 'Ring',
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: 'Exclusive',
    collection: 'Statement',
    description: 'Bold emerald-tone centerpiece with smooth band.'
  },
  {
    id: 6,
    name: 'Rose Gold Pendant',
    price: 'UGX 35,000',
    type: 'Necklace',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: 'Trending',
    collection: 'Modern',
    description: 'Minimal pendant in a warm rose-gold tone.'
  },
  
  // Luxury Bags
  {
    id: 7,
    name: 'Designer Leather Handbag',
    price: 'UGX 95,000',
    type: 'Handbag',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: 'Luxury',
    collection: 'Modern',
    description: 'Premium-feel leather handbag with structured silhouette.'
  },
  {
    id: 8,
    name: 'Crocodile Clutch Bag',
    price: 'UGX 85,000',
    type: 'Clutch',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: 'Exclusive',
    collection: 'Statement',
    description: 'Textured crocodile pattern clutch with luxe clasp.'
  },
  {
    id: 9,
    name: 'Vintage Leather Satchel',
    price: 'UGX 66,600',
    type: 'Satchel',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    collection: 'Vintage',
    description: 'Old-school satchel with buckle closures and patina.'
  },
  {
    id: 10,
    name: 'Evening Clutch with Crystals',
    price: 'UGX 65,000',
    type: 'Clutch',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: 'Glamorous',
    collection: 'Bridal',
    description: 'Crystal-embellished clutch perfect for events.'
  },
  
  // Luxury Accessories
  {
    id: 11,
    name: 'Gold Luxury Watch',
    price: 'UGX 95,000',
    type: 'Watch',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: 'Premium',
    collection: 'Statement',
    description: 'Statement gold-tone watch with polished links.'
  },
  {
    id: 12,
    name: 'Silk Designer Scarf',
    price: 'UGX 50,000',
    type: 'Scarf',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
    tag: 'Elegant',
    collection: 'Classic',
    description: 'Soft silk-feel scarf with subtle sheen.'
  }
];

const Collections = ({ addToCart }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [query, setQuery] = useState('');

  const normalized = (s) => (s || '').toLowerCase();
  const filteredProducts = collectionsData.filter(product => {
    const matchesCollection = selectedFilter === 'All' || product.collection === selectedFilter;
    const matchesQuery = !query.trim() ||
      normalized(product.name).includes(normalized(query)) ||
      normalized(product.type).includes(normalized(query));
    return matchesCollection && matchesQuery;
  });
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
            Our Collections
          </h1>
          <p style={{
            color: 'rgba(15, 15, 15, 0.7)',
            fontSize: 'clamp(14px, 2.5vw, 18px)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Discover our carefully curated luxury collections featuring exquisite jewelry, designer handbags, and premium accessories crafted with precision and elegance.
          </p>
        </div>

        {/* Filter / Search Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          {['All', 'Bridal', 'Vintage', 'Modern', 'Classic', 'Statement'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              style={{
                background: filter === selectedFilter ? '#BFA46F' : 'rgba(255, 255, 255, 0.7)',
                border: '1px solid rgba(191, 164, 111, 0.3)',
                borderRadius: '25px',
                padding: '8px 20px',
                color: filter === selectedFilter ? '#FFFFFF' : '#0F0F0F',
                fontSize: '14px',
                fontWeight: filter === selectedFilter ? 600 : 500,
                cursor: 'pointer',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (filter !== selectedFilter) {
                  e.target.style.background = 'rgba(191, 164, 111, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (filter !== selectedFilter) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.7)';
                }
              }}
            >
              {filter}
            </button>
          ))}
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search collections (e.g., ring, tote)"
            style={{
              minWidth: '220px',
              padding: '8px 12px',
              border: '1px solid rgba(191, 164, 111, 0.3)',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.7)'
            }}
          />
        </div>

        {/* Filter Results Info */}
        <div style={{
          textAlign: 'center',
          marginBottom: '24px',
          color: 'rgba(15, 15, 15, 0.7)',
          fontSize: '14px'
        }}>
          {selectedFilter === 'All' 
            ? `Showing all ${filteredProducts.length} items` 
            : `Showing ${filteredProducts.length} items in ${selectedFilter} collection`
          }
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: 'rgba(15, 15, 15, 0.6)'
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '16px'
            }}>
              💎
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 600,
              marginBottom: '8px',
              color: '#0F0F0F'
            }}>
              No items found in {selectedFilter} collection
            </h3>
            <p style={{
              fontSize: '14px',
              lineHeight: '1.5',
              marginBottom: '24px'
            }}>
              Try selecting a different collection or browse all items.
            </p>
            <button
              onClick={() => setSelectedFilter('All')}
              style={{
                background: '#BFA46F',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 24px',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              View All Collections
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(20px, 4vw, 32px)'
          }}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        )}

        {/* Load More Section */}
        <div style={{
          textAlign: 'center',
          marginTop: '48px'
        }}>
          <button 
            onClick={() => setSelectedFilter('All')}
            style={{
            background: '#BFA46F',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 32px',
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
            Show All Collections
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;