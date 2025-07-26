import React, { useState } from 'react';

const CustomDesign = () => {
  const [selectedCategory, setSelectedCategory] = useState('ring');
  const [selectedMetal, setSelectedMetal] = useState('gold');
  const [selectedStone, setSelectedStone] = useState('diamond');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const categories = [
    { id: 'ring', name: 'Ring', price: 'From UGX 3,700,000' },
    { id: 'necklace', name: 'Necklace', price: 'From UGX 2,775,000' },
    { id: 'earrings', name: 'Earrings', price: 'From UGX 1,850,000' },
    { id: 'bracelet', name: 'Bracelet', price: 'From UGX 2,220,000' }
  ];

  const metals = [
    { id: 'gold', name: '18K Gold', price: '+UGX 925,000' },
    { id: 'white-gold', name: '18K White Gold', price: '+UGX 1,110,000' },
    { id: 'platinum', name: 'Platinum', price: '+UGX 1,850,000' },
    { id: 'rose-gold', name: '18K Rose Gold', price: '+UGX 1,110,000' }
  ];

  const stones = [
    { id: 'diamond', name: 'Diamond', price: '+UGX 3,700,000' },
    { id: 'emerald', name: 'Emerald', price: '+UGX 2,775,000' },
    { id: 'ruby', name: 'Ruby', price: '+UGX 2,590,000' },
    { id: 'sapphire', name: 'Sapphire', price: '+UGX 2,220,000' },
    { id: 'pearl', name: 'Pearl', price: '+UGX 925,000' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your custom design request! We will contact you within 24 hours.');
  };

  return (
    <div style={{
      background: '#F9F5F0',
      minHeight: '100vh',
      paddingTop: '40px',
      paddingBottom: '40px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 clamp(16px, 4vw, 40px)'
      }}>
        {/* Header Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '48px'
        }}>
          <h1 style={{
            color: '#0F0F0F',
            fontSize: 'clamp(28px, 5vw, 40px)',
            fontWeight: 700,
            marginBottom: '16px',
            letterSpacing: '-0.5px'
          }}>
            Custom Design
          </h1>
          <p style={{
            color: 'rgba(15, 15, 15, 0.7)',
            fontSize: 'clamp(14px, 2.5vw, 18px)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Create your dream jewelry piece with our master craftsmen. From concept to creation, we'll bring your vision to life with exceptional quality and attention to detail.
          </p>
        </div>

        {/* Process Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          {[
            { step: '01', title: 'Consultation', desc: 'Share your vision and preferences with our design experts' },
            { step: '02', title: 'Design', desc: 'Receive detailed sketches and 3D renderings of your piece' },
            { step: '03', title: 'Approval', desc: 'Review and approve the final design before crafting begins' },
            { step: '04', title: 'Creation', desc: 'Our master craftsmen bring your design to life with precision' }
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(12px)',
                borderRadius: '12px',
                border: '1px solid rgba(191, 164, 111, 0.2)',
                padding: '24px',
                textAlign: 'center',
                position: 'relative'
              }}
            >
              <div style={{
                background: '#BFA46F',
                color: '#FFFFFF',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                fontWeight: 700,
                margin: '0 auto 16px'
              }}>
                {item.step}
              </div>
              <h3 style={{
                color: '#0F0F0F',
                fontSize: '18px',
                fontWeight: 600,
                marginBottom: '8px'
              }}>
                {item.title}
              </h3>
              <p style={{
                color: 'rgba(15, 15, 15, 0.7)',
                fontSize: '14px',
                lineHeight: '1.5'
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'start'
        }}>
          {/* Design Configurator */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            border: '1px solid rgba(191, 164, 111, 0.2)',
            padding: '32px'
          }}>
            <h2 style={{
              color: '#0F0F0F',
              fontSize: '24px',
              fontWeight: 700,
              marginBottom: '24px'
            }}>
              Design Your Piece
            </h2>

            {/* Category Selection */}
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{
                color: '#0F0F0F',
                fontSize: '16px',
                fontWeight: 600,
                marginBottom: '12px'
              }}>
                Choose Category
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px'
              }}>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    style={{
                      background: selectedCategory === category.id ? '#BFA46F' : 'rgba(255, 255, 255, 0.5)',
                      border: '1px solid rgba(191, 164, 111, 0.3)',
                      borderRadius: '8px',
                      padding: '12px',
                      color: selectedCategory === category.id ? '#FFFFFF' : '#0F0F0F',
                      fontSize: '14px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{ fontWeight: 600 }}>{category.name}</div>
                    <div style={{ fontSize: '12px', opacity: 0.8 }}>{category.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Metal Selection */}
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{
                color: '#0F0F0F',
                fontSize: '16px',
                fontWeight: 600,
                marginBottom: '12px'
              }}>
                Select Metal
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px'
              }}>
                {metals.map((metal) => (
                  <button
                    key={metal.id}
                    onClick={() => setSelectedMetal(metal.id)}
                    style={{
                      background: selectedMetal === metal.id ? '#BFA46F' : 'rgba(255, 255, 255, 0.5)',
                      border: '1px solid rgba(191, 164, 111, 0.3)',
                      borderRadius: '8px',
                      padding: '12px',
                      color: selectedMetal === metal.id ? '#FFFFFF' : '#0F0F0F',
                      fontSize: '14px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{ fontWeight: 600 }}>{metal.name}</div>
                    <div style={{ fontSize: '12px', opacity: 0.8 }}>{metal.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Stone Selection */}
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{
                color: '#0F0F0F',
                fontSize: '16px',
                fontWeight: 600,
                marginBottom: '12px'
              }}>
                Choose Stone
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px'
              }}>
                {stones.map((stone) => (
                  <button
                    key={stone.id}
                    onClick={() => setSelectedStone(stone.id)}
                    style={{
                      background: selectedStone === stone.id ? '#BFA46F' : 'rgba(255, 255, 255, 0.5)',
                      border: '1px solid rgba(191, 164, 111, 0.3)',
                      borderRadius: '8px',
                      padding: '12px',
                      color: selectedStone === stone.id ? '#FFFFFF' : '#0F0F0F',
                      fontSize: '14px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{ fontWeight: 600 }}>{stone.name}</div>
                    <div style={{ fontSize: '12px', opacity: 0.8 }}>{stone.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Estimated Price */}
            <div style={{
              background: 'rgba(191, 164, 111, 0.1)',
              borderRadius: '8px',
              padding: '16px',
              textAlign: 'center'
            }}>
              <div style={{
                color: 'rgba(15, 15, 15, 0.7)',
                fontSize: '14px',
                marginBottom: '4px'
              }}>
                Estimated Starting Price
              </div>
              <div style={{
                color: '#BFA46F',
                fontSize: '24px',
                fontWeight: 700
              }}>
                UGX 8,140,000+
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            border: '1px solid rgba(191, 164, 111, 0.2)',
            padding: '32px'
          }}>
            <h2 style={{
              color: '#0F0F0F',
              fontSize: '24px',
              fontWeight: 700,
              marginBottom: '24px'
            }}>
              Start Your Custom Design
            </h2>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  color: '#0F0F0F',
                  fontSize: '14px',
                  fontWeight: 600,
                  marginBottom: '8px'
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid rgba(191, 164, 111, 0.3)',
                    borderRadius: '8px',
                    fontSize: '14px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  color: '#0F0F0F',
                  fontSize: '14px',
                  fontWeight: 600,
                  marginBottom: '8px'
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid rgba(191, 164, 111, 0.3)',
                    borderRadius: '8px',
                    fontSize: '14px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  color: '#0F0F0F',
                  fontSize: '14px',
                  fontWeight: 600,
                  marginBottom: '8px'
                }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid rgba(191, 164, 111, 0.3)',
                    borderRadius: '8px',
                    fontSize: '14px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  color: '#0F0F0F',
                  fontSize: '14px',
                  fontWeight: 600,
                  marginBottom: '8px'
                }}>
                  Budget Range (UGX)
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid rgba(191, 164, 111, 0.3)',
                    borderRadius: '8px',
                    fontSize: '14px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    boxSizing: 'border-box'
                  }}
                >
                  <option value="">Select budget range</option>
                  <option value="2-5M">2M - 5M UGX</option>
                  <option value="5-10M">5M - 10M UGX</option>
                  <option value="10-20M">10M - 20M UGX</option>
                  <option value="20M+">20M+ UGX</option>
                </select>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  color: '#0F0F0F',
                  fontSize: '14px',
                  fontWeight: 600,
                  marginBottom: '8px'
                }}>
                  Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid rgba(191, 164, 111, 0.3)',
                    borderRadius: '8px',
                    fontSize: '14px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    boxSizing: 'border-box'
                  }}
                >
                  <option value="">When do you need it?</option>
                  <option value="no-rush">No rush</option>
                  <option value="2-4weeks">2-4 weeks</option>
                  <option value="1-2weeks">1-2 weeks</option>
                  <option value="rush">Rush order (additional fees apply)</option>
                </select>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  color: '#0F0F0F',
                  fontSize: '14px',
                  fontWeight: 600,
                  marginBottom: '8px'
                }}>
                  Design Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  placeholder="Describe your vision, inspiration, or any specific requirements..."
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid rgba(191, 164, 111, 0.3)',
                    borderRadius: '8px',
                    fontSize: '14px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    boxSizing: 'border-box',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  background: '#BFA46F',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '16px',
                  color: '#FFFFFF',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#A68B5B';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#BFA46F';
                }}
              >
                Start My Custom Design
              </button>
            </form>

            <div style={{
              textAlign: 'center',
              marginTop: '16px',
              color: 'rgba(15, 15, 15, 0.6)',
              fontSize: '12px'
            }}>
              We'll contact you within 24 hours to discuss your project
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div style={{
          marginTop: '64px',
          textAlign: 'center'
        }}>
          <h3 style={{
            color: '#0F0F0F',
            fontSize: 'clamp(24px, 4vw, 32px)',
            fontWeight: 700,
            marginBottom: '32px'
          }}>
            Custom Design Gallery
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            {[
              'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400',
              'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400',
              'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400',
              'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=400'
            ].map((image, index) => (
              <div
                key={index}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  aspectRatio: '1/1'
                }}
              >
                <img
                  src={image}
                  alt={`Custom design ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDesign;