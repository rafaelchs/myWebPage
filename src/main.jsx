import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/App.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import i18next_es from "./i18next/es/global.json";
import i18next_en from "./i18next/en/global.json";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
} from "react-router-dom";

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: "es",
  resources: {
    es: {
      global: i18next_es,
    },
    en: {
      global: i18next_en,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
