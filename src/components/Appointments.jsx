import React, { useEffect, useState } from 'react';
import './Appointments.css';

const getStoredAppointments = () => {
  try { const raw = localStorage.getItem('appointments'); return raw ? JSON.parse(raw) : []; } catch { return []; }
};

const Appointments = () => {
  const [appointments, setAppointments] = useState(getStoredAppointments());
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState({ title: 'Virtual Gemologist', date: '', time: '' });

  useEffect(() => {
    try { localStorage.setItem('appointments', JSON.stringify(appointments)); } catch {}
  }, [appointments]);

  const addAppointment = (e) => {
    e.preventDefault();
    if (!form.date || !form.time) return;
    setAppointments(prev => [...prev, { ...form, status: 'Pending' }]);
    setFormOpen(false);
    setForm({ title: 'Virtual Gemologist', date: '', time: '' });
  };

  return (
    <div className="inner-border" style={{background: 'rgba(255, 255, 255, 0.70)', boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05), 0px 0px 0px 0px rgba(0, 0, 0, 0.00), 0px 0px 0px 0px rgba(0, 0, 0, 0.00)', backdropFilter: 'blur(12px)', '--border-style': 'solid', '--border-color': 'rgba(191, 164, 111, 0.10)', '--border-width': '1px', '--border-radius': '12px', padding: '25px', display: 'flex', gap: '16px', flexDirection: 'column', alignItems: 'stretch'}}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div style={{gap: '8px', display: 'flex', flexDirection: 'row', alignItems: 'stretch'}}>
          <div className="image" data-resource-id="1982ccf9cecf6cd-27cdcaa6-b497-4f2b-9483-73753f4df72c.svg" style={{backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9cecf6cd-27cdcaa6-b497-4f2b-9483-73753f4df72c.svg')", '--svg-fill-colors': 'rgb(191, 164, 111)', width: '20px', height: '20px', marginTop: '4px', backgroundSize: 'cover'}}></div>
          <div style={{width: '130.7px', color: '#0F0F0F', fontSize: '20px', fontWeight: 600, lineHeight: '28px', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '28px'}}>
            Appointments
          </div>
        </div>
        <button onClick={() => setFormOpen(true)} style={{background: '#BFA46F', color:'#fff', borderRadius: '6px', border:'none', padding: '4px 12px', cursor:'pointer'}}>+ New</button>
      </div>
      {appointments.map((a, idx) => (
        <div key={idx} className="list-item inner-border" style={{'--border-style': 'solid', '--border-color': 'rgba(191, 164, 111, 0.10)', '--border-width': '1px', '--border-radius': '8px', padding: '13px', display: 'flex', gap: '4px', flexDirection: 'column'}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{color:'#0F0F0F', fontWeight:500}}>{a.title}</div>
            <div style={{background: a.status==='Confirmed'?'#DCFCE7':'#FEF9C3', borderRadius:9999, padding:'2px 8px', fontSize:12}}>{a.status||'Pending'}</div>
          </div>
          <div style={{display:'flex', gap:8, color:'rgba(15,15,15,0.7)'}}>
            <div>{new Date(a.date).toLocaleDateString()}</div>
            <div>•</div>
            <div>{a.time}</div>
          </div>
        </div>
      ))}
      {formOpen && (
        <form onSubmit={addAppointment} className="inner-border" style={{'--border-style': 'solid','--border-color': 'rgba(191,164,111,0.2)','--border-width': '1px','--border-radius': '8px', padding: 12, display:'grid', gap:8}}>
          <input value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})} placeholder="Title" style={{padding:8, border:'1px solid rgba(0,0,0,0.1)', borderRadius:6}}/>
          <input type="date" value={form.date} onChange={(e)=>setForm({...form,date:e.target.value})} required style={{padding:8, border:'1px solid rgba(0,0,0,0.1)', borderRadius:6}}/>
          <input type="time" value={form.time} onChange={(e)=>setForm({...form,time:e.target.value})} required style={{padding:8, border:'1px solid rgba(0,0,0,0.1)', borderRadius:6}}/>
          <div style={{display:'flex', gap:8, justifyContent:'flex-end'}}>
            <button type="button" onClick={()=>setFormOpen(false)} style={{background:'transparent', border:'1px solid rgba(0,0,0,0.15)', padding:'8px 12px', borderRadius:6, cursor:'pointer'}}>Cancel</button>
            <button type="submit" style={{background:'#BFA46F', color:'#fff', border:'none', padding:'8px 12px', borderRadius:6, cursor:'pointer'}}>Save</button>
          </div>
        </form>
      )}
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <a href="https://calendar.google.com" target="_blank" rel="noopener noreferrer" style={{color:'#BFA46F', fontWeight:500}}>View Calendar</a>
        <a href={`https://wa.me/256778701307?text=${encodeURIComponent('Hi Rosey, I would like to book a video call for a jewelry consultation.')}`} target="_blank" rel="noopener noreferrer" style={{color:'#BFA46F', fontWeight:500}}>Book Video Call</a>
      </div>
    </div>
  );
};

export default Appointments;
