import React from 'react';
import styled from 'styled-components';




const Container = styled.div`
background-color: black;
height: 25vh;
display: flex;
color: white;
justify-content: center;
align-items: center;
font-size: 8vh;
font-weight: 700;
letter-spacing: 0.4vh;

@media (max-width: 920px) {
    height: 14vh;
    font-size: 7vw;
}

@media (max-width: 500px) {
    height: 100px;
}

`;




function Title(props:{title: string}) {  
  return (
    <>
      <Container>{props.title}</Container>
    </>
  );
}

export default Title;