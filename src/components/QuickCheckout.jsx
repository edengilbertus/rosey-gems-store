import React, { useState } from 'react';
import './QuickCheckout.css';

const QuickCheckout = () => {
  const [giftMessage, setGiftMessage] = useState(localStorage.getItem('giftMessage') || '');
  const [selectedPayment, setSelectedPayment] = useState(localStorage.getItem('selectedPayment') || '');
  const [shippingMethod, setShippingMethod] = useState(localStorage.getItem('shippingMethod') || 'express');
  const [phone, setPhone] = useState(localStorage.getItem('momoPhone') || '');

  const persist = (k, v) => { try { localStorage.setItem(k, v); } catch {} };

  const handleCompletePurchase = () => {
    const summary = {
      payment: selectedPayment,
      giftMessage: giftMessage ? 'Yes' : 'No',
      shipping: shippingMethod,
      momoPhone: selectedPayment === 'mtn-momo' ? phone : undefined
    };
    alert(`Order Summary\nPayment: ${summary.payment}\nShipping: ${summary.shipping}\nGift Message: ${summary.giftMessage}\n${summary.momoPhone ? 'MTN MoMo: '+summary.momoPhone : ''}`);
  };

  const handleContactConcierge = () => {
    console.log('Contacting concierge...');
    alert('Call us at +256 778 701307 for personalized assistance');
  };

  return (
    <div style={{
      background: '#0F0F0F', 
      boxShadow: '0px 4px 6px -4px rgba(0, 0, 0, 0.10), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)', 
      borderRadius: '12px', 
      padding: 'clamp(16px, 4vw, 32px)', 
      overflow: 'hidden', 
      gap: '16px', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'stretch'
    }}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div style={{
          color: '#FFFFFF', 
          fontSize: 'clamp(20px, 3vw, 24px)', 
          fontWeight: 600, 
          lineHeight: '1.3'
        }}>
          Quick Checkout
        </div>
      </div>
      
      <div style={{
        marginTop: '8px', 
        gap: 'clamp(16px, 5vw, 48px)', 
        display: 'flex', 
        flexDirection: window.innerWidth < 768 ? 'column' : 'row', 
        alignItems: 'stretch'
      }}>
        <div style={{
          color: '#FFFFFF', 
          fontSize: 'clamp(16px, 2.5vw, 18px)', 
          fontWeight: 500, 
          minWidth: '120px'
        }}>
          Payment Methods
        </div>
        <div style={{
          color: '#FFFFFF', 
          fontSize: 'clamp(16px, 2.5vw, 18px)', 
          fontWeight: 500,
          minWidth: '100px'
        }}>
          Gift Options
        </div>
        <div style={{
          color: '#FFFFFF', 
          fontSize: 'clamp(16px, 2.5vw, 18px)', 
          fontWeight: 500,
          minWidth: '80px'
        }}>
          Shipping
        </div>
      </div>
      <div style={{
        gap: 'clamp(12px, 3vw, 24px)', 
        display: 'flex', 
        flexDirection: window.innerWidth < 1024 ? 'column' : 'row', 
        alignItems: 'stretch'
      }}>
        {/* Payment Methods Column */}
        <div style={{gap: '16px', display: 'flex', flexDirection: 'column', alignItems: 'stretch', flex: '1'}}>
          <div style={{gap: '12px', display: 'flex', flexDirection: 'row', alignItems: 'stretch', flexWrap: 'wrap'}}>
            <button 
              onClick={() => setSelectedPayment('apple')}
              onBlur={() => persist('selectedPayment', 'apple')}
              style={{
                background: selectedPayment === 'apple' ? '#FFFFFF' : '#2A2A2A', 
                borderRadius: '8px', 
                display: 'flex', 
                minWidth: '100px', 
                gap: '8px', 
                alignItems: 'center', 
                flexDirection: 'row', 
                padding: '12px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <div className="image" style={{
                backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9cf054e5-394848b1-4558-46b7-9d0f-64a8021e9f3f.svg')", 
                '--svg-fill-colors': 'rgb(0, 0, 0)', 
                width: '20px', 
                height: '20px', 
                backgroundSize: 'cover'
              }}></div>
              <div style={{
                color: selectedPayment === 'apple' ? '#000000' : '#FFFFFF', 
                fontSize: 'clamp(12px, 2vw, 14px)',
                lineHeight: '20px'
              }}>
                Apple Pay
              </div>
            </button>
            
            <button 
              onClick={() => setSelectedPayment('google')}
              onBlur={() => persist('selectedPayment', 'google')}
              style={{
                background: selectedPayment === 'google' ? '#FFFFFF' : '#1E1E1E', 
                borderRadius: '8px', 
                display: 'flex', 
                minWidth: '100px', 
                gap: '8px', 
                alignItems: 'center', 
                flexDirection: 'row', 
                padding: '12px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <div className="image" style={{
                backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9cf0a6be-26364134-b121-44aa-89e3-332bdd13dbd8.svg')", 
                '--svg-fill-colors': selectedPayment === 'google' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)', 
                width: '20px', 
                height: '16px', 
                backgroundSize: 'cover'
              }}></div>
              <div style={{
                color: selectedPayment === 'google' ? '#000000' : '#FFFFFF', 
                fontSize: 'clamp(12px, 2vw, 14px)',
                lineHeight: '20px'
              }}>
                Google Pay
              </div>
            </button>
            
            <button 
              onClick={() => setSelectedPayment('crypto')}
              onBlur={() => persist('selectedPayment', 'crypto')}
              style={{
                background: selectedPayment === 'crypto' ? '#FFFFFF' : '#1E1E1E', 
                borderRadius: '8px', 
                display: 'flex', 
                minWidth: '100px', 
                gap: '8px', 
                alignItems: 'center', 
                flexDirection: 'row', 
                padding: '12px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <div className="image" style={{
                backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9cf20442-b328697a-aa9c-40fd-9783-9b8bd7bcee86.svg')", 
                '--svg-fill-colors': selectedPayment === 'crypto' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)', 
                width: '20px', 
                height: '20px', 
                backgroundSize: 'cover'
              }}></div>
              <div style={{
                color: selectedPayment === 'crypto' ? '#000000' : '#FFFFFF', 
                fontSize: 'clamp(12px, 2vw, 14px)',
                lineHeight: '20px'
              }}>
                Crypto
              </div>
            </button>

            <button 
              onClick={() => setSelectedPayment('mtn-momo')}
              onBlur={() => persist('selectedPayment', 'mtn-momo')}
              style={{
                background: selectedPayment === 'mtn-momo' ? '#FFFFFF' : '#1E1E1E', 
                borderRadius: '8px', 
                display: 'flex', 
                minWidth: '140px', 
                gap: '8px', 
                alignItems: 'center', 
                flexDirection: 'row', 
                padding: '12px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <div className="image" style={{
                backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/4/4d/MTN-Logo.png')",
                width: '20px', 
                height: '20px', 
                backgroundSize: 'cover',
                backgroundColor: '#fff',
                borderRadius: 4
              }}></div>
              <div style={{
                color: selectedPayment === 'mtn-momo' ? '#000000' : '#FFFFFF', 
                fontSize: 'clamp(12px, 2vw, 14px)',
                lineHeight: '20px'
              }}>
                MTN Mobile Money
              </div>
            </button>

            {selectedPayment === 'mtn-momo' && (
              <div style={{ width: '100%', marginTop: 8, display:'flex', gap:8, alignItems:'center' }}>
                <input
                  type="tel"
                  placeholder="Enter MTN MoMo number"
                  value={phone}
                  onChange={(e)=>{ setPhone(e.target.value); persist('momoPhone', e.target.value); }}
                  style={{ flex:1, padding:'8px 12px', borderRadius:6, border:'1px solid rgba(255,255,255,0.2)', background:'#2A2A2A', color:'#fff' }}
                />
                <button onClick={()=>alert('MoMo number verified')} style={{ background:'#BFA46F', border:'none', color:'#fff', borderRadius:6, padding:'8px 12px', cursor:'pointer' }}>Verify</button>
              </div>
            )}
          </div>
          
          <button style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            padding: '8px 0'
          }}>
            <div className="image" style={{
              backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9cf1f0f8-c76131ca-7edb-4ffe-84ba-3eb5f687fa62.svg')", 
              '--svg-fill-colors': 'rgb(191, 164, 111)', 
              width: '16px', 
              height: '14.22px', 
              backgroundSize: 'cover'
            }}></div>
            <div style={{
              color: '#BFA46F', 
              fontSize: 'clamp(12px, 2vw, 14px)',
              lineHeight: '20px'
            }}>
              Add Payment Method
            </div>
          </button>
        </div>

        {/* Gift Options Column */}
        <div style={{
          background: '#1E1E1E', 
          borderRadius: '8px', 
          padding: '12px', 
          gap: '8px', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'stretch',
          flex: '1'
        }}>
          <div style={{color: '#FFFFFF', lineHeight: '20px', fontSize: 'clamp(14px, 2vw, 16px)'}}>
            Add Gift Message
          </div>
          <textarea
            value={giftMessage}
            onChange={(e) => { setGiftMessage(e.target.value); persist('giftMessage', e.target.value); }}
            placeholder="Write your personalized message here..."
            style={{
              background: '#2A2A2A', 
              borderRadius: '6px', 
              border: 'none',
              outline: 'none',
              color: '#FFFFFF',
              fontSize: 'clamp(12px, 2vw, 14px)',
              lineHeight: '20px',
              padding: '14px 8px',
              minHeight: '60px',
              resize: 'vertical',
              '::placeholder': {
                color: '#9CA3AF'
              }
            }}
          />
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{
              color: '#BFA46F', 
              fontSize: '12px', 
              lineHeight: '16px'
            }}>
              Handwritten font available
            </div>
            <button style={{
              background: 'none',
              border: 'none',
              color: 'rgba(255, 255, 255, 0.70)', 
              fontSize: '12px', 
              lineHeight: '16px',
              cursor: 'pointer'
            }}>
              Preview
            </button>
          </div>
        </div>

        {/* Shipping Column */}
        <div style={{gap: '16px', display: 'flex', flexDirection: 'column', alignItems: 'stretch', flex: '1'}}>
          <div style={{
            background: '#1E1E1E', 
            borderRadius: '8px', 
            padding: '12px', 
            gap: '4px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'stretch'
          }}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <div style={{
                color: '#FFFFFF', 
                fontWeight: 500, 
                fontSize: 'clamp(14px, 2vw, 16px)',
                lineHeight: '20px'
              }}>
                Insured Express
              </div>
              <div style={{
                background: '#BFA46F', 
                borderRadius: '9999px', 
                padding: '2px 8px'
              }}>
                <div style={{
                  color: '#FFFFFF', 
                  fontSize: '12px', 
                  lineHeight: '16px'
                }}>
                  Recommended
                </div>
              </div>
            </div>
            
            <div style={{
              color: 'rgba(255, 255, 255, 0.70)', 
              fontSize: '12px', 
              lineHeight: '16px'
            }}>
              Delivery in 2-3 business days
            </div>
            
            <div style={{marginTop: '8px', gap: '8px', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <div className="image" style={{
                backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9cf218a1-64d1d4bc-5316-4338-89e2-f3fe36a97047.svg')", 
                '--svg-fill-colors': 'rgb(191, 164, 111)', 
                width: '16px', 
                height: '16px', 
                backgroundSize: 'cover'
              }}></div>
              <div style={{
                color: '#FFFFFF', 
                fontSize: '12px', 
                lineHeight: '16px'
              }}>
                Worldwide tracking available
              </div>
            </div>
          </div>
          
          <div style={{ display:'flex', gap:8 }}>
            <button onClick={()=>{ setShippingMethod('express'); persist('shippingMethod','express'); }} style={{ background: shippingMethod==='express' ? '#BFA46F' : 'transparent', border:'1px solid #BFA46F', color:'#fff', borderRadius:6, padding:'8px 12px', cursor:'pointer' }}>Express</button>
            <button onClick={()=>{ setShippingMethod('standard'); persist('shippingMethod','standard'); }} style={{ background: shippingMethod==='standard' ? '#BFA46F' : 'transparent', border:'1px solid #BFA46F', color:'#fff', borderRadius:6, padding:'8px 12px', cursor:'pointer' }}>Standard</button>
          </div>

          <button 
            onClick={handleCompletePurchase}
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
              fontSize: 'clamp(14px, 2.5vw, 16px)', 
              fontWeight: 500,
              lineHeight: '24px', 
              textAlign: 'center'
            }}>
              Complete Purchase
            </div>
          </button>
        </div>
      </div>
      <div className="independent-inner-border" style={{
        '--border-style': 'solid', 
        '--border-color': 'rgba(255, 255, 255, 0.10)', 
        '--border-width-top': '1px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        position: 'relative', 
        marginTop: '16px', 
        paddingTop: '20px'
      }}>
        <div style={{gap: '8px', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <div className="image" style={{
            backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9cf36660-596a4e3d-45fe-4a3b-99ca-68706c4a84e6.svg')", 
            '--svg-fill-colors': 'rgb(191, 164, 111)', 
            width: '24px', 
            height: '24px', 
            backgroundSize: 'cover'
          }}></div>
          <div style={{
            color: '#FFFFFF', 
            fontSize: 'clamp(12px, 2vw, 14px)',
            lineHeight: '20px'
          }}>
            All purchases include Certificate of Authenticity
          </div>
        </div>
        
        <div style={{
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            color: 'rgba(255, 255, 255, 0.70)', 
            fontSize: 'clamp(12px, 2vw, 14px)',
            lineHeight: '20px'
          }}>
            Need help?
          </div>
          <button 
            onClick={handleContactConcierge}
            style={{
              background: 'none',
              border: 'none',
              color: '#BFA46F', 
              fontSize: 'clamp(12px, 2vw, 14px)',
              lineHeight: '20px', 
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
          >
            Contact concierge
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickCheckout;
