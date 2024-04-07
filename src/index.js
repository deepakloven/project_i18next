import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider
import './index.css';
import reportWebVitals from './reportWebVitals';
import i18next from 'i18next';
import global_np from '../components/np/global.json';
import global_en from '../components/en/global.json';
import global_ch from '../components/ch/global.json';
import Homepage from './components/Homepage';

i18next
  .use(I18nextProvider) // Use I18nextProvider
  .init({
    interpolation: { escapeValue: false },
    lng: "np", // Specify the default language
    resources: {
      np: {
        translation: global_np // Specify translation keys under "translation"
      },
      en: {
        translation: global_en
      },
      ch: {
        translation: global_ch
      }
    }
  });

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Homepage />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
