import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import HeadApps from './components/HeadApps';
import FooterApps from './components/FooterApps';
import SectionApps from './components/SectionApps';
import ArticleApps from './components/ArticleApps';

function App() {
  return (
    <div className="App">
      <HeadApps />
      <SectionApps />
      <ArticleApps />
      <FooterApps />
    </div>
  );
}

export default App;
