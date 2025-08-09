import React from 'react';
import ProductCard from './ProductCard';

const eyewear = [
  { id: 301, name: 'Color Changing Anti Blue Light Glasses (Black)', price: 'UGX 25,000', type: 'Eyewear', image: `${process.env.PUBLIC_URL}/assets/eyewear/anti-blue-black.jpg`, tag: 'New', collection: 'Modern', description: 'Photochromic anti-blue light lenses in a sleek black metal frame.' },
  { id: 302, name: 'Color Changing Anti Blue Light Glasses (Gold)', price: 'UGX 25,000', type: 'Eyewear', image: `${process.env.PUBLIC_URL}/assets/eyewear/anti-blue-gold.jpg`, collection: 'Modern', description: 'Photochromic anti-blue light lenses in a refined gold frame.' },
  { id: 303, name: 'Color Changing Anti Blue Light Glasses (Alt)', price: 'UGX 25,000', type: 'Eyewear', image: `${process.env.PUBLIC_URL}/assets/eyewear/anti-blue-alt.jpg`, collection: 'Modern', description: 'Alternate colorway with the same blue light protection and color change.' },
  { id: 304, name: 'Photochromic Anti Blue Light Glasses', price: 'UGX 15,000', type: 'Eyewear',
    image: `${process.env.PUBLIC_URL}/assets/eyewear/image-8.jpg`,
    images: [
      `${process.env.PUBLIC_URL}/assets/eyewear/image-8.jpg`,
      `${process.env.PUBLIC_URL}/assets/eyewear/image-8.jpg`,
      `${process.env.PUBLIC_URL}/assets/eyewear/image-9.jpg`,
      `${process.env.PUBLIC_URL}/assets/eyewear/image-10.jpg`,
      `${process.env.PUBLIC_URL}/assets/eyewear/image-11.jpg`,
      `${process.env.PUBLIC_URL}/assets/eyewear/image-12.jpg`
    ],
    tag: 'New',
    collection: 'Modern',
    description: 'Photochromic anti-blue light lenses in bold cat-eye frames. Color options include red, pink/tortoise, white and black.'
  }
];

const Specs = (props) => {
  return (
    <div style={{ background: '#F9F5F0', minHeight: '100vh', paddingTop: '40px', paddingBottom: '40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 40px)' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ color: '#0F0F0F', fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 700, marginBottom: '12px' }}>Specs / Eye Wear</h1>
          <p style={{ color: 'rgba(15, 15, 15, 0.7)' }}>Premium sunglasses and optical frames to complement your style.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(20px, 4vw, 32px)' }}>
          {eyewear.map((p) => (
            <ProductCard key={p.id} product={p} {...props} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specs;
