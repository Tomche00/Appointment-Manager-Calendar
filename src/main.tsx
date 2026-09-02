import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Remove the retired browser cache once; all application data now comes from the JSON API.
for (const key of ['medical-patients', 'medical-appointments', 'medical-settings']) {
  try {
    window.localStorage.removeItem(key)
  } catch {
    // Storage may be blocked by the browser; the app never depends on it.
  }
}

createRoot(document.getElementById("root")!).render(<App />);
