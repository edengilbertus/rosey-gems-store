import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import './LatestHighlights.css';

const LatestHighlights = ({ products = [], onOpenProduct }) => {
  const latest = useMemo(() => {
    const withTagOrRecent = [...products]
      .filter(p => p && (p.tag === 'New' || typeof p.id === 'number'))
      .sort((a, b) => (b.id || 0) - (a.id || 0))
      .slice(0, 10);
    return withTagOrRecent;
  }, [products]);

  if (!latest.length) return null;

  return (
    <motion.div className="latest-wrap" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
      <div className="latest-header">
        <h2 className="latest-title">Latest Additions</h2>
        <div className="latest-sub">Fresh styles just arrived</div>
      </div>

      <div className="latest-track">
        {latest.map((p, idx) => (
          <motion.button
            key={p.id}
            className="latest-card"
            onClick={() => onOpenProduct && onOpenProduct(p)}
            title={p.name || p.title}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.35 }}
            viewport={{ once: true }}
          >
            <div className="latest-image" style={{ backgroundImage: `url(${p.image})` }} />
            <div className="latest-info">
              <div className="latest-name">{p.name || p.title}</div>
              <div className="latest-price">{p.price}</div>
            </div>
            <div className="latest-badge">New</div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default LatestHighlights;
