import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html, body, #root{
    height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased; /* Deixa a fonte mais definida */
  }

  body, input, button, select{
    font: 14px 'Roboto', sans-serif;
  }
  a{
    text-decoration: none;
  }
  ul {
    list-style: none
  }
  button {
    cursor: pointer;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    background: #fff;
    padding: 30px 26px;
    border-radius: 4px;

    button {
      margin: 5px 0 0;
      height: 44px;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
    }
    a {
      color: #fff;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
 `;
