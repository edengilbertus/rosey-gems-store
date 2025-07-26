import React from 'react';
import './Appointments.css';

const Appointments = () => {
  return (
    <div className="inner-border" style={{background: 'rgba(255, 255, 255, 0.70)', boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05), 0px 0px 0px 0px rgba(0, 0, 0, 0.00), 0px 0px 0px 0px rgba(0, 0, 0, 0.00)', backdropFilter: 'blur(12px)', '--border-style': 'solid', '--border-color': 'rgba(191, 164, 111, 0.10)', '--border-width': '1px', '--border-radius': '12px', padding: '25px', display: 'flex', gap: '16px', flexDirection: 'column', alignItems: 'stretch'}}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div style={{gap: '8px', display: 'flex', flexDirection: 'row', alignItems: 'stretch'}}>
          <div className="image" data-resource-id="1982ccf9cecf6cd-27cdcaa6-b497-4f2b-9483-73753f4df72c.svg" style={{backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9cecf6cd-27cdcaa6-b497-4f2b-9483-73753f4df72c.svg')", '--svg-fill-colors': 'rgb(191, 164, 111)', width: '20px', height: '20px', marginTop: '4px', backgroundSize: 'cover'}}></div>
          <div style={{width: '130.7px', color: '#0F0F0F', fontSize: '20px', fontWeight: 600, lineHeight: '28px', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '28px'}}>
            Appointments
          </div>
        </div>
        <div style={{background: '#BFA46F', borderRadius: '6px', display: 'flex', width: '64px', justifyContent: 'center', alignItems: 'center', paddingLeft: '12px', paddingRight: '12px', paddingTop: '4px', paddingBottom: '4px'}}>
          <div style={{color: '#FFFFFF', lineHeight: '20px', textAlign: 'center', width: '40px', justifyContent: 'center', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '20px'}}>
            + New
          </div>
        </div>
      </div>
      <div className="list-item inner-border" style={{'--border-style': 'solid', '--border-color': 'rgba(191, 164, 111, 0.10)', '--border-width': '1px', '--border-radius': '8px', padding: '13px', display: 'flex', gap: '4px', flexDirection: 'column', alignItems: 'stretch'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <div style={{color: '#0F0F0F', fontSize: '16px', fontWeight: 500, lineHeight: '24px', width: '136px', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '24px'}}>
            Virtual Gemologist
          </div>
          <div style={{background: '#DCFCE7', borderRadius: '9999px', display: 'flex', width: '75px', alignItems: 'flex-start', justifyContent: 'center', minHeight: '24px', paddingLeft: '8px', paddingRight: '8px', paddingTop: '2px'}}>
            <div style={{color: '#166534', fontSize: '12px', lineHeight: '16px', width: '59px', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '16px'}}>
              Confirmed
            </div>
          </div>
        </div>
        <div style={{gap: '8px', display: 'flex', flexDirection: 'row', alignItems: 'stretch'}}>
          <div style={{color: 'rgba(15, 15, 15, 0.70)', lineHeight: '20px', width: '74px', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '20px'}}>
            Oct 18, 2023
          </div>
          <div className="image" data-resource-id="1982ccf9cec938a-55cdf837-571f-4102-bd44-6fe67b4680da.svg" style={{backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9cec938a-55cdf837-571f-4102-bd44-6fe67b4680da.svg')", '--svg-fill-colors': 'rgb(15, 15, 15)', width: '7px', height: '20px', backgroundSize: 'cover'}}></div>
          <div style={{color: 'rgba(15, 15, 15, 0.70)', lineHeight: '20px', width: '58px', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '20px'}}>
            10:00 AM
          </div>
        </div>
      </div>
      <div className="list-item inner-border" style={{'--border-style': 'solid', '--border-color': 'rgba(191, 164, 111, 0.10)', '--border-width': '1px', '--border-radius': '8px', padding: '13px', display: 'flex', gap: '4px', flexDirection: 'column', alignItems: 'stretch'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <div style={{color: '#0F0F0F', fontSize: '16px', fontWeight: 500, lineHeight: '24px', width: '178px', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '24px'}}>
            Private In-Store Viewing
          </div>
          <div style={{background: '#FEF9C3', borderRadius: '9999px', display: 'flex', width: '60px', alignItems: 'flex-start', justifyContent: 'center', minHeight: '24px', paddingLeft: '8px', paddingRight: '8px', paddingTop: '2px'}}>
            <div style={{color: '#854D0E', fontSize: '12px', lineHeight: '16px', width: '44px', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '16px'}}>
              Pending
            </div>
          </div>
        </div>
        <div style={{gap: '8px', display: 'flex', flexDirection: 'row', alignItems: 'stretch'}}>
          <div style={{color: 'rgba(15, 15, 15, 0.70)', lineHeight: '20px', width: '69px', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '20px'}}>
            Nov 5, 2023
          </div>
          <div className="image" data-resource-id="1982ccf9cec938a-55cdf837-571f-4102-bd44-6fe67b4680da.svg" style={{backgroundImage: "url('https://static.motiffcontent.com/private/resource/image/1982ccf9cec938a-55cdf837-571f-4102-bd44-6fe67b4680da.svg')", '--svg-fill-colors': 'rgb(15, 15, 15)', width: '7px', height: '20px', backgroundSize: 'cover'}}></div>
          <div style={{color: 'rgba(15, 15, 15, 0.70)', lineHeight: '20px', width: '50px', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '20px'}}>
            2:30 PM
          </div>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div style={{color: '#BFA46F', fontWeight: 500, lineHeight: '20px', textAlign: 'center', width: '92px', justifyContent: 'center', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '20px'}}>
          View Calendar
        </div>
        <div style={{color: '#BFA46F', fontWeight: 500, lineHeight: '20px', textAlign: 'center', width: '100px', justifyContent: 'center', alignItems: 'center', display: 'flex', textOverflow: 'ellipsis', minHeight: '20px'}}>
          Book Video Call
        </div>
      </div>
    </div>
  );
};

export default Appointments;
