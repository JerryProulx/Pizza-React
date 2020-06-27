import React from 'react';
import GlobalStyle from './StyledComponent/GlobalStyle';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <>
        <GlobalStyle/>
        <Navbar/>
        <Banner/>
        <Menu/>
      </>
    </div>
  );
}

export default App;
