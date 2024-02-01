import DesenhoForca from "./Componentes/DesenhoForca";
import Palavra from "./Componentes/Palavra";
import Teclado from "./Componentes/Teclado";
import palavras from "./wordList.json";
import { useEffect, useState } from "react";

function App() {
  const palavraAleatoria = () => {
    const randomIndex = Math.floor(Math.random() * palavras.length);
    return palavras[randomIndex];
  };

  const [palavraParaAdivinhar, setPalavraParaAdivinhar] = useState<string>(
    palavraAleatoria()
  );

  console.log(palavraParaAdivinhar);

  const [letrasPalpite, setLetrasPalpite] = useState<string[]>([]);

  const [contadorErro, setContadorErro] = useState(0);
  console.log(contadorErro);

  const isWordConstructible = palavraParaAdivinhar
    .split("")
    .every((char) => letrasPalpite.includes(char));

  const message01 =
    contadorErro > 5
      ? "You Lose, Press Enter to try again."
      : "Let´s Play a Game";

  const message02 = isWordConstructible
    ? "Congrats, You Won, Press Enter to try again."
    : "Let´s Play a Game";

  const handleClick = (letra: string) => {
    if (/^[a-zA-Z]$/.test(letra) && !letrasPalpite.includes(letra)) {
      setLetrasPalpite([...letrasPalpite, letra]);
      palavraParaAdivinhar.includes(letra.toLowerCase())
        ? null
        : setContadorErro((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (/^[a-zA-Z]$/.test(event.key) && !letrasPalpite.includes(event.key)) {
        setLetrasPalpite((prevKeystrokes) => [...prevKeystrokes, event.key]);
        palavraParaAdivinhar.includes(event.key.toLowerCase())
          ? null
          : setContadorErro((prev) => prev + 1);
      }
    };

    // Add event listener for keydown
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [letrasPalpite]);

  // ------------------------------------------------------------
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        if (contadorErro > 5 || isWordConstructible) {
          setPalavraParaAdivinhar(palavraAleatoria);
          setLetrasPalpite([]);
          setContadorErro(0);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [contadorErro, letrasPalpite, palavraParaAdivinhar]);
  // ------------------------------------------------------------

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWordConstructible ? message02 : message01}
      </div>
      <DesenhoForca contadorErro={contadorErro}></DesenhoForca>
      <Palavra
        letrasPalpite={letrasPalpite}
        palavraParaAdivinhar={palavraParaAdivinhar}
        contadorErro={contadorErro}
      ></Palavra>
      <div style={{ alignSelf: "stretch" }}>
        <Teclado
          handleClick={(letra) => {
            handleClick(letra);
          }}
          letrasPalpite={letrasPalpite}
          palavraParaAdivinhar={palavraParaAdivinhar}
        ></Teclado>
      </div>
    </div>
  );
}

export default App;
