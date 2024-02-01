import "./Teclado.css";

const letras = [
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

interface Props {
  handleClick: (letra: string) => void;
  letrasPalpite: string[];
  palavraParaAdivinhar: string;
}

const Teclado = ({
  handleClick,
  letrasPalpite,
  palavraParaAdivinhar,
}: Props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {letras.map((letra) => (
        <button
          onClick={() => {
            console.log(letra), handleClick(letra);
          }}
          className={
            letrasPalpite.includes(letra) &&
            palavraParaAdivinhar.includes(letra)
              ? "btn active"
              : letrasPalpite.includes(letra) &&
                !palavraParaAdivinhar.includes(letra)
              ? "btn inactive"
              : "btn"
          }
          key={letra}
          disabled={letrasPalpite.includes(letra)} // Disable the button if the letter has been chosen
        >
          {letra}
        </button>
      ))}
    </div>
  );
};

export default Teclado;
