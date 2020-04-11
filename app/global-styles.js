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
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
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
  
  a, a:active, a:visited {
    color: black!important;
  }
  
  .bg-clipboard {
    background-image:url('data:image/svg+xml;;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="500" height="100" viewBox="0 0 4442 720"><path d="M36,297.64c317.62,0,428,134.58,696,136.74S1160,364,1436,389s431.72-102.09,618-91.36,505.93,73.37,715,72.29,339,72,674,64.45,712.27,157.83,920,174l46,111.14H36Z" ></path></svg>')
  }
  
  .right {
    float:right;
  }
`;

// .container {
//   height: calc(100vh - 44px);
// }

export default GlobalStyle;
