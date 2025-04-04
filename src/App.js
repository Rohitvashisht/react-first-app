import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Header from './components/Header';
import RestroContainer from './components/RestroContainer';


const AppLayoutComponent = () => {
  return (
    <div className='app'>
      <Header />
      <RestroContainer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayoutComponent />);