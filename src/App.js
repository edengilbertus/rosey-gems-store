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
import ProductDetailModal from './components/ProductDetailModal';
import Specs from './components/Specs';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const raw = localStorage.getItem('wishlist');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    const handler = (e) => setModalProduct(e.detail.product);
    window.addEventListener('open-product-modal', handler);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Persist wishlist
  useEffect(() => {
    try {
      localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    } catch {}
  }, [wishlistItems]);

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

  // Wishlist functions
  const isWishlisted = (productId) => wishlistItems.some((p) => p.id === productId);
  const toggleWishlist = (product) => {
    setWishlistItems((prev) => {
      if (prev.some((p) => p.id === product.id)) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };
  const removeFromWishlist = (productId) => {
    setWishlistItems((prev) => prev.filter((p) => p.id !== productId));
  };

  // All products data for search
  const allProducts = [
    // From CuratedForYou
    { id: 1, name: 'Sapphire Rose Gold Ring', price: 'UGX 12,000', type: 'Ring', image: 'https://static.motiffcontent.com/private/resource/image/1982c188556632a-2ffcda2d-691f-437e-8539-71af6b110594.jpeg', tag: 'New Arrival', collection: 'Modern', description: 'Rose gold band with sapphire centerpiece.' },
    { id: 2, name: 'Diamond Pendant Necklace', price: 'UGX 65,000', type: 'Necklace', image: 'https://static.motiffcontent.com/private/resource/image/1982c1885579f10-5fb0e695-839f-48ab-8eee-18706aecda19.jpeg', collection: 'Classic', description: 'Pendant necklace with diamond-inspired sparkle.' },
    { id: 3, name: 'Emerald Teardrop Earrings', price: 'UGX 45,000', type: 'Earrings', image: 'https://static.motiffcontent.com/private/resource/image/1982c1885585f4b-7fc69892-8bf9-4dac-b3ea-5397f7bb1171.jpeg', tag: 'On Sale', collection: 'Statement', description: 'Teardrop earrings with emerald-tone stones.' },
    { id: 4, name: 'Pearl & Gold Bracelet', price: 'UGX 55,000', type: 'Bracelet', image: 'https://static.motiffcontent.com/private/resource/image/1982c188559ba41-c106d009-deb4-4d80-9f9e-02c8d5abb261.jpeg', collection: 'Vintage', description: 'Delicate bracelet with pearl and gold accents.' },
    
    // From Collections
    { id: 5, name: 'Diamond Elegance Ring', price: 'UGX 15,000', type: 'Ring', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Premium', collection: 'Bridal', description: 'Elegant diamond-look ring inspired by bridal classics.' },
    { id: 6, name: 'Vintage Pearl Necklace', price: 'UGX 60,000', type: 'Necklace', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', collection: 'Vintage', description: 'Classic pearl strand with a vintage touch.' },
    { id: 7, name: 'Sapphire Drop Earrings', price: 'UGX 40,000', type: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'New', collection: 'Modern', description: 'Elegant drops with sapphire-blue stones.' },
    { id: 8, name: 'Gold Tennis Bracelet', price: 'UGX 75,000', type: 'Bracelet', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Luxury', collection: 'Classic', description: 'Timeless tennis bracelet in a gold finish.' },
    { id: 9, name: 'Emerald Statement Ring', price: 'UGX 10,000', type: 'Ring', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Exclusive', collection: 'Statement', description: 'Bold emerald-tone centerpiece with smooth band.' },
    { id: 10, name: 'Rose Gold Pendant', price: 'UGX 35,000', type: 'Necklace', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Trending', collection: 'Modern', description: 'Minimal pendant with rose gold tone.' },
    
    // From JewelryShowcase3D
    { id: 11, title: 'Diamond Solitaire Ring', name: 'Diamond Solitaire Ring', price: 'UGX 14,000', type: 'Ring', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', collection: 'Bridal', description: 'Classic solitaire look with brilliant-cut centerpiece.' },
    { id: 12, title: 'Pearl Drop Earrings', name: 'Pearl Drop Earrings', price: 'UGX 35,000', type: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', collection: 'Classic', description: 'Graceful pearl drops.' },
    { id: 13, title: 'Emerald Tennis Bracelet', name: 'Emerald Tennis Bracelet', price: 'UGX 80,000', type: 'Bracelet', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', collection: 'Statement', description: 'Tennis bracelet with emerald-tone stones.' },
    
    // Luxury Bags & Accessories
    { id: 14, name: 'Designer Leather Handbag', price: 'UGX 95,000', type: 'Handbag', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Luxury', collection: 'Modern', description: 'Premium-feel leather handbag.' },
    { id: 15, name: 'Crocodile Clutch Bag', price: 'UGX 85,000', type: 'Clutch', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Exclusive', collection: 'Statement', description: 'Textured clutch with crocodile pattern.' },
    { id: 16, name: 'Vintage Leather Satchel', price: 'UGX 90,000', type: 'Satchel', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', collection: 'Vintage', description: 'Vintage-inspired leather satchel.' },
    { id: 17, name: 'Gold Chain Purse', price: 'UGX 70,000', type: 'Purse', image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Trendy', collection: 'Classic', description: 'Chic purse with gold chain strap.' },
    { id: 18, name: 'Designer Tote Bag', price: 'UGX 80,000', type: 'Tote', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', collection: 'Modern', description: 'Spacious everyday tote.' },
    { id: 19, name: 'Evening Clutch with Crystals', price: 'UGX 65,000', type: 'Clutch', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Glamorous', collection: 'Bridal', description: 'Crystal-adorned evening clutch.' },
    
    // Luxury Accessories
    { id: 20, name: 'Silk Designer Scarf', price: 'UGX 50,000', type: 'Scarf', image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Elegant', collection: 'Classic', description: 'Soft silk-feel scarf.' },
    { id: 21, name: 'Gold Luxury Watch', price: 'UGX 95,000', type: 'Watch', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Premium', collection: 'Statement', description: 'Gold-tone watch with luxe styling.' },
    { id: 22, name: 'Designer Sunglasses', price: 'UGX 2,775,000', type: 'Sunglasses', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', collection: 'Modern', description: 'Oversized designer-inspired sunglasses with UV protection.' },
    { id: 23, name: 'Leather Card Wallet', price: 'UGX 35,000', type: 'Wallet', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', collection: 'Classic', description: 'Compact leather card wallet.' },
    { id: 24, name: 'Diamond Hair Pin Set', price: 'UGX 25,000', type: 'Hair Accessory', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Bridal', collection: 'Bridal', description: 'Sparkling hair pins for special occasions.' },
    { id: 25, name: 'Cashmere Luxury Shawl', price: 'UGX 60,000', type: 'Shawl', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', collection: 'Vintage', description: 'Warm, ultra-soft shawl.' },
    
    // Additional Luxury Bags
    { id: 26, name: 'Python Leather Shoulder Bag', price: 'UGX 95,000', type: 'Shoulder Bag', image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Exotic', collection: 'Statement', description: 'Exotic-look shoulder bag.' },
    { id: 27, name: 'Silk Evening Bag', price: 'UGX 55,000', type: 'Evening Bag', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', tag: 'Elegant', collection: 'Bridal', description: 'Elegant silk evening bag.' },
    { id: 28, name: 'Canvas Weekend Tote', price: 'UGX 50,000', type: 'Tote', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', collection: 'Modern', description: 'Durable canvas tote for weekends.' },
    // Eyewear
    { id: 201, name: 'Aviator Sunglasses', price: 'UGX 40,000', type: 'Eyewear', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1600&auto=format&fit=crop', tag: 'New', collection: 'Modern', description: 'Classic aviator silhouette with tinted lenses.' },
    { id: 202, name: 'Round Acetate Specs', price: 'UGX 35,000', type: 'Eyewear', image: 'https://images.unsplash.com/photo-1527656855837-9fef0b80779c?q=80&w=1600&auto=format&fit=crop', collection: 'Classic', description: 'Retro round acetate frames for everyday wear.' },
    { id: 203, name: 'Blue Light Glasses', price: 'UGX 25,000', type: 'Eyewear', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop', collection: 'Modern', description: 'Blue light filtering lenses to reduce eye strain.' },
    { id: 304, name: 'Photochromic Anti Blue Light Glasses', price: 'UGX 15,000', type: 'Eyewear', image: `${process.env.PUBLIC_URL}/assets/eyewear/image-8.jpg`, collection: 'Modern', tag: 'New', description: 'Photochromic anti-blue light lenses in bold cat-eye frames. Multiple colorways available.' },
    { id: 305, name: 'Luxury Optical Spectacles', price: 'UGX 30,000', type: 'Eyewear', image: `${process.env.PUBLIC_URL}/assets/eyewear/image-3.jpg`, collection: 'Modern', tag: 'New', description: 'Luxury optical frames with subtle blue-light filter and premium detailing.' },
    { id: 306, name: 'Optical Frames', price: 'UGX 30,000', type: 'Eyewear', image: `${process.env.PUBLIC_URL}/assets/eyewear/optical-frames-2.jpg`, collection: 'Modern', tag: 'New', description: 'Classic optical frames in a squared silhouette, lightweight and comfortable.' }
  ];

  // Search function
  const performSearch = (query) => {
    const trimmedQuery = (query || '').trim();
    setSearchQuery(trimmedQuery);

    if (!trimmedQuery) {
      setSearchResults([]);
      setCurrentPage('search');
      return;
    }

    const lowercaseQuery = trimmedQuery.toLowerCase();
    const results = allProducts.filter(product => {
      const searchText = `${product.name || product.title || ''} ${product.type || ''} ${product.collection || ''} ${product.tag || ''}`.toLowerCase();
      return searchText.includes(lowercaseQuery) ||
             (product.name || product.title || '').toLowerCase().includes(lowercaseQuery) ||
             (product.type || '').toLowerCase().includes(lowercaseQuery) ||
             (product.collection || '').toLowerCase().includes(lowercaseQuery);
    });

    setSearchResults(results);
    setCurrentPage('search');
  };

  const renderPage = () => {
    const appProps = { addToCart, removeFromCart, updateQuantity, cartItems, toggleWishlist, isWishlisted };
    
    switch (currentPage) {
      case 'collections':
        return <Collections {...appProps} />;
      case 'new-arrivals':
        return <NewArrivals {...appProps} />;
      case 'bestsellers':
        return <Bestsellers {...appProps} />;
      case 'custom-design':
        return <CustomDesign />;
      case 'bags':
        return <Bags {...appProps} />;
      case 'specs':
        return <Specs {...appProps} />;
      case 'search':
        return <SearchResults searchQuery={searchQuery} searchResults={searchResults} addToCart={addToCart} onSearch={performSearch} />;
      default:
        return (
          <>
            <Welcome />
            <SearchBar onSearch={performSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button
                onClick={(e) => performSearch(searchQuery)}
                style={{
                  marginTop: '12px',
                  background: '#BFA46F',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 16px',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Search
              </button>
            </div>
            <div style={{ marginTop: '16px', marginLeft: 'clamp(16px, 4vw, 40px)', marginRight: 'clamp(16px, 4vw, 40px)', gap: 'clamp(24px, 5vw, 48px)', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
            <CuratedForYou {...appProps} setCurrentPage={setCurrentPage} />
            <div style={{ gap: 'clamp(16px, 3vw, 32px)', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'stretch' }}>
                <SideBar addToCart={addToCart} wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} />
                <div style={{ flexGrow: 1, flexBasis: '432px', gap: '32px', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                  <Appointments />
                  <LoyaltyGems />
                </div>
              </div>
              <QuickCheckout />
            </div>
            <JewelryShowcase3D addToCart={addToCart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} cartItems={cartItems} />
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
      <Footer onSearch={performSearch} setCurrentPage={setCurrentPage} />
      <ProductDetailModal 
        product={modalProduct}
        isOpen={!!modalProduct}
        onClose={() => setModalProduct(null)}
        addToCart={addToCart}
        toggleWishlist={toggleWishlist}
        isWishlisted={isWishlisted}
      />
    </div>
  );
}

export default App;