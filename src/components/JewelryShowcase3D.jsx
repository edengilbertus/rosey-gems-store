import React from "react";
import { JewelryCard3D } from "./JewelryCard3D";

export const JewelryShowcase3D = ({ addToCart }) => {
  const jewelryItems = [
    {
      id: 101,
      title: 'Cartoon Charm Tote',
      description: 'Cute cartoon-accent tote with multi-pocket front and charm',
      price: 'UGX 40,000',
      image: `${process.env.PUBLIC_URL}/assets/totes/cartoon-charm-tote.jpg`
    },
    {
      id: 102,
      title: 'Urban Nylon Tote - Charcoal',
      description: 'Water-resistant nylon tote with utility pockets',
      price: 'UGX 40,000',
      image: `${process.env.PUBLIC_URL}/assets/totes/urban-nylon-charcoal.jpg`
    },
    {
      id: 103,
      title: 'Urban Nylon Tote - Stone',
      description: 'Lightweight nylon tote in stone colorway',
      price: 'UGX 40,000',
      image: `${process.env.PUBLIC_URL}/assets/totes/urban-nylon-stone.jpg`
    }
  ];

  const handleAddToCart = (item) => {
    console.log('Adding to cart:', item);
    alert(`Added ${item.title} to cart!`);
  };

  const handleViewDetails = (item) => {
    console.log('Viewing details:', item);
    alert(`Viewing details for ${item.title}`);
  };

  return (
    <div style={{
      background: '#F9F5F0',
      minHeight: '100vh',
      padding: 'clamp(20px, 5vw, 40px)'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h2 style={{
          color: '#0F0F0F',
          fontSize: 'clamp(24px, 4vw, 32px)',
          fontWeight: 700,
          marginBottom: '16px'
        }}>
          Featured Collection
        </h2>
        <p style={{
          color: 'rgba(15, 15, 15, 0.7)',
          fontSize: 'clamp(14px, 2.5vw, 16px)',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Explore our featured tote collection.
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'clamp(20px, 4vw, 40px)',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {jewelryItems.map((item) => (
          <JewelryCard3D
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
            product={item}
            addToCart={addToCart}
            onAddToCart={() => handleAddToCart(item)}
            onViewDetails={() => handleViewDetails(item)}
          />
        ))}
      </div>
    </div>
  );
};