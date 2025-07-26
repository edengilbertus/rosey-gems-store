import React from "react";
import { JewelryCard3D } from "./JewelryCard3D";

export const JewelryShowcase3D = ({ addToCart }) => {
  const jewelryItems = [
    {
      id: 1,
      title: "Diamond Solitaire Ring",
      description: "Classic elegance with a brilliant cut diamond centerpiece",
      price: "UGX 10,543,750",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "Pearl Drop Earrings",
      description: "Luxurious freshwater pearls with gold accents",
      price: "UGX 3,311,250",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 3,
      title: "Emerald Tennis Bracelet",
      description: "Stunning emerald stones in an elegant tennis setting",
      price: "UGX 11,840,000",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3"
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
          Experience our handcrafted jewelry pieces with an immersive 3D preview. 
          Hover over each piece to explore the details.
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