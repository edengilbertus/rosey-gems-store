import React from 'react';
import ProductCard from './ProductCard';

const SearchResults = ({ searchQuery, searchResults, addToCart, onSearch }) => {
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
            Search Results
          </h1>
          <p style={{
            color: 'rgba(15, 15, 15, 0.7)',
            fontSize: 'clamp(14px, 2.5vw, 18px)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            {searchResults.length > 0 
              ? `Found ${searchResults.length} result${searchResults.length === 1 ? '' : 's'} for "${searchQuery}"`
              : `No results found for "${searchQuery}"`
            }
          </p>
        </div>

        {searchResults.length === 0 ? (
          /* Empty State */
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: 'rgba(15, 15, 15, 0.6)'
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '16px'
            }}>
              🔍
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 600,
              marginBottom: '8px',
              color: '#0F0F0F'
            }}>
              No jewelry found
            </h3>
            <p style={{
              fontSize: '14px',
              lineHeight: '1.5',
              marginBottom: '24px',
              maxWidth: '400px',
              margin: '0 auto 24px'
            }}>
              Try searching for different keywords like "diamond", "ring", "necklace", or browse our collections.
            </p>
            
            {/* Search Suggestions */}
            <div style={{
              marginTop: '32px'
            }}>
              <h4 style={{
                color: '#0F0F0F',
                fontSize: '16px',
                fontWeight: 600,
                marginBottom: '16px'
              }}>
                Popular searches:
              </h4>
              <div style={{
                display: 'flex',
                gap: '8px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                {['Diamond Ring', 'Leather Handbag', 'Gold Watch', 'Designer Clutch', 'Vintage Bag', 'Luxury Scarf'].map((suggestion) => (
                  <button
                    key={suggestion}
                    style={{
                      background: 'rgba(191, 164, 111, 0.1)',
                      border: '1px solid rgba(191, 164, 111, 0.3)',
                      borderRadius: '20px',
                      padding: '6px 16px',
                      color: '#BFA46F',
                      fontSize: '14px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => onSearch && onSearch(suggestion)}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#BFA46F';
                      e.target.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(191, 164, 111, 0.1)';
                      e.target.style.color = '#BFA46F';
                    }}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Results Grid */
          <>
            {/* Filter/Sort Options */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '32px',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <div style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  color: 'rgba(15, 15, 15, 0.7)',
                  fontSize: '14px',
                  alignSelf: 'center'
                }}>
                  Filter by:
                </span>
                {['All', 'Ring', 'Necklace', 'Earrings', 'Bracelet', 'Handbag', 'Watch', 'Accessories'].map((type) => (
                  <button
                    key={type}
                    style={{
                      background: 'rgba(255, 255, 255, 0.7)',
                      border: '1px solid rgba(191, 164, 111, 0.3)',
                      borderRadius: '20px',
                      padding: '6px 16px',
                      color: '#0F0F0F',
                      fontSize: '14px',
                      cursor: 'pointer',
                      backdropFilter: 'blur(12px)'
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
              
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
                <option>Sort by: Relevance</option>
                <option>Sort by: Price Low to High</option>
                <option>Sort by: Price High to Low</option>
                <option>Sort by: Newest</option>
              </select>
            </div>

            {/* Products Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(20px, 4vw, 32px)'
            }}>
              {searchResults.map(product => (
                <div key={product.id}>
                  <ProductCard product={product} addToCart={addToCart} />
                  <div style={{ marginTop: 8, display: 'flex', justifyContent: 'center' }}>
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent('open-product-modal', { detail: { product } }))}
                      style={{ background: 'transparent', border: '1px solid #BFA46F', color: '#BFA46F', borderRadius: 8, padding: '6px 12px', cursor: 'pointer' }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Results Footer */}
            <div style={{
              textAlign: 'center',
              marginTop: '48px',
              padding: '24px',
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              borderRadius: '12px',
              border: '1px solid rgba(191, 164, 111, 0.2)'
            }}>
              <p style={{
                color: 'rgba(15, 15, 15, 0.7)',
                fontSize: '14px',
                marginBottom: '16px'
              }}>
                Can't find what you're looking for?
              </p>
              <button
                onClick={() => alert('Call our experts at +256 778 701307 for personalized assistance')}
                style={{
                background: '#BFA46F',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 24px',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer'
              }}>
                Contact Our Experts
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchResults;