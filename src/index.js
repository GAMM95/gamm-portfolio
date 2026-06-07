import React from 'react';
import { createRoot } from 'react-dom/client'; // Cambia esta línea
import './index.css';
import App from './App';

// Obtén la referencia del div con id "root"
const container = document.getElementById('root');
const root = createRoot(container);

// Renderiza la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
