interface Props {
  palavraParaAdivinhar: string;
  letrasPalpite: string[];
  contadorErro: number;
}

const Palavra = ({
  palavraParaAdivinhar,
  letrasPalpite,
  contadorErro,
}: Props) => {
  console.log(palavraParaAdivinhar);

  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "5rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {palavraParaAdivinhar.split("").map((char, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              color:
                !letrasPalpite.includes(char.toLowerCase()) && contadorErro > 5
                  ? "red"
                  : "initial",
              visibility:
                letrasPalpite.includes(char.toLowerCase()) || contadorErro > 5
                  ? "visible"
                  : "hidden",
            }}
          >
            {char}
          </span>
        </span>
      ))}
    </div>
  );
};

export default Palavra;
