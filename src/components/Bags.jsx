import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './Bags.css';

const Bags = ({ addToCart, removeFromCart, updateQuantity, cartItems }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const bagProducts = [
    { 
      id: 14, 
      name: 'Designer Leather Handbag', 
      price: 'UGX 95,000', 
      type: 'Handbag', 
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', 
      tag: 'Luxury', 
      collection: 'Modern',
      description: 'Premium Italian leather handbag with gold-tone hardware'
    },
    {
      id: 101,
      name: 'Cartoon Charm Tote',
      price: 'UGX 40,000',
      type: 'Tote',
      image: `${process.env.PUBLIC_URL}/assets/totes/cartoon-charm-tote.jpg`,
      tag: 'New Arrival',
      collection: 'Casual',
      description: 'Cute cartoon-accent tote with multi-pocket front and detachable charm. Lightweight and perfect for daily carry.'
    },
    {
      id: 102,
      name: 'Urban Nylon Tote - Charcoal',
      price: 'UGX 40,000',
      type: 'Tote',
      image: `${process.env.PUBLIC_URL}/assets/totes/urban-nylon-charcoal.jpg`,
      collection: 'Urban',
      description: 'Water-resistant nylon tote with crossbody strap and external utility pockets for city commutes.'
    },
    {
      id: 103,
      name: 'Urban Nylon Tote - Stone',
      price: 'UGX 40,000',
      type: 'Tote',
      image: `${process.env.PUBLIC_URL}/assets/totes/urban-nylon-stone.jpg`,
      collection: 'Urban',
      description: 'Neutral stone colorway of our lightweight nylon tote with roomy compartments.'
    },
    {
      id: 104,
      name: 'Urban Nylon Tote - Taupe',
      price: 'UGX 40,000',
      type: 'Tote',
      image: `${process.env.PUBLIC_URL}/assets/totes/urban-nylon-taupe.jpg`,
      collection: 'Urban',
      description: 'Taupe variant with adjustable straps, side pockets, and compact pouch detail.'
    },
    { 
      id: 15, 
      name: 'Crocodile Clutch Bag', 
      price: 'UGX 85,000', 
      type: 'Clutch', 
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', 
      tag: 'Exclusive', 
      collection: 'Statement',
      description: 'Exotic crocodile leather evening clutch with crystal closure'
    },
    { 
      id: 16, 
      name: 'Vintage Leather Satchel', 
      price: 'UGX 66,600', 
      type: 'Satchel', 
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', 
      collection: 'Vintage',
      description: 'Classic vintage-inspired leather satchel with brass buckles'
    },
    { 
      id: 17, 
      name: 'Gold Chain Purse', 
      price: 'UGX 55,500', 
      type: 'Purse', 
      image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', 
      tag: 'Trendy', 
      collection: 'Classic',
      description: 'Elegant purse with gold chain strap and quilted pattern'
    },
    { 
      id: 18, 
      name: 'Designer Tote Bag', 
      price: 'UGX 74,000', 
      type: 'Tote', 
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', 
      collection: 'Modern',
      description: 'Spacious designer tote bag perfect for everyday elegance'
    },
    { 
      id: 19, 
      name: 'Evening Clutch with Crystals', 
      price: 'UGX 46,250', 
      type: 'Clutch', 
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3', 
      tag: 'Glamorous', 
      collection: 'Bridal',
      description: 'Stunning evening clutch adorned with Swarovski crystals'
    },
    {
      id: 26,
      name: 'Python Leather Shoulder Bag',
      price: 'UGX 95,000',
      type: 'Shoulder Bag',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
      tag: 'Exotic',
      collection: 'Statement',
      description: 'Luxurious python leather shoulder bag with adjustable strap'
    },
    {
      id: 27,
      name: 'Silk Evening Bag',
      price: 'UGX 37,000',
      type: 'Evening Bag',
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
      tag: 'Elegant',
      collection: 'Bridal',
      description: 'Delicate silk evening bag with pearl and crystal detailing'
    },
    {
      id: 28,
      name: 'Canvas Weekend Tote',
      price: 'UGX 27,750',
      type: 'Tote',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
      collection: 'Modern',
      description: 'Stylish canvas and leather weekend tote bag'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Bags', count: bagProducts.length },
    { id: 'handbag', name: 'Handbags', count: bagProducts.filter(p => p.type === 'Handbag').length },
    { id: 'clutch', name: 'Clutches', count: bagProducts.filter(p => p.type === 'Clutch' || p.type === 'Evening Bag').length },
    { id: 'tote', name: 'Totes', count: bagProducts.filter(p => p.type === 'Tote').length },
    { id: 'shoulder', name: 'Shoulder Bags', count: bagProducts.filter(p => p.type === 'Shoulder Bag' || p.type === 'Satchel' || p.type === 'Purse').length }
  ];

  const getFilteredProducts = () => {
    if (activeCategory === 'all') return bagProducts;
    if (activeCategory === 'handbag') return bagProducts.filter(p => p.type === 'Handbag');
    if (activeCategory === 'clutch') return bagProducts.filter(p => p.type === 'Clutch' || p.type === 'Evening Bag');
    if (activeCategory === 'tote') return bagProducts.filter(p => p.type === 'Tote');
    if (activeCategory === 'shoulder') return bagProducts.filter(p => p.type === 'Shoulder Bag' || p.type === 'Satchel' || p.type === 'Purse');
    return bagProducts;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="bags-container">
      <div className="bags-header">
        <div className="bags-title-section">
          <h1 className="bags-title">Luxury Bags Collection</h1>
          <p className="bags-subtitle">
            Discover our exquisite selection of handcrafted luxury bags, designed to complement your jewelry collection with timeless elegance.
          </p>
        </div>
        
        <div className="bags-stats">
          <div className="stat-item">
            <span className="stat-number">{bagProducts.length}</span>
            <span className="stat-label">Premium Bags</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5</span>
            <span className="stat-label">Categories</span>
          </div>
        </div>
      </div>

      <div className="bags-filters">
        <div className="filter-categories">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
            >
              {category.name}
              <span className="filter-count">({category.count})</span>
            </button>
          ))}
        </div>
      </div>

      <div className="bags-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="bag-card-wrapper">
            <ProductCard
              product={product}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
              cartItems={cartItems}
            />
          </div>
        ))}
      </div>

      <div className="bags-footer">
        <div className="luxury-badge">
          <div className="badge-icon">👜</div>
          <div className="badge-text">
            <h3>Handcrafted Excellence</h3>
            <p>Each bag is meticulously crafted using the finest materials and traditional techniques</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bags;