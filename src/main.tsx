import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Inicializa o Meta Pixel (se VITE_META_PIXEL_ID estiver definido)
import { initPixel } from './lib/fbq';
initPixel();

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
