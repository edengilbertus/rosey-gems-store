import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, searchQuery = '', setSearchQuery }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    const query = (searchQuery || '').trim();
    if (setSearchQuery) setSearchQuery(query);
    setIsSearching(true);
    try {
      if (onSearch) onSearch(query);
    } finally {
      setTimeout(() => setIsSearching(false), 300);
    }
  };

  const handleInputChange = (e) => {
    if (setSearchQuery) setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    if (setSearchQuery) setSearchQuery('');
  };

  return (
    <>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <form onSubmit={handleSearch}>
      <div className="inner-border" style={{
        background: 'rgba(255, 255, 255, 0.70)', 
        boxShadow: isFocused ? '0px 2px 4px 0px rgba(0, 0, 0, 0.1)' : '0px 1px 2px 0px rgba(0, 0, 0, 0.05)', 
        backdropFilter: 'blur(12px)', 
        '--border-style': 'solid', 
        '--border-color': isFocused ? 'rgba(191, 164, 111, 0.5)' : 'rgba(191, 164, 111, 0.30)', 
        '--border-width': '1px', 
        '--border-radius': '8px', 
        display: 'flex', 
        alignItems: 'center', 
        marginTop: '32px', 
        marginLeft: 'clamp(16px, 4vw, 40px)', 
        marginRight: 'clamp(16px, 4vw, 40px)', 
        gap: '12px', 
        flexDirection: 'row', 
        paddingLeft: '13px', 
        paddingRight: '21px', 
        paddingTop: '17px', 
        paddingBottom: '17px',
        transition: 'all 0.2s ease'
      }}>
        <div className="image" style={{
          backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9cda0728-d46a0935-6d5a-4bd0-9004-1485f4f5cba4.svg')", 
          '--svg-fill-colors': 'rgb(191, 164, 111)', 
          width: '20px', 
          height: '20px', 
          backgroundSize: 'cover',
          flexShrink: 0
        }}></div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search for jewelry, bags, accessories, or collections..."
          style={{
            width: '100%',
            border: 'none',
            background: 'transparent',
            outline: 'none',
            color: '#0F0F0F',
            fontSize: '16px',
            lineHeight: '24px',
            '::placeholder': {
              color: 'rgba(15, 15, 15, 0.50)'
            }
          }}
        />
        {searchQuery && (
          <button 
            type="button" 
            onClick={handleClearSearch}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              padding: '4px',
              borderRadius: '4px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(191, 164, 111, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'none';
            }}
            title="Clear search"
          >
            <div style={{
              color: 'rgba(15, 15, 15, 0.5)',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: 1
            }}>
              ×
            </div>
          </button>
        )}
        <button 
          type="submit" 
          disabled={isSearching}
          style={{ 
            background: isSearching ? 'rgba(191, 164, 111, 0.1)' : 'none', 
            border: 'none', 
            cursor: isSearching ? 'not-allowed' : 'pointer', 
            padding: '4px', 
            marginLeft: '12px',
            borderRadius: '4px',
            transition: 'all 0.2s ease',
            opacity: isSearching ? 0.7 : 1
          }}
          onMouseEnter={(e) => {
            if (!isSearching) {
              e.target.style.background = 'rgba(191, 164, 111, 0.1)';
              e.target.style.transform = 'scale(1.1)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isSearching) {
              e.target.style.background = 'none';
              e.target.style.transform = 'scale(1)';
            }
          }}
          title={isSearching ? "Searching..." : "Search"}
        >
          {isSearching ? (
            <div style={{
              width: '16px',
              height: '16px',
              border: '2px solid #BFA46F',
              borderTop: '2px solid transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
          ) : (
            <div className="image" style={{
              backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9cdbf6d5-5fde19e5-e24c-4b19-8c05-16ecafa77f1b.svg')", 
              '--svg-fill-colors': 'rgb(191, 164, 111)', 
              width: '16px', 
              height: '16px', 
              backgroundSize: 'cover'
            }}></div>
          )}
        </button>
      </div>
    </form>
    </>
  );
};

export default SearchBar;
