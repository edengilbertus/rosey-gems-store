import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import SearchBar from './components/SearchBar';
import CuratedForYou from './components/CuratedForYou';
import SideBar from './components/SideBar';
import Appointments from './components/Appointments';
import LoyaltyGems from './components/LoyaltyGems';
import QuickCheckout from './components/QuickCheckout';
import Footer from './components/Footer';
import { JewelryShowcase3D } from './components/JewelryShowcase3D';
import Collections from './components/Collections';
import NewArrivals from './components/NewArrivals';
import Bestsellers from './components/Bestsellers';
import CustomDesign from './components/CustomDesign';
import Bags from './components/Bags';
import Cart from './components/Cart';
import SearchResults from './components/SearchResults';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Cart functions
  const addToCart = (product, quantityToAdd = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: quantityToAdd }];
      }
    });
    // Show a brief success message
    const itemName = product.name || product.title;
    const message = quantityToAdd === 1 
      ? `${itemName} added to cart!`
      : `${quantityToAdd} × ${itemName} added to cart!`;
    alert(message);
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // All products data for search
  const allProducts = [
    // From CuratedForYou
    { id: 1, name: 'Sapphire Rose Gold Ring', price: 'UGX 9,231,250', type: 'Ring', image: 'https://static.motiffcontent.com/private/resource/image/1982c188556632a-2ffcda2d-691f-437e-8539-71af6b110594.jpeg', tag: 'New Arrival', collection: 'Modern' },
    { id: 2, name: 'Diamond Pendant Necklace', price: 'UGX 14,243,750', type: 'Necklace', image: 'https://static.motiffcontent.com/private/resource/image/1982c1885579f10-5fb0e695-839f-48ab-8eee-18706aecda19.jpeg', collection: 'Classic' },
    { id: 3, name: 'Emerald Teardrop Earrings', price: 'UGX 7,303,125', type: 'Earrings', image: 'https://static.motiffcontent.com/private/resource/image/1982c1885585f4b-7fc69892-8bf9-4dac-b3ea-5397f7bb1171.jpeg', tag: 'On Sale', collection: 'Statement' },
    { id: 4, name: 'Pearl & Gold Bracelet', price: 'UGX 4,625,000', type: 'Bracelet', image: 'https://static.motiffcontent.com/private/resource/image/1982c188559ba41-c106d009-deb4-4d80-9f9e-02c8d5abb261.jpeg', collection: 'Vintage' },
    
    // From Collections
    { id: 5, name: 'Diamond Elegance Ring', price: 'UGX 8,850,000', type: 'Ring', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Premium', collection: 'Bridal' },
    { id: 6, name: 'Vintage Pearl Necklace', price: 'UGX 4,625,000', type: 'Necklace', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', collection: 'Vintage' },
    { id: 7, name: 'Sapphire Drop Earrings', price: 'UGX 3,700,000', type: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'New', collection: 'Modern' },
    { id: 8, name: 'Gold Tennis Bracelet', price: 'UGX 5,550,000', type: 'Bracelet', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Luxury', collection: 'Classic' },
    { id: 9, name: 'Emerald Statement Ring', price: 'UGX 11,100,000', type: 'Ring', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Exclusive', collection: 'Statement' },
    { id: 10, name: 'Rose Gold Pendant', price: 'UGX 2,775,000', type: 'Necklace', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Trending', collection: 'Modern' },
    
    // From JewelryShowcase3D
    { id: 11, title: 'Diamond Solitaire Ring', name: 'Diamond Solitaire Ring', price: 'UGX 10,543,750', type: 'Ring', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', collection: 'Bridal' },
    { id: 12, title: 'Pearl Drop Earrings', name: 'Pearl Drop Earrings', price: 'UGX 3,311,250', type: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', collection: 'Classic' },
    { id: 13, title: 'Emerald Tennis Bracelet', name: 'Emerald Tennis Bracelet', price: 'UGX 11,840,000', type: 'Bracelet', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', collection: 'Statement' },
    
    // Luxury Bags & Accessories
    { id: 14, name: 'Designer Leather Handbag', price: 'UGX 8,880,000', type: 'Handbag', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Luxury', collection: 'Modern' },
    { id: 15, name: 'Crocodile Clutch Bag', price: 'UGX 12,950,000', type: 'Clutch', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Exclusive', collection: 'Statement' },
    { id: 16, name: 'Vintage Leather Satchel', price: 'UGX 6,660,000', type: 'Satchel', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', collection: 'Vintage' },
    { id: 17, name: 'Gold Chain Purse', price: 'UGX 5,550,000', type: 'Purse', image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Trendy', collection: 'Classic' },
    { id: 18, name: 'Designer Tote Bag', price: 'UGX 7,400,000', type: 'Tote', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', collection: 'Modern' },
    { id: 19, name: 'Evening Clutch with Crystals', price: 'UGX 4,625,000', type: 'Clutch', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Glamorous', collection: 'Bridal' },
    
    // Luxury Accessories
    { id: 20, name: 'Silk Designer Scarf', price: 'UGX 1,850,000', type: 'Scarf', image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Elegant', collection: 'Classic' },
    { id: 21, name: 'Gold Luxury Watch', price: 'UGX 18,500,000', type: 'Watch', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Premium', collection: 'Statement' },
    { id: 22, name: 'Designer Sunglasses', price: 'UGX 2,775,000', type: 'Sunglasses', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', collection: 'Modern' },
    { id: 23, name: 'Leather Card Wallet', price: 'UGX 1,480,000', type: 'Wallet', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', collection: 'Classic' },
    { id: 24, name: 'Diamond Hair Pin Set', price: 'UGX 3,330,000', type: 'Hair Accessory', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Bridal', collection: 'Bridal' },
    { id: 25, name: 'Cashmere Luxury Shawl', price: 'UGX 3,700,000', type: 'Shawl', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', collection: 'Vintage' },
    
    // Additional Luxury Bags
    { id: 26, name: 'Python Leather Shoulder Bag', price: 'UGX 15,540,000', type: 'Shoulder Bag', image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Exotic', collection: 'Statement' },
    { id: 27, name: 'Silk Evening Bag', price: 'UGX 3,700,000', type: 'Evening Bag', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Elegant', collection: 'Bridal' },
    { id: 28, name: 'Canvas Weekend Tote', price: 'UGX 2,775,000', type: 'Tote', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', collection: 'Modern' }
  ];

  // Search function
  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    const results = allProducts.filter(product => {
      const searchText = `${product.name || product.title || ''} ${product.type || ''} ${product.collection || ''} ${product.tag || ''}`.toLowerCase();
      return searchText.includes(lowercaseQuery) ||
             (product.name || product.title || '').toLowerCase().includes(lowercaseQuery) ||
             (product.type || '').toLowerCase().includes(lowercaseQuery) ||
             (product.collection || '').toLowerCase().includes(lowercaseQuery);
    });

    setSearchResults(results);
    if (results.length > 0) {
      setCurrentPage('search');
    }
  };

  const renderPage = () => {
    const cartProps = { addToCart, removeFromCart, updateQuantity, cartItems };
    
    switch (currentPage) {
      case 'collections':
        return <Collections {...cartProps} />;
      case 'new-arrivals':
        return <NewArrivals {...cartProps} />;
      case 'bestsellers':
        return <Bestsellers {...cartProps} />;
      case 'custom-design':
        return <CustomDesign />;
      case 'bags':
        return <Bags {...cartProps} />;
      case 'search':
        return <SearchResults searchQuery={searchQuery} searchResults={searchResults} addToCart={addToCart} />;
      default:
        return (
          <>
            <Welcome />
            <SearchBar onSearch={performSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <div style={{ marginTop: '16px', marginLeft: 'clamp(16px, 4vw, 40px)', marginRight: 'clamp(16px, 4vw, 40px)', gap: 'clamp(24px, 5vw, 48px)', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
              <CuratedForYou {...cartProps} setCurrentPage={setCurrentPage} />
              <div style={{ gap: 'clamp(16px, 3vw, 32px)', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'stretch' }}>
                <SideBar {...cartProps} />
                <div style={{ flexGrow: 1, flexBasis: '432px', gap: '32px', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                  <Appointments />
                  <LoyaltyGems />
                </div>
              </div>
              <QuickCheckout />
            </div>
            <JewelryShowcase3D {...cartProps} />
          </>
        );
    }
  };

  return (
    <div style={{ background: '#F9F5F0', minHeight: '100vh', width: '100%', maxWidth: '1440px', margin: '0 auto', overflow: 'hidden', gap: '8px', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        cartItemCount={getCartItemCount()}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        onSearch={performSearch}
      />
      {renderPage()}
      <Cart 
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
      <Footer />
    </div>
  );
}

export default App;