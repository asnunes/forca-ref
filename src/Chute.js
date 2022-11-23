//import palavras from "./palavras"
import React from "react";
import styled from "styled-components";

export default function Chute(props) {
  return (
    <Caixachute>
      <p>Já sei a palavra!</p>
      <input
        data-test="guess-input"
        value={props.chutar}
        disabled={
          props.iniciado === false ||
          props.cont === 6 ||
          !props.desafio.includes("_")
            ? true
            : false
        }
        onChange={(e) => props.setchutar(e.target.value)}
      />
      <button
        data-test="guess-button"
        disabled={
          props.iniciado === false ||
          props.cont === 6 ||
          !props.desafio.includes("_")
            ? true
            : false
        }
        onClick={() => {
          props.funcao(props.chutar);
        }}
      >
        {" "}
        Chutar{" "}
      </button>
    </Caixachute>
  );
}
const Caixachute = styled.div`
  align-itens: center;
  justify-content: center;
  height: 100px;
  width: 1024px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  font-size: 18px;
  button {
    height: 50px;
    width: 60px;
    margin-left: 20px;
    font-size: 14px;
    background-color: lightblue;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    &:disabled {
      background-color: grey;
    }
  }
  input {
    height: 43px;
    width: 300px;
    margin-left: 20px;
    outline: solid 1px brown;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    &:disabled {
      background-color: grey;
      outline: solid 1px grey;
    }
  }
`;
