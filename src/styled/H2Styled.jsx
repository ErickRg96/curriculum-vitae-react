import React from 'react';
import styled from 'styled-components';

// Componente presentacional que permitira recibir un propy empujar un nuevo componente que va a permitir encargarse de la vista

const StyledH2 = styled.h2`
   font-family: 'Roboto', sans-serif;
   font-weight: 300;
   letter-spacing: 0.8px;
   margin: 1em 0 0 0;
   color: #C2185B;
`;

const H2Styled = ({ name }) => <StyledH2>{name}</StyledH2>

export default H2Styled; 