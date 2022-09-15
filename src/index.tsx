import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

const container = document.getElementById('root');
// Create a root.
if (container) {
  const root = ReactDOMClient.createRoot(container);

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <Authenticator.Provider>
            <App />
          </Authenticator.Provider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
