import App from './App.jsx'
import './style/style.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <App />
 </BrowserRouter>
  
);
