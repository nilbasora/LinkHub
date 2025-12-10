// src/App.tsx
import React from 'react';
import { ThemeProvider } from './theme/ThemeProvider';
import { LinkPage } from './components/LinkPage';
import { configError } from './config/loadConfig';

// -----------------------------------------------------
// Development error screen (clear + technical)
// -----------------------------------------------------
const DevConfigError: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100 p-6">
      <div className="p-6 rounded-2xl bg-white shadow-md max-w-2xl w-full">
        <h1 className="text-xl font-bold text-red-600 mb-2">
          Invalid <code>setup.yaml</code>
        </h1>

        <p className="text-gray-700 mb-3">
          Check the browser console for full validation details
          (expected structure, missing fields, invalid values, etc.).
        </p>

        {configError && (
          <pre className="mt-2 text-xs bg-red-50 text-red-700 p-3 rounded-md overflow-auto max-h-64">
            {JSON.stringify(configError.format(), null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
};

// -----------------------------------------------------
// Production error screen (soft, friendly, non-technical)
// -----------------------------------------------------
const ProdConfigError: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-950 to-black px-6">
      <div className="max-w-md w-full bg-black/60 border border-white/10 rounded-2xl shadow-xl p-6 text-center text-slate-100 backdrop-blur">
        <h1 className="text-lg font-semibold mb-2">
          This page is not ready yet
        </h1>

        <p className="text-sm text-slate-300 mb-4">
          The content for this LinkHub profile hasn't been set up correctly yet.
        </p>

        <p className="text-xs text-slate-400">
          <span className="font-semibold">If you are the owner</span>, please
          review your <code>setup.yaml</code> file and ensure all required
          fields are correctly filled.
          You may also open the browser console to see more details.
        </p>
      </div>
    </div>
  );
};

// -----------------------------------------------------

export default function App() {
  if (configError) {
    // Development: show detailed technical error
    if (!import.meta.env.PROD) {
      return <DevConfigError />;
    }

    // Production: soft non-technical message
    return <ProdConfigError />;
  }

  // Config OK → normal render
  return (
    <ThemeProvider>
      <LinkPage />
    </ThemeProvider>
  );
}
