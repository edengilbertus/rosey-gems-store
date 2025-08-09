import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ currentPage, setCurrentPage, cartItemCount, setIsCartOpen, onSearch }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="independent-inner-border" style={{
      background: 'rgba(249, 245, 240, 0.80)', 
      backdropFilter: 'blur(12px)', 
      '--border-style': 'solid', 
      '--border-color': 'rgba(191, 164, 111, 0.20)', 
      '--border-width-bottom': '1px', 
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px clamp(16px, 4vw, 40px)',
      position: 'relative'
    }}>
      <div style={{
        gap: isMobile ? '16px' : '32px', 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center'
      }}>
        {/* Rosey Gems Logo */}
        <div 
          onClick={() => setCurrentPage('home')}
          style={{
            display: 'flex', 
            alignItems: 'center',
            cursor: 'pointer'
          }}>
          <img 
            src={`${process.env.PUBLIC_URL}/logo.svg`} 
            alt="Rosey Gems" 
            style={{
              height: 'clamp(32px, 5vw, 48px)',
              width: 'auto',
              maxWidth: '120px'
            }}
            onError={(e) => {
              // Fallback if SVG doesn't load
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div style={{
            display: 'none',
            background: '#BFA46F',
            borderRadius: '8px',
            padding: '8px 12px',
            color: '#FFFFFF',
            fontSize: 'clamp(14px, 2.5vw, 18px)',
            fontWeight: 700,
            letterSpacing: '0.5px'
          }}>
            ROSEY GEMS
          </div>
        </div>
        
        {/* Navigation Menu - Desktop */}
        {!isMobile && (
          <>
            <button 
              onClick={() => setCurrentPage('collections')}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === 'collections' ? '#BFA46F' : '#0F0F0F',
                fontWeight: currentPage === 'collections' ? 600 : 500,
                fontSize: 'clamp(14px, 2vw, 16px)',
                cursor: 'pointer',
                padding: '8px 0',
                borderBottom: currentPage === 'collections' ? '2px solid #BFA46F' : 'none'
              }}>
              Collections
            </button>
            <button 
              onClick={() => setCurrentPage('new-arrivals')}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === 'new-arrivals' ? '#BFA46F' : '#0F0F0F',
                fontWeight: currentPage === 'new-arrivals' ? 600 : 500,
                fontSize: 'clamp(14px, 2vw, 16px)',
                cursor: 'pointer',
                padding: '8px 0',
                borderBottom: currentPage === 'new-arrivals' ? '2px solid #BFA46F' : 'none'
              }}>
              New Arrivals
            </button>
            <button 
              onClick={() => setCurrentPage('bestsellers')}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === 'bestsellers' ? '#BFA46F' : '#0F0F0F',
                fontWeight: currentPage === 'bestsellers' ? 600 : 500,
                fontSize: 'clamp(14px, 2vw, 16px)',
                cursor: 'pointer',
                padding: '8px 0',
                borderBottom: currentPage === 'bestsellers' ? '2px solid #BFA46F' : 'none'
              }}>
              Bestsellers
            </button>
            <button 
              onClick={() => setCurrentPage('custom-design')}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === 'custom-design' ? '#BFA46F' : '#0F0F0F',
                fontWeight: currentPage === 'custom-design' ? 600 : 500,
                fontSize: 'clamp(14px, 2vw, 16px)',
                cursor: 'pointer',
                padding: '8px 0',
                borderBottom: currentPage === 'custom-design' ? '2px solid #BFA46F' : 'none'
              }}>
              Custom Design
            </button>
            <button 
              onClick={() => setCurrentPage('bags')}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === 'bags' ? '#BFA46F' : '#0F0F0F',
                fontWeight: currentPage === 'bags' ? 600 : 500,
                fontSize: 'clamp(14px, 2vw, 16px)',
                cursor: 'pointer',
                padding: '8px 0',
                borderBottom: currentPage === 'bags' ? '2px solid #BFA46F' : 'none'
              }}>
              Bags
            </button>
            <button 
              onClick={() => setCurrentPage('specs')}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === 'specs' ? '#BFA46F' : '#0F0F0F',
                fontWeight: currentPage === 'specs' ? 600 : 500,
                fontSize: 'clamp(14px, 2vw, 16px)',
                cursor: 'pointer',
                padding: '8px 0',
                borderBottom: currentPage === 'specs' ? '2px solid #BFA46F' : 'none'
              }}>
              Specs / Eye Wear
            </button>
          </>
        )}
        
        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '3px'
            }}
          >
            <div style={{width: '20px', height: '2px', backgroundColor: '#0F0F0F', borderRadius: '1px', transition: 'all 0.3s ease'}}></div>
            <div style={{width: '20px', height: '2px', backgroundColor: '#0F0F0F', borderRadius: '1px', transition: 'all 0.3s ease'}}></div>
            <div style={{width: '20px', height: '2px', backgroundColor: '#0F0F0F', borderRadius: '1px', transition: 'all 0.3s ease'}}></div>
          </button>
        )}
      </div>

      {/* Right Side Controls */}
      <div style={{
        gap: isMobile ? '8px' : '16px', 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center'
      }}>
        {!isMobile && (
          <>
            {/* Language Selector */}
            <button style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 8px'
            }}>
              <div className="image" style={{
                backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9cd558b3-3fa0c2b0-6189-4cf1-bc95-5b3e745282df.svg')", 
                '--svg-fill-colors': 'rgb(15, 15, 15)', 
                width: '16px', 
                height: '16px', 
                backgroundSize: 'cover'
              }}></div>
              <div style={{
                color: '#0F0F0F', 
                fontSize: 'clamp(12px, 2vw, 14px)',
                lineHeight: '20px'
              }}>
                EN
              </div>
            </button>
            
            {/* Currency Selector */}
            <button style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 8px'
            }}>
              <div className="image" style={{
                backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9cd6b2f7-f92655ae-3036-4a4a-baa5-295bdc4bfd6b.svg')", 
                '--svg-fill-colors': 'rgb(15, 15, 15)', 
                width: '16px', 
                height: '16px', 
                backgroundSize: 'cover'
              }}></div>
              <div style={{
                color: '#0F0F0F', 
                fontSize: 'clamp(12px, 2vw, 14px)',
                lineHeight: '20px'
              }}>
                UGX
              </div>
            </button>
          </>
        )}
        
        {/* User Icons */}
        <div style={{
          display: 'flex',
          gap: isMobile ? '12px' : '16px',
          alignItems: 'center'
        }}>
          {/* Search Icon */}
          <button 
            onClick={() => {
              const searchQuery = prompt('What would you like to search for?');
              if (searchQuery && searchQuery.trim() && onSearch) {
                onSearch(searchQuery.trim());
              }
            }}
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
            title="Search"
          >
            <div className="image" style={{
              backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9cd71824-afd68112-e857-4cfa-bbed-e74534ea2bb0.svg')", 
              '--svg-fill-colors': 'rgb(15, 15, 15)', 
              width: '20px', 
              height: '20px', 
              backgroundSize: 'cover'
            }}></div>
          </button>
          
          {/* Wishlist Icon */}
          <button style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px'
          }}>
            <div className="image" style={{
              backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9cd85e09-eac6241e-f13f-489f-b75a-cba686bc3924.svg')", 
              '--svg-fill-colors': 'rgb(15, 15, 15)', 
              width: '20px', 
              height: '18px', 
              backgroundSize: 'cover'
            }}></div>
          </button>
          
           {/* Shopping Bag Icon */}
          <button 
            onClick={() => setIsCartOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              position: 'relative',
              marginRight: '4px'
            }}>
            <div className="image" style={{
              backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9cd9451b-bcbc54d8-7fa8-4df6-959c-22db0f1b259a.svg')", 
              '--svg-fill-colors': 'rgb(15, 15, 15)', 
              width: '20px', 
              height: '20px', 
              backgroundSize: 'cover'
            }}></div>
            {cartItemCount > 0 && (
              <div style={{
                position: 'absolute',
                top: '0px',
                right: '0px',
                background: '#BFA46F',
                color: '#FFFFFF',
                borderRadius: '50%',
                minWidth: '18px',
                height: '18px',
                fontSize: '11px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #F9F5F0',
                zIndex: 10
              }}>
                {cartItemCount > 99 ? '99+' : cartItemCount}
              </div>
            )}
          </button>          
          {/* User Account */}
          <button style={{
            background: '#0F0F0F', 
            borderRadius: '50%', 
            border: 'none',
            cursor: 'pointer',
            padding: '8px', 
            width: '32px',
            height: '32px',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center'
          }}>
            <div className="image" style={{
              backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9cd94e81-5af1623b-182d-4144-a517-adde647cda90.svg')", 
              '--svg-fill-colors': 'rgb(255, 255, 255)', 
              width: '16px', 
              height: '16px', 
              backgroundSize: 'cover'
            }}></div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMobile && isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(249, 245, 240, 0.95)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(191, 164, 111, 0.20)',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          zIndex: 1000
        }}>
          <button 
            onClick={() => {
              setCurrentPage('collections');
              setIsMenuOpen(false);
            }}
            style={{
              background: currentPage === 'collections' ? 'rgba(191, 164, 111, 0.1)' : 'none',
              border: 'none',
              color: currentPage === 'collections' ? '#BFA46F' : '#0F0F0F',
              fontWeight: currentPage === 'collections' ? 600 : 500,
              fontSize: '16px',
              cursor: 'pointer',
              padding: '12px',
              textAlign: 'left',
              borderRadius: '8px'
            }}
            onMouseEnter={(e) => {
              if (currentPage !== 'collections') {
                e.target.style.backgroundColor = 'rgba(191, 164, 111, 0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== 'collections') {
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            Collections
          </button>
          <button 
            onClick={() => {
              setCurrentPage('new-arrivals');
              setIsMenuOpen(false);
            }}
            style={{
              background: currentPage === 'new-arrivals' ? 'rgba(191, 164, 111, 0.1)' : 'none',
              border: 'none',
              color: currentPage === 'new-arrivals' ? '#BFA46F' : '#0F0F0F',
              fontWeight: currentPage === 'new-arrivals' ? 600 : 500,
              fontSize: '16px',
              cursor: 'pointer',
              padding: '12px',
              textAlign: 'left',
              borderRadius: '8px'
            }}
            onMouseEnter={(e) => {
              if (currentPage !== 'new-arrivals') {
                e.target.style.backgroundColor = 'rgba(191, 164, 111, 0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== 'new-arrivals') {
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            New Arrivals
          </button>
          <button 
            onClick={() => {
              setCurrentPage('bestsellers');
              setIsMenuOpen(false);
            }}
            style={{
              background: currentPage === 'bestsellers' ? 'rgba(191, 164, 111, 0.1)' : 'none',
              border: 'none',
              color: currentPage === 'bestsellers' ? '#BFA46F' : '#0F0F0F',
              fontWeight: currentPage === 'bestsellers' ? 600 : 500,
              fontSize: '16px',
              cursor: 'pointer',
              padding: '12px',
              textAlign: 'left',
              borderRadius: '8px'
            }}
            onMouseEnter={(e) => {
              if (currentPage !== 'bestsellers') {
                e.target.style.backgroundColor = 'rgba(191, 164, 111, 0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== 'bestsellers') {
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            Bestsellers
          </button>
          <button 
            onClick={() => {
              setCurrentPage('custom-design');
              setIsMenuOpen(false);
            }}
            style={{
              background: currentPage === 'custom-design' ? 'rgba(191, 164, 111, 0.1)' : 'none',
              border: 'none',
              color: currentPage === 'custom-design' ? '#BFA46F' : '#0F0F0F',
              fontWeight: currentPage === 'custom-design' ? 600 : 500,
              fontSize: '16px',
              cursor: 'pointer',
              padding: '12px',
              textAlign: 'left',
              borderRadius: '8px'
            }}
            onMouseEnter={(e) => {
              if (currentPage !== 'custom-design') {
                e.target.style.backgroundColor = 'rgba(191, 164, 111, 0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== 'custom-design') {
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            Custom Design
          </button>
          <button 
            onClick={() => {
              setCurrentPage('bags');
              setIsMenuOpen(false);
            }}
            style={{
              background: currentPage === 'bags' ? 'rgba(191, 164, 111, 0.1)' : 'none',
              border: 'none',
              color: currentPage === 'bags' ? '#BFA46F' : '#0F0F0F',
              fontWeight: currentPage === 'bags' ? 600 : 500,
              fontSize: '16px',
              cursor: 'pointer',
              padding: '12px',
              textAlign: 'left',
              borderRadius: '8px'
            }}
            onMouseEnter={(e) => {
              if (currentPage !== 'bags') {
                e.target.style.backgroundColor = 'rgba(191, 164, 111, 0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== 'bags') {
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            Bags
          </button>
          <button 
            onClick={() => {
              setCurrentPage('specs');
              setIsMenuOpen(false);
            }}
            style={{
              background: currentPage === 'specs' ? 'rgba(191, 164, 111, 0.1)' : 'none',
              border: 'none',
              color: currentPage === 'specs' ? '#BFA46F' : '#0F0F0F',
              fontWeight: currentPage === 'specs' ? 600 : 500,
              fontSize: '16px',
              cursor: 'pointer',
              padding: '12px',
              textAlign: 'left',
              borderRadius: '8px'
            }}
            onMouseEnter={(e) => {
              if (currentPage !== 'specs') {
                e.target.style.backgroundColor = 'rgba(191, 164, 111, 0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== 'specs') {
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            Specs / Eye Wear
          </button>
          
          <div style={{height: '1px', backgroundColor: 'rgba(191, 164, 111, 0.3)', margin: '8px 0'}}></div>
          
          <div style={{display: 'flex', gap: '16px', alignItems: 'center', padding: '8px 12px'}}>
            <button style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '14px',
              color: '#0F0F0F'
            }}>
              🇺🇸 EN
            </button>
            <button style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '14px',
              color: '#0F0F0F'
            }}>
              🇺🇬 UGX
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
