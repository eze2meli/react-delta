import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,400;1,600&display=swap');

  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    color: #24292e;
  }

  body {
    font-family: 'Raleway', sans-serif;
  }

  body.fontLoaded {
    font-family: 'Raleway', sans-serif;
  }
  
  .spa-container {
    height: 100%;
  }

  #app {
    background-color: #fff;
    min-height: 100%;
    min-width: 100%;
    max-height: 100%;
    max-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
    font-size: 12px;
  }
  
  .pagehead {
    position: relative;
    padding-top: 2px;
    border-bottom: 1px solid #e1e4e8;
    background-color: #fafbfc!important;
    min-width: 100%;
    max-width: 100%;
    min-height: 44px;
    max-height: 44px;
  }
  
  .pagecontent {
    min-width: 100%;
    max-width: 100%;
    min-height: calc(100vh - 44px);
    max-height: calc(100vh - 44px);
  }
  
  .height-pagecontent {
    height: calc(100vh - 44px);
  }
  
  a, a:active, a:visited {
    color: black!important;
  }
  
  .right {
    float:right;
  }
`;

// .container {
//   height: calc(100vh - 44px);
// }

export default GlobalStyle;
