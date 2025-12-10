import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { pageConfig } from './config/loadConfig';

// --- SET PAGE TITLE ---
if (pageConfig.profile?.name) {
  document.title = pageConfig.profile.name;
}

// --- SET FAVICON ---
const avatarUrl = pageConfig.profile?.avatarUrl;

if (avatarUrl) {
  const favicon = document.querySelector<HTMLLinkElement>('#dynamic-favicon');

  if (favicon) {
    // Detect correct MIME type from file extension
    const ext = avatarUrl.split('.').pop()?.toLowerCase();

    let type = 'image/png'; // default
    if (ext === 'svg') type = 'image/svg+xml';
    else if (ext === 'ico') type = 'image/x-icon';
    else if (ext === 'jpg' || ext === 'jpeg') type = 'image/jpeg';
    else if (ext === 'png') type = 'image/png';

    favicon.type = type;
    favicon.href = avatarUrl;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
