import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.jsx';
import { AuthProvider } from './app/Context/auth';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <AuthProvider>
        <StrictMode>
            <App />
        </StrictMode>
    </AuthProvider>
);

