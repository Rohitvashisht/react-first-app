import React from 'react';
import * as ReactDOM from 'react-dom/client';


const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" />
      </div>
      <div className='nav-links'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>
        <input type="search" />
      </div>
      <div className='restro-container'>
        <RestroCard restroName="Meghana Foods" cuisine="South Indian" />
        <RestroCard restroName="KFC" cuisine="Fast Foods" />
      </div>
    </div>
  )
}

const styleCard = {
  backgroundColor: "#f0f0f0"
}


const RestroCard = (props) => {
  const {restroName, cuisine} = props;
  return (
    <div className='restro-card' style={styleCard}>
      <img alt="restor-logo" src="https://media-cdn.tripadvisor.com/media/photo-s/28/c0/a9/6e/thai-food.jpg" />
      <h3>{restroName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 star</h4>
      <h4>38 minutes</h4>
    </div>
  )
}

const AppLayoutComponent = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayoutComponent />);