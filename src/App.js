import React from "react";
//import styled from "styled-components"
import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./Chute";

export default function App() {
  const [comecou, setComecou] = React.useState(false);
  const [clicados, setClicados] = React.useState([]);
  const [palavra, setPalavra] = React.useState([]);
  const [palavra2, setPalavra2] = React.useState(""); // l,u,a
  const [conterros, setConterros] = React.useState(0);
  const [chute, setChute] = React.useState("");
  const [resposta, setResposta] = React.useState("");

  let start = function (palavras) {
    setComecou(true);
    setClicados([]);
    setConterros(0);
    setChute("");

    let adivinhada =
      palavras.palavras[Math.floor(Math.random() * palavras.palavras.length)];
    console.log(adivinhada, typeof adivinhada);
    setResposta(adivinhada);
    setPalavra([...Array(adivinhada.length).fill("_")]);
    setPalavra2(adivinhada.split("")); //[l,u,a]
  };
  let chutar = function (props) {
    let chute = palavra2.toString("");
    let pal = props.split("");
    pal = pal.toString("");
    if (
      chute
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase() ===
      pal
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase()
    ) {
      setPalavra([...palavra2]);
    } else {
      setConterros(6);
      setPalavra([...palavra2]);
    }
  };
  let clicou = function (props) {
    let arrayindex = [];
    setClicados([...clicados, props.index]);
    let verifica = palavra;
    palavra2.forEach((s, index) => {
      if (s.normalize("NFD").replace(/[\u0300-\u036f]/g, "") === props.letra) {
        arrayindex.push(index);
      }
    });
    arrayindex.forEach((s) => {
      verifica[s] = palavra2[s];
      setPalavra([...palavra, verifica[s]]);
    });
    let palavranormalizada = palavra2.toString();
    palavranormalizada = palavranormalizada
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    palavranormalizada.includes(props.letra)
      ? setPalavra([...verifica])
      : setConterros(conterros + 1);
    if (conterros === 6) {
      setPalavra([...palavra2]);
    }
  };

  return (
    <>
      <Jogo
        comeca={start}
        desafio={palavra}
        cont={conterros}
        fim={palavra2}
        answer={resposta}
      />
      <Letras
        iniciado={comecou}
        clicados={clicou}
        lista={clicados}
        desafio={palavra}
        cont={conterros}
      />
      <Chute
        iniciado={comecou}
        desafio={palavra}
        cont={conterros}
        chutar={chute}
        setchutar={setChute}
        funcao={chutar}
      />
    </>
  );
}
