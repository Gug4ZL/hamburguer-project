import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Containers/Home';
import GlobalStyle from './Containers/styles/globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle/>
    < Home/>
  </>
);


