import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { FirebaseProvider } from './DataBase/FirebaseContext';

const container = document.getElementById('root');
// @ts-ignore
const root = createRoot(container);

root.render(
  <FirebaseProvider> 
    <App />
  </FirebaseProvider>
);
