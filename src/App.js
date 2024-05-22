import React, { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter, useNavigate } from 'react-router-dom'
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import store from './store';
import history from './history'
import Layouts from './layouts'
import { THEME_CONFIG } from './configs/AppConfig';
import './lang'
import { AUTH_TOKEN } from 'constants/AuthConstant';

const themes = {
  dark: `${process.env.PUBLIC_URL}/css/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/css/light-theme.css`,
};

const environment = process.env.NODE_ENV


function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter history={history}>
          <ThemeSwitcherProvider
            themeMap={themes}
            defaultTheme={THEME_CONFIG.currentTheme}
            insertionPoint="styles-insertion-point"
          >
            <Layouts />
          </ThemeSwitcherProvider>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
