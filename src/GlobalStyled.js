import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    
--color-dark-blue: #0B0D17;
--color-light-purple: #D0D6F9;
--color-off-white: #FFFFFF;
--color-light-gray-blue: #383B4B;
--color-light2-gray-blue: #595E78;
--color-white-hover:0 0% 100%;



--color-neutral-white: hsl(0, 0%, 100%);
--color-neutral-off-white: hsl(0, 0%, 94%);
--color-neutral-light-gray: hsl(0, 0%, 86%);
--color-neutral-smokey-gray: hsl(0, 1%, 44%);
--color-neutral-off-black: hsl(0, 0%, 8%);


 
}

#root{
 
  display: grid;
 
  
  
} 

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  
}

html {
  font-size: 62.5%;
 
}

body {
  font-family: 'Manrope', sans-serif;
  color: black;
  background: var(--color-dark-blue);
  display: grid;
  grid-template-rows: min-content 1fr;
  line-height: 1.5;
  display: grid;
 
}



input{
    font-size: 3.2rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}


button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}


h1,
h2,
h3,
h4 {
    font-family: 'Bellefair', serif;

}

p{
  font-family: 'Barlow', sans-serif;

}

:-webkit-any(article, aside, nav, section) h1 {
   
    margin-block-start: 0;
    margin-block-end: 0;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap; 
  border: 0;
}

`;
export default GlobalStyles;
