import React from 'react';
import './Welcome.css';

const Welcome = () => {
  return (
    <div>
      <div style={{marginTop: '24px', display: 'flex', alignItems: 'flex-start', minHeight: '40px', paddingLeft: '40px'}}>
        <div style={{color: '#0F0F0F', fontSize: '36px', fontWeight: 700, lineHeight: '40px', width: '344px', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '40px'}}>
          Welcome back, Maya
        </div>
      </div>
      <div style={{display: 'flex', alignItems: 'flex-start', minHeight: '28px', paddingLeft: '40px'}}>
        <div style={{color: 'rgba(15, 15, 15, 0.80)', fontSize: '18px', lineHeight: '28px', width: '368px', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '28px'}}>
          Explore your personalized jewelry experience
        </div>
      </div>
    </div>
  );
};

export default Welcome;
