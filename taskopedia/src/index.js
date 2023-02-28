import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));


function MainHeader(){
  return(
    <h1>React course</h1>
  )
}

function SubHeader(){
  return(
    <h2>March 2023 I am going to be a reaö frontend developer</h2>
  )
}

function Header(){
  return(
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  )
}

function MainBody(){
  return(
    <div>Test text</div>
  )
}

function Footer(){
  return(
    <p>Happy coding!</p>
  )
}

root.render(
  <React.StrictMode>
    <Header />
    <MainBody />
    <Footer />
  </React.StrictMode>
);
