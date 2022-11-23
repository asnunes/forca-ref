import React from "react";
import styled from "styled-components";
function Botao(props) {
  return (
    <>
      <button
        data-test="letter"
        disabled={
          props.iniciado === false ||
          props.clicados.includes(props.index) ||
          props.erros === 6 ||
          !props.desaf.includes("_")
            ? true
            : false
        }
        onClick={() => {
          props.funcao(props);
        }}
      >
        {props.letra.toUpperCase()}
      </button>
    </>
  );
}
export default function Letras(props) {
  const alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return (
    <Caixabotoes>
      {alfabeto.map((s, index) => (
        <Botao
          letra={s}
          iniciado={props.iniciado}
          index={index}
          funcao={props.clicados}
          clicados={props.lista}
          erros={props.cont}
          desaf={props.desafio}
          //data-test="letter"
        />
      ))}
    </Caixabotoes>
  );
}

const Caixabotoes = styled.div`
  height: 180px;
  width: 1024px;
  padding: 10px;
  box-sizing: border-box;
  justify-content: center;
  button {
    width: 70px;
    height: 70px;
    border-radius: 5px;
    background-color: lightblue;
    margin: 3px;
    margin-bottom: 10px;
    text-align: center;
    border: solid 1px blue;
    font-size: 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    &:disabled {
      background-color: grey;
      border: solid 1px black;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;
