import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export const JewelryCard3D = ({ 
  title = "Elegant Diamond Ring", 
  description = "Handcrafted with precision and adorned with premium diamonds",
  price = "UGX 9,065,000",
  image = "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3",
  onAddToCart,
  onViewDetails,
  product,
  addToCart
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-gradient-to-br from-white to-gray-50 relative group/card hover:shadow-2xl hover:shadow-amber-500/[0.1] border-amber-200/[0.3] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border backdrop-blur-sm"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)'
        }}
      >
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-gray-800"
          style={{ color: '#0F0F0F' }}
        >
          {title}
        </CardItem>
        
        <CardItem
          as="p"
          translateZ="60"
          className="text-gray-600 text-sm max-w-sm mt-2"
          style={{ color: 'rgba(15, 15, 15, 0.7)' }}
        >
          {description}
        </CardItem>
        
        <CardItem translateZ="100" className="w-full mt-4">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={image}
              height="400"
              width="400"
              className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-all duration-300 group-hover/card:scale-105"
              alt={title}
              style={{
                filter: 'brightness(1.05) contrast(1.1)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
          </div>
        </CardItem>
        
        <CardItem
          translateZ="40"
          className="mt-4 text-2xl font-bold"
          style={{ color: '#BFA46F' }}
        >
          {price}
        </CardItem>
        
        <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            as="button"
            onClick={onViewDetails}
            className="px-6 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
            style={{
              color: '#BFA46F',
              border: '1px solid #BFA46F',
              background: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(191, 164, 111, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            View Details →
          </CardItem>
          
          <CardItem
            translateZ={20}
            as="button"
            onClick={() => {
              const productToAdd = product || {
                id: Date.now(), // fallback ID
                name: title,
                title: title,
                price: price,
                image: image
              };
              if (addToCart) {
                addToCart(productToAdd);
              } else if (onAddToCart) {
                onAddToCart(productToAdd);
              }
            }}
            className="px-6 py-2 rounded-xl text-white text-sm font-bold transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: '#BFA46F'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#A68B5B';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#BFA46F';
            }}
          >
            Add to Cart
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};