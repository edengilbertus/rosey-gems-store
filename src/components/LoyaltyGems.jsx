import React, { useEffect, useState } from 'react';
import './LoyaltyGems.css';

const LoyaltyGems = () => {
  const [points, setPoints] = useState(() => {
    try { return parseInt(localStorage.getItem('loyaltyPoints') || '1450', 10); } catch { return 1450; }
  });
  const nextTier = 2000;
  const addPoints = (v) => setPoints(p => Math.max(0, p + v));
  useEffect(() => { try { localStorage.setItem('loyaltyPoints', String(points)); } catch {} }, [points]);
  const progress = Math.min(100, Math.round((points / nextTier) * 100));
  return (
    <div className="inner-border" style={{background: 'rgba(255, 255, 255, 0.70)', boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05), 0px 0px 0px 0px rgba(0, 0, 0, 0.00), 0px 0px 0px 0px rgba(0, 0, 0, 0.00)', backdropFilter: 'blur(12px)', '--border-style': 'solid', '--border-color': 'rgba(191, 164, 111, 0.10)', '--border-width': '1px', '--border-radius': '12px', gap: '4px', display: 'flex', flexDirection: 'column', alignItems: 'stretch', paddingLeft: '25px', paddingRight: '25px', paddingTop: '25px', paddingBottom: '28px'}}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div style={{gap: '8px', display: 'flex', flexDirection: 'row', alignItems: 'stretch'}}>
          <div className="image" data-resource-id="1982ccf9cee2808-6eabac67-8743-448d-b61f-da97f0b676a2.svg" style={{backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9cee2808-6eabac67-8743-448d-b61f-da97f0b676a2.svg')", '--svg-fill-colors': 'rgb(191, 164, 111)', width: '20px', height: '17.78px', marginTop: '5.11px', backgroundSize: 'cover'}}></div>
          <div style={{width: '123.54px', color: '#0F0F0F', fontSize: '20px', fontWeight: 600, lineHeight: '28px', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '28px'}}>
            Loyalty Gems
          </div>
        </div>
        <div style={{color: 'rgba(15, 15, 15, 0.70)', lineHeight: '20px', minHeight: '20px'}}>Gold Tier</div>
      </div>
      <div style={{marginTop: '12px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div style={{color: '#0F0F0F', lineHeight: '20px', width: '93px', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '20px'}}>
          Current Points
        </div>
        <div style={{color: '#0F0F0F', fontWeight: 500, lineHeight: '20px'}}>
          {points} / {nextTier}
        </div>
      </div>
      <div style={{background: '#F9F5F0', borderRadius: '9999px', overflow: 'hidden', marginTop: '4px'}}>
        <div style={{background: 'linear-gradient(90deg, #BFA46F 0%, #E8E4FF 100%)', width: `${progress}%`, height: '12px'}}></div>
      </div>
      <div style={{gap: '24px', display: 'flex', flexDirection: 'column', alignItems: 'stretch'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <div style={{color: '#0F0F0F', fontSize: '12px', lineHeight: '16px', width: '26px', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '16px'}}>
            Gold
          </div>
          <div style={{color: '#0F0F0F', fontSize: '12px', lineHeight: '16px', width: '49px', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '16px'}}>
            Platinum
          </div>
        </div>
        <div style={{background: '#F9F5F0', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', paddingLeft: '12px', paddingRight: '12px', paddingTop: '14.5px', paddingBottom: '12.0px'}}>
          <div style={{gap: '1px', display: 'flex', flexDirection: 'column', alignItems: 'stretch'}}>
            <div style={{color: '#0F0F0F', fontWeight: 500, lineHeight: '20px', width: '146px', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '20px'}}>
              Available Carat Credits
            </div>
            <div style={{width: '146px', marginTop: '0.5px', display: 'flex', alignItems: 'flex-start', minHeight: '32px'}}>
              <div style={{color: '#BFA46F', fontSize: '24px', fontWeight: 700, lineHeight: '32px'}}> {points} pts </div>
            </div>
          </div>
          <button onClick={()=>addPoints(-200)} style={{background: '#BFA46F', color:'#fff', border:'none', borderRadius: 6, padding: '4px 12px', cursor:'pointer', marginTop: '11.5px'}}>Redeem</button>
        </div>
        <div style={{display: 'flex', alignItems: 'flex-start', minHeight: '20px'}}>
          <div style={{color: '#0F0F0F', fontWeight: 500, lineHeight: '20px', width: '123px', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '20px'}}>
            Upcoming Rewards
          </div>
        </div>
      </div>
      <div style={{marginTop: '8px', gap: '12px', display: 'flex', flexDirection: 'row', alignItems: 'stretch'}}>
        <div className="image" data-resource-id="1982ccf9ceeeb4b-620306ab-7443-442d-b0cc-ad8593d3ff0b.svg" style={{backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9ceeeb4b-620306ab-7443-442d-b0cc-ad8593d3ff0b.svg')", '--svg-fill-colors': 'rgb(191, 164, 111)', width: '32px', height: '32px', marginTop: '6px', backgroundSize: 'cover'}}></div>
        <div style={{gap: '5px', display: 'flex', flexDirection: 'column', alignItems: 'stretch'}}>
          <div style={{color: '#0F0F0F', fontWeight: 500, lineHeight: '20px', width: '156px', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '20px'}}>
            Free Gemstone Cleaning
          </div>
          <div style={{width: '156px', display: 'flex', alignItems: 'flex-start', minHeight: '16px'}}>
            <div style={{color: 'rgba(15, 15, 15, 0.70)', fontSize: '12px', lineHeight: '16px'}}> {Math.max(0, 100 - (points % 100))} points away </div>
          </div>
        </div>
      </div>
      <div style={{marginTop: '11px', gap: '12px', display: 'flex', flexDirection: 'row', alignItems: 'stretch'}}>
        <div className="image" data-resource-id="1982ccf9cefb48b-f5b6d79f-a290-4c74-ab6d-cb7a5e59a6b6.svg" style={{backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9cefb48b-f5b6d79f-a290-4c74-ab6d-cb7a5e59a6b6.svg')", '--svg-fill-colors': 'rgb(191, 164, 111)', width: '32px', height: '32px', marginTop: '6px', backgroundSize: 'cover'}}></div>
        <div style={{gap: '5px', display: 'flex', flexDirection: 'column', alignItems: 'stretch'}}>
          <div style={{color: '#0F0F0F', fontWeight: 500, lineHeight: '20px', width: '138px', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '20px'}}>
            Birthday Gift Voucher
          </div>
          <div style={{width: '138px', display: 'flex', alignItems: 'flex-start', minHeight: '16px'}}>
            <div style={{color: 'rgba(15, 15, 15, 0.70)', fontSize: '12px', lineHeight: '16px'}}> {Math.max(0, 300 - (points % 300))} points away </div>
          </div>
        </div>
      </div>
      <div style={{display:'flex', gap:8, marginTop:8}}>
        <button onClick={()=>addPoints(50)} style={{background:'transparent', border:'1px solid rgba(0,0,0,0.15)', padding:'6px 10px', borderRadius:6, cursor:'pointer'}}>Add 50 pts</button>
        <button onClick={()=>addPoints(200)} style={{background:'transparent', border:'1px solid rgba(0,0,0,0.15)', padding:'6px 10px', borderRadius:6, cursor:'pointer'}}>Add 200 pts</button>
      </div>
    </div>
  );
};

export default LoyaltyGems;
