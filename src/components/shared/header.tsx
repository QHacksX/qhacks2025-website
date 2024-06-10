import React from 'react';
import Wave from 'react-wavify';

const InvertedWaveBackground = () => {
  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Red Wave*/}
      <div style={{ position: 'absolute', width: '100%', height: '50%', overflow: 'hidden' }}>
        <Wave fill='#ff4040'
              paused={false}
              style={{ width: '100%', height: '40%', transform: 'scaleY(-1)' }} 
              options={{
                height: 40,
                amplitude: 21,
                speed: 0.15,
                points: 5 
              }}
        />
      </div>

      {/* Gold Wave */}
      <div style={{ position: 'absolute', width: '100%', height: '50%', overflow: 'hidden' }}>
        <Wave fill='#ffd24d'
              paused={false}
              style={{ width: '100%', height: '28%', transform: 'scaleY(-1)' }} 
              options={{
                height: 40,
                amplitude: 20,
                speed: 0.12,
                points: 5
              }}
        />
      </div>
              {/* Red Wave */}
      <div style={{ position: 'absolute', width: '100%', height: '50%', overflow: 'hidden' }}>
        <Wave fill='#4040ff'
              paused={false}
              style={{ width: '100%', height: '20%', transform: 'scaleY(-1)' }} 
              options={{
                height: 40,
                amplitude: 20,
                speed: 0.12,
                points: 5
              }}
        />
      </div>

              
      
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', zIndex: 10 }}>
        Your Content Goes Here
      </div>
    </div>
  );
};

export default InvertedWaveBackground;
