import React, { useState } from 'react';
import ProjectData from './DataBase/ProjectData';
import Experience from './DashehraTemplate/Experience';


function App() {
    let [placementMode, setPlacementMode] = useState(true);
    return (
      <>
        <ProjectData/>
        <Experience/>
        <div
          id="zappar-placement-ui"
          onClick={() => {
            setPlacementMode((currentPlacementMode) => !currentPlacementMode);
          }}
          onKeyDown={() => {
            setPlacementMode((currentPlacementMode) => !currentPlacementMode);
          }}
          role="button"
          tabIndex={0}
        >
          Tap here to
          {placementMode ? ' place ' : ' pick up '}
          the object
        </div>
      </>
    );
}

export default App;
