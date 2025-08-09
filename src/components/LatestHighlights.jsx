import React, { useMemo } from 'react';
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
    <div className="latest-wrap">
      <div className="latest-header">
        <h2 className="latest-title">Latest Additions</h2>
        <div className="latest-sub">Fresh styles just arrived</div>
      </div>

      <div className="latest-track">
        {latest.map((p) => (
          <button
            key={p.id}
            className="latest-card"
            onClick={() => onOpenProduct && onOpenProduct(p)}
            title={p.name || p.title}
          >
            <div className="latest-image" style={{ backgroundImage: `url(${p.image})` }} />
            <div className="latest-info">
              <div className="latest-name">{p.name || p.title}</div>
              <div className="latest-price">{p.price}</div>
            </div>
            <div className="latest-badge">New</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LatestHighlights;
