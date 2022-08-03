
import React, { useState } from 'react';

export default function Icone(properties) {
    const indiceParaClasse = ["porta", "arma", "dragao", "caveira", "replay"]
  





function RetornaIcone(indice) {
  switch (indice) {
    case 0:
      return <h1><i class="fa-solid fa-dungeon fa-10x porta"></i></h1>;
    case 1:
      return <h1><i class="fa-solid fa-khanda fa-10x arma"></i></h1>;
    case 2:
      return <h1><i class="fa-solid fa-dragon fa-10x dragao"></i></h1>;
    case 3:
      return <h1><i class="fa-solid fa-skull-crossbones fa-10x caveira"></i></h1>;
    case 4:
      return <h1><i class="fa-solid fa-arrow-rotate-left fa-10x replay"></i></h1>;

  }
}


function geraTexto(indice) {
  switch (indice) {
    case 0:
      return "Entre no Calabouço"
    case 1:
      return "Pegue a Arma ";
    case 2:
      return "Mate o Dragão";
    case 3:
      return "Dragão Assassinado !";
    case 4:
      return "Jogar de Novo";

  }
}

let iconeAtual = 0

    function SpawnaIconePrincipal() {

        const [contadorDeCliques, setaIndiceIcone] = useState(iconeAtual);
        if (contadorDeCliques == 5) {
          setaIndiceIcone(0)
        }
        return (
          <div>
            <h1 className={indiceParaClasse[contadorDeCliques]}>
                {geraTexto(contadorDeCliques)}
                </h1>

            <a href='#' onClick={() => setaIndiceIcone(contadorDeCliques + 1)}>
              {RetornaIcone(contadorDeCliques)}
              {console.log(indiceParaClasse[contadorDeCliques])}
            </a>
          </div>
        );
      }

  return (
    <div className='row'>
            <div className='col'>
              {SpawnaIconePrincipal()}
            </div>
          </div>
  )
}
