import React, { useState, useRef, Suspense } from 'react';
import { ZapparCamera, InstantTracker, ZapparCanvas } from '@zappar/zappar-react-three-fiber';
import Avatar from './Avatar';
import FireEffect from './FireEffect';


function Experience() {
    let [placementMode, setPlacementMode] = useState(true);
    const zapparCameraRef = useRef();

    return (
        <ZapparCanvas>
          <Suspense>
          <ZapparCamera ref={zapparCameraRef}/>
          <InstantTracker placementMode={placementMode} placementCameraOffset={[0, 0, -5]}>
            <Avatar position={[0, -1.5, 0]} scale={[1.4, 1.4, 1.4]}/>
             <FireEffect position={[0,2,0]} rotation={[-0.2,0,0]} scale={[2,7,2]}/>
          </InstantTracker>
          <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
          </Suspense>
        </ZapparCanvas>
    );
}

export default Experience;
