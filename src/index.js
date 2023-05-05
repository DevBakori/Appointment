import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/style.css'
import reportWebVitals from './reportWebVitals'; 
import Reg from './componants/Reg';


const root=ReactDOM.createRoot(document.getElementById("external-style"));
root.render(
<Reg />
);
 reportWebVitals();