import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }

  .app {
    background: linear-gradient(to right bottom, #49a09d, #203fee);
    height: 200vh;
    padding: 40px;
  }
  .clickable {
    cursor: pointer;
  }
  .zipCodeSubmit {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    padding-top: 5px;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 5px;
    max-width: 600px;
    background: #e8e8e8;
  }
  .zipCode {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    font-size: 18px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 5px 10px;
    transition: all 0.2s ease-in-out;
  }
  .zipCode:hover {
    transform: scale(1.01);
  }
  .zipCode-list {
    padding: 5px;
    padding-top: 0;
    padding-bottom: 0;
    border-radius: 5px;
    max-width: 600px;
    background: #e8e8e8;
  }
  .input {
    padding: 5px;
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
  }
  .center {
    margin: auto;
  }
  .redText {
    color: #C21818;
  }
  .greenText {
    color: #5E9E9D;
  }
  .blueText {
    color: #345BD2;
  }
  .whiteText {
    color: #fff;
  }
  h1 {
    text-shadow: 2px 2px rgba(0, 0, 0, 0.15);
  }
  .modalButton {
    float: right;
  }
  .container {
    position: absolute;
    width: 100%;
    top: 10%;
    left: 0%;
  }
  table {
    width: 100%;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }  
`;
