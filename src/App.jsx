// import { useState } from 'react'
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";
import SwitchCover from "./Switchcover";
import Information from "./Information";
import Display from "./Display";
function App() {
  return (
    <body>
      <div className="main">
        <SwitchCover />
        <Information />
        <Display />
      </div>
    </body>
  );
}

export default App;
// library.add(fab, fas, far);
