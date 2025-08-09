import React from 'react';
import './Footer.css';

const Footer = ({ onSearch, setCurrentPage }) => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = '256778701307';
  const whatsappText = encodeURIComponent("Hi Rosey, I'd like to place an order");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="footer-col-title">Shop</div>
            <div className="footer-link" style={{cursor:'pointer'}} onClick={() => onSearch && onSearch('Ring')}>Rings</div>
            <div className="footer-link" style={{cursor:'pointer'}} onClick={() => onSearch && onSearch('Necklace')}>Necklaces</div>
            <div className="footer-link" style={{cursor:'pointer'}} onClick={() => onSearch && onSearch('Earrings')}>Earrings</div>
            <div className="footer-link" style={{cursor:'pointer'}} onClick={() => onSearch && onSearch('Bracelet')}>Bracelets</div>
          </div>
          <div>
            <div className="footer-col-title">Customer Care</div>
            <div className="footer-link">Contact Us</div>
            <div className="footer-link" style={{cursor:'pointer'}} onClick={() => setCurrentPage && setCurrentPage('bags')}>Shipping &amp; Returns</div>
            <div className="footer-link" style={{cursor:'pointer'}} onClick={() => onSearch && onSearch('Care Guide')}>Care Guide</div>
            <div className="footer-link" style={{cursor:'pointer'}} onClick={() => onSearch && onSearch('FAQ')}>FAQ</div>
          </div>
          <div>
            <div className="footer-col-title">Follow Us</div>
            <div className="footer-link">TikTok @roseygems</div>
            <a className="footer-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'rgba(255,255,255,0.7)'}}>WhatsApp</a>
            <a className="footer-link" href="https://www.instagram.com/roseygems" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'rgba(255,255,255,0.7)'}}>Instagram</a>
          </div>
          <div>
            <div className="footer-col-title">About</div>
            <div className="footer-link">Exquisite jewelry for life's most precious moments.</div>
            <a className="footer-link" href="tel:+256778701307" style={{textDecoration:'none', color:'#BFA46F', fontWeight:600}}>+256 778 701307</a>
            <div className="footer-link" style={{marginTop: '8px'}}>Address</div>
            <a className="footer-link" href="https://maps.google.com/?q=Maricah%20Centrum%20Building%20Wandegeya%20Kampala" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'rgba(255,255,255,0.7)'}}>
              Wandegeya Kampala (U), Nkinzi road, Maricah Centrum Building, RM A6-7
            </a>
            <div className="footer-map">
              <iframe
                title="RoseyGems Location"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Maricah%20Centrum%20Building%20Wandegeya%20Kampala&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div style={{color:'rgba(255,255,255,0.5)'}}>{`© ${currentYear} RoseyGems. All rights reserved.`}</div>
        <div className="footer-inline">
          <div>Privacy Policy</div>
          <div>Terms of Service</div>
          <div>Accessibility</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
