import React, { useState } from 'react';
import './NecklaceLength.css';

const NecklaceLength = () => {
  const [selectedLength, setSelectedLength] = useState('18" Princess');
  
  const lengths = [
    { length: '16" Choker', size: '16"', name: 'Choker' },
    { length: '18" Princess', size: '18"', name: 'Princess' },
    { length: '24" Opera', size: '24"', name: 'Opera' }
  ];

  const selectedLengthData = lengths.find(l => l.length === selectedLength);

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
      display: 'flex', 
      gap: '16px', 
      flexDirection: 'column', 
      alignItems: 'stretch'
    }}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{gap: '8px', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <div className="image" style={{
            backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9ceaea94-71ed4ecd-a7e5-4c2c-8e69-24a591f0a8c7.svg')", 
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
            Necklace Length
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
      
      <div className="image" style={{
        borderRadius: '8px', 
        backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982c18855c57f3-9f12c023-eb92-4369-af35-0ce95251e078.jpeg')", 
        backgroundSize: 'cover', 
        width: '100%', 
        maxWidth: '240px', 
        height: 'clamp(180px, 30vw, 240px)', 
        margin: '0 auto', 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{
          background: 'rgba(0, 0, 0, 0.30)', 
          borderRadius: '8px', 
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{
            color: '#FFFFFF', 
            fontSize: 'clamp(20px, 4vw, 24px)', 
            fontWeight: 700, 
            marginBottom: '8px'
          }}>
            {selectedLengthData?.size}
          </div>
          <div style={{
            color: '#FFFFFF', 
            fontSize: 'clamp(14px, 2vw, 16px)',
            lineHeight: '1.2'
          }}>
            {selectedLengthData?.name}
          </div>
        </div>
      </div>
      
      <div style={{
        gap: 'clamp(4px, 1vw, 8px)', 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'stretch',
        flexWrap: 'wrap'
      }}>
        {lengths.map((length) => (
          <button
            key={length.length}
            onClick={() => setSelectedLength(length.length)}
            style={{
              background: selectedLength === length.length ? 'rgba(191, 164, 111, 0.10)' : 'transparent',
              border: `1px solid ${selectedLength === length.length ? '#BFA46F' : 'rgba(15, 15, 15, 0.10)'}`,
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexGrow: 1,
              minWidth: '80px',
              padding: '9px 8px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              if (selectedLength !== length.length) {
                e.target.style.backgroundColor = 'rgba(191, 164, 111, 0.05)';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedLength !== length.length) {
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            <div style={{
              color: selectedLength === length.length ? '#BFA46F' : '#0F0F0F',
              fontSize: 'clamp(10px, 1.5vw, 12px)',
              lineHeight: '16px',
              textAlign: 'center',
              fontWeight: selectedLength === length.length ? 600 : 400
            }}>
              {length.length}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NecklaceLength;
