import { createRoot } from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import App from './components/App.jsx';
import { store } from './app/store.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>,
);
