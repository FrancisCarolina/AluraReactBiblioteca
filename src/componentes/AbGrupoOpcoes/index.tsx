import React from 'react';
import styled from 'styled-components';

export interface AbGrupoOpcoesProps {
  texto: string;
}

const SectionEstilizada = styled.section`
  width: 194px;
  height: 88px;
  border: 2px solid;
  border-color: #eb9b00;
  border-radius: 8px;
  background: #fff;
`;

export const AbGrupoOpcoes = () => {
  return (
    <>
      <SectionEstilizada>
        <header>E-book</header>
        <div>
          <strong>R$00,00</strong>
        </div>
        <footer>.pdf, .epub, .mob</footer>
      </SectionEstilizada>
      <SectionEstilizada>
        <header>E-book</header>
        <div>
          <strong>R$00,00</strong>
        </div>
        <footer>.pdf, .epub, .mob</footer>
      </SectionEstilizada>
      <SectionEstilizada>
        <header>E-book</header>
        <div>
          <strong>R$00,00</strong>
        </div>
        <footer>.pdf, .epub, .mob</footer>
      </SectionEstilizada>
    </>
  );
};
