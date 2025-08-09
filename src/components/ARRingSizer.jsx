import React, { useEffect, useRef, useState } from 'react';

const sizeTable = [
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
  { size: 10.5, mm: 20.1 },
  { size: 11, mm: 20.5 },
  { size: 11.5, mm: 20.9 },
  { size: 12, mm: 21.3 }
];

function nearestSize(diameterMm) {
  let nearest = sizeTable[0];
  let minDiff = Math.abs(diameterMm - nearest.mm);
  for (const s of sizeTable) {
    const diff = Math.abs(diameterMm - s.mm);
    if (diff < minDiff) {
      nearest = s;
      minDiff = diff;
    }
  }
  return nearest;
}

export default function ARRingSizer({ open, onClose, onConfirm }) {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [diameterMm, setDiameterMm] = useState(17.3);
  const [error, setError] = useState('');

  useEffect(() => {
    async function start() {
      if (!open) return;
      setError('');
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
        streamRef.current = stream;
      } catch (e) {
        setError('Camera access denied. Adjust the ring using the slider.');
      }
    }
    start();
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(t => t.stop());
        streamRef.current = null;
      }
    };
  }, [open]);

  if (!open) return null;

  const size = nearestSize(diameterMm);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 2000,
      background: 'rgba(0,0,0,0.6)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      backdropFilter: 'blur(4px)'
    }}>
      <div className="independent-inner-border" style={{
        '--border-style': 'solid', '--border-color': 'rgba(255,255,255,0.15)', '--border-width': '1px',
        background: 'rgba(0,0,0,0.85)', borderRadius: 12, width: 'min(94vw, 720px)',
        color: '#fff', overflow: 'hidden'
      }}>
        <div style={{ padding: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 700 }}>AR Ring Sizer</div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: 18 }}>✕</button>
        </div>
        <div style={{ position: 'relative', background: '#000' }}>
          <video ref={videoRef} playsInline muted style={{ width: '100%', height: 'auto', display: error ? 'none' : 'block' }} />
          {error && (
            <div style={{ padding: 16, textAlign: 'center', color: 'rgba(255,255,255,0.8)' }}>{error}</div>
          )}
          {/* Physical-size overlay using CSS mm units */}
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none'
          }}>
            <div style={{
              width: `${diameterMm}mm`, height: `${diameterMm}mm`, borderRadius: '50%',
              border: '2px dashed rgba(191,164,111,0.9)', boxShadow: '0 0 0 200vmax rgba(0,0,0,0.25) inset'
            }} />
          </div>
        </div>
        <div style={{ padding: 16, display: 'grid', gap: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>Inner diameter</div>
            <div style={{ fontWeight: 700 }}>{diameterMm.toFixed(1)} mm · US {size.size}</div>
          </div>
          <input
            type="range"
            min={14.0}
            max={22.0}
            step={0.1}
            value={diameterMm}
            onChange={(e) => setDiameterMm(parseFloat(e.target.value))}
          />
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>
            Tip: Place your ring against the screen and adjust until the circle fits the inner edge. For higher accuracy, ensure system display scaling is 100%.
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
            <button onClick={onClose} style={{ background: 'transparent', border: '1px solid rgba(191,164,111,0.5)', color: '#fff', padding: '8px 12px', borderRadius: 8, cursor: 'pointer' }}>Cancel</button>
            <button onClick={() => onConfirm && onConfirm(size)} style={{ background: '#BFA46F', border: 'none', color: '#fff', padding: '8px 12px', borderRadius: 8, cursor: 'pointer' }}>Use US {size.size}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
