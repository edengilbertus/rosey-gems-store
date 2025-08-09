import React, { useState } from 'react';
import ARRingSizer from './ARRingSizer';
import './RingSizer.css';

const RingSizer = () => {
  const [currentSize, setCurrentSize] = useState(7);
  
  const ringSizes = [
    { size: 4, mm: 14.9 },
    { size: 4.5, mm: 15.3 },
    { size: 5, mm: 15.7 },
    { size: 5.5, mm: 16.1 },
    { size: 6, mm: 16.5 },
    { size: 6.5, mm: 16.9 },
    { size: 7, mm: 17.3 },
    { size: 7.5, mm: 17.7 },
    { size: 8, mm: 18.1 },
    { size: 8.5, mm: 18.5 },
    { size: 9, mm: 18.9 },
    { size: 9.5, mm: 19.3 },
    { size: 10, mm: 19.7 },
  ];

  const currentRing = ringSizes.find(ring => ring.size === currentSize);

  const decreaseSize = () => {
    const currentIndex = ringSizes.findIndex(ring => ring.size === currentSize);
    if (currentIndex > 0) {
      setCurrentSize(ringSizes[currentIndex - 1].size);
    }
  };

  const increaseSize = () => {
    const currentIndex = ringSizes.findIndex(ring => ring.size === currentSize);
    if (currentIndex < ringSizes.length - 1) {
      setCurrentSize(ringSizes[currentIndex + 1].size);
    }
  };

  const [arOpen, setArOpen] = useState(false);
  const handleARSizing = () => setArOpen(true);
  const handleARConfirm = (size) => {
    setCurrentSize(size.size);
    setArOpen(false);
  };

  return (
    <div className="inner-border" style={{
      background: 'rgba(255, 255, 255, 0.70)', 
      boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)', 
      backdropFilter: 'blur(12px)', 
      '--border-style': 'solid', 
      '--border-color': 'rgba(191, 164, 111, 0.10)', 
      '--border-width': '1px', 
      '--border-radius': '12px', 
      padding: 'clamp(16px, 3vw, 25px)', 
      gap: '16px', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'stretch'
    }}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div style={{gap: '8px', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <div className="image" style={{
            backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9ce8ab5c-179eb39f-e4b3-4af6-9fbb-5e79db2c99f9.svg')", 
            '--svg-fill-colors': 'rgb(191, 164, 111)', 
            width: '20px', 
            height: '20px', 
            backgroundSize: 'cover'
          }}></div>
          <div style={{
            color: '#0F0F0F', 
            fontSize: 'clamp(16px, 2.5vw, 20px)', 
            fontWeight: 600, 
            lineHeight: '1.4'
          }}>
            Ring Sizer
          </div>
        </div>
        <div className="image" style={{
          backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9ce8de81-4721590a-edb1-4083-970f-a40dd0ebbb6c.svg')", 
          '--svg-fill-colors': 'rgb(191, 164, 111)', 
          width: '16px', 
          height: '16px', 
          backgroundSize: 'cover'
        }}></div>
      </div>
      
      <div style={{
        background: '#F9F5F0', 
        borderRadius: '8px', 
        padding: '16px', 
        display: 'flex', 
        gap: '8px', 
        flexDirection: 'column', 
        alignItems: 'stretch'
      }}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <div style={{color: '#0F0F0F', fontWeight: 500, fontSize: '14px'}}>
            US Size
          </div>
          <div style={{color: '#0F0F0F', fontWeight: 500, fontSize: '14px'}}>
            mm
          </div>
        </div>
        
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <button 
            onClick={decreaseSize}
            style={{
              background: 'none', 
              border: '1px solid rgba(191, 164, 111, 0.30)', 
              borderRadius: '50%', 
              padding: '8px', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div className="image" style={{
              backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9ce948cd-c4df5709-88e0-4d6f-8c0c-12fac516af7b.svg')", 
              '--svg-fill-colors': 'rgb(15, 15, 15)', 
              width: '16px', 
              height: '16px', 
              backgroundSize: 'cover'
            }}></div>
          </button>
          
          <div style={{
            color: '#BFA46F', 
            fontSize: 'clamp(24px, 4vw, 30px)', 
            fontWeight: 700, 
            textAlign: 'center'
          }}>
            {currentSize}
          </div>
          
          <div style={{
            color: 'rgba(15, 15, 15, 0.60)', 
            fontSize: 'clamp(16px, 2.5vw, 20px)', 
            fontWeight: 500,
            textAlign: 'center'
          }}>
            {currentRing?.mm}mm
          </div>
          
          <button 
            onClick={increaseSize}
            style={{
              background: 'none', 
              border: '1px solid rgba(191, 164, 111, 0.30)', 
              borderRadius: '50%', 
              padding: '8px', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div className="image" style={{
              backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9ceaff52-de6f6226-7c5e-495a-8b56-f01eb26805c3.svg')", 
              '--svg-fill-colors': 'rgb(15, 15, 15)', 
              width: '16px', 
              height: '16px', 
              backgroundSize: 'cover'
            }}></div>
          </button>
        </div>
      </div>
      
      <div className="image" style={{
        borderRadius: '8px', 
        backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982c18855c0454-346d1968-f99a-44d7-8000-71a26b662699.jpeg')", 
        backgroundSize: 'cover', 
        width: '100%', 
        maxWidth: '192px', 
        height: '128px', 
        marginLeft: 'auto', 
        marginRight: 'auto'
      }}></div>
      
      <button 
        onClick={handleARSizing}
        style={{
          background: '#BFA46F', 
          borderRadius: '6px', 
          border: 'none', 
          cursor: 'pointer', 
          padding: '12px 16px',
          transition: 'background-color 0.2s ease'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#A68B5B'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#BFA46F'}
      >
        <div style={{
          color: '#FFFFFF', 
          fontSize: '16px', 
          fontWeight: 500,
          lineHeight: '24px', 
          textAlign: 'center'
        }}>
          Try AR Sizing
        </div>
      </button>
      <ARRingSizer open={arOpen} onClose={() => setArOpen(false)} onConfirm={handleARConfirm} />
    </div>
  );
};

export default RingSizer;
