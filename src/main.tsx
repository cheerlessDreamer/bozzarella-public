import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

console.log('main.tsx executing');

const rootElement = document.getElementById('root');
console.log('Root element found:', rootElement);

if (rootElement) {
  try {
    const root = createRoot(rootElement);
    console.log('Root created successfully');
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('Render called');
  } catch (error) {
    console.error('Error rendering app:', error);
    
    // Fallback rendering
    rootElement.innerHTML = `
      <div style="padding: 40px; color: white; background: red; font-family: Arial;">
        <h1>Error Rendering App</h1>
        <p>${error?.message || 'Unknown error'}</p>
      </div>
    `;
  }
} else {
  console.error('Root element not found');
  document.body.innerHTML = `
    <div style="padding: 40px; color: white; background: red; font-family: Arial;">
      <h1>Error: Root Element Not Found</h1>
      <p>The application could not start because the root element was not found.</p>
    </div>
  `;
}
