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
  .capitalize {
    text-transform: capitalize;
  }
  .clickable {
    cursor: pointer;
  }
  .center {
    margin: auto;
  }
  .redText {
    color: #C21818;
  }
  .yellowText {
    color: #F0C560;
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
  .floatRight {
    float: right;
  }
  .ReactModal__Content {
    background: #333333 !important;
  }
  .ReactModal__Overlay {
    background-color: rgba(33, 33, 33, 0.75) !important;
  }
`;
