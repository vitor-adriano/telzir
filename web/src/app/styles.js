import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --primary: #e85472;
    --secondary: #e96658;
    --tertiary: #eb945b;
    --dark-gray: #333333;
    --light-gray: #e8e8e8;
    --background: #f1f1f1;
  }

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background: var(--background);
    color: var(--dark-gray);
    font-size: 16px;
  }

  body,
  button,
  input,
  select {
    font-family: "Roboto", Segoe UI, Tahoma, sans-serif;
  }

  a {
    display: inline-block;
    border-bottom: 1px dotted var(--secondary);
    color: var(--secondary);
    text-decoration: none;
    padding-bottom: 2px;
  }
`
