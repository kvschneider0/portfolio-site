import { createGlobalStyle } from 'styled-components';

import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Chess from './components/Chess.js';
import Games from './components/Games.js';
import Math from './components/Math.js';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
          <Home />
          <Chess />
          <Games />
          <Math />       
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
    body {
      background-color: #000000;
    }
`
